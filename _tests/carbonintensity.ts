import { ExecutionContext, SerialInterface } from 'ava';
import { CarbonIntensityNationalApi } from '../nationalgrid/sdk';

export function tests(test: SerialInterface): void {
  test('Carbon Intensity Get | it should return correct values', async (t: ExecutionContext) => {
    const client = new CarbonIntensityNationalApi();

    const result = await client.intensityGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });
}