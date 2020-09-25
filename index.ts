import { createLogger, setDefaultLoggerLevel } from '@rocketmakers/shell-commands/lib/logger';
import { LoggerLevel } from '@rocketmakers/log';
import { Args } from '@rocketmakers/shell-commands/lib/args';
import { Shell } from '@rocketmakers/shell-commands/lib/shell';
import { FileSystem } from '@rocketmakers/shell-commands/lib/fs';
import { resolve } from 'path';

export function getFileExtension(filename: string): string {
  const ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? '' : ext[1];
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

  const tmpOutputPath = '/tmp/nationalgrid-api';

  const onshapeSwaggerPath = resolve(
    __dirname,
    '.',
    'openapi.json'
  );
  const outputPath = resolve(__dirname, '.', 'nationalgrid', 'sdk');

  try {
    await Shell.exec('mkdir', ['-p', tmpOutputPath]);

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
      await Shell.exec('cp', [file.path, outputPath]);
    }

    await Shell.exec('rm', ['-rf', tmpOutputPath]);

    logger.info('Generated National Grid Api Client');
  } catch (error) {
    logger.error(error);
    process.exit(-1);
  }
})();
