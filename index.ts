import { createLogger, setDefaultLoggerLevel } from '@rocketmakers/shell-commands/lib/logger';
import { LoggerLevel } from '@rocketmakers/log';
import { Args } from '@rocketmakers/shell-commands/lib/args';
import { Shell } from '@rocketmakers/shell-commands/lib/shell';
import { FileSystem } from '@rocketmakers/shell-commands/lib/fs';
import { resolve } from 'path';
import { copyFile, rmdir } from 'fs';

export function getFileExtension(filename: string): string {
  const ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? '' : ext[1];
}

export async function copyFilesAsync(srcFile: string, dstFile: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    copyFile(srcFile, dstFile, (err) => {
      if (err) {
        reject(err);
      }

      resolve(true);
    });
  });
}

export async function removeDirectoryAsync(dirPath: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    rmdir(dirPath, (err) => {
      if (err) {
        reject(err);
      }

      resolve(true);
    });
  });
}

(async () => {
  const args = await Args.match({
    log: Args.single({
      description: 'The log level',
      shortName: 'l',
      defaultValue: 'info',
      validValues: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
    }),
  });
  if (!args) {
    process.exit(-1);
  }
  setDefaultLoggerLevel(args.log as LoggerLevel);
  const logger = createLogger('National Grid Api Client');

  const tmpOutputPath = resolve(__dirname, './tmp/nationalgrid-api');

  const onshapeSwaggerPath = resolve(
    __dirname,
    '.',
    'openapi.json'
  );
  const outputPath = resolve(__dirname, '.', 'nationalgrid', 'sdk');

  try {
    await FileSystem.makeDirectory(tmpOutputPath, { recursive: true });


    await Shell.exec('npx', [
      '@openapitools/openapi-generator-cli',
      'generate',
      '--generator-name',
      'typescript-axios',
      '--additional-properties',
      'supportsES6=true',
      '--additional-properties',
      'modelPropertyNaming=original',
      '--additional-properties',
      'withInterfaces=true',
      '--additional-properties',
      'prependFormOrBodyParameters',
      '--additional-properties',
      'nullSafeAdditionalProps',
      '--skip-validate-spec',
      '--input-spec',
      onshapeSwaggerPath,
      '--output',
      tmpOutputPath,
    ]);

    const files = await FileSystem.getFiles(tmpOutputPath);
    const filteredFiles = files.filter(x => getFileExtension(x.name) === 'ts');

    for (const file of filteredFiles) {
      await copyFilesAsync(file.path, `${outputPath}/${file.name}`);
    }

    for (const file of files) {
      await FileSystem.unlinkAsync(file.path);
    }

    await FileSystem.unlinkAsync(resolve(tmpOutputPath, '.openapi-generator', 'VERSION'));
    await removeDirectoryAsync(resolve(tmpOutputPath, '.openapi-generator'));
    await removeDirectoryAsync(tmpOutputPath);
    logger.info('Generated National Grid Api Client');
  } catch (error) {
    logger.error(error);
    process.exit(-1);
  }
})();
