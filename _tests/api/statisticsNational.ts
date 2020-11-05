import { ExecutionContext, SerialInterface } from 'ava';
import { statisticsNationalApiClient } from '../client/api';

export function tests(test: SerialInterface): void {
  test('Statistics National: between two specified DateTimes | it should return correct values', async (t: ExecutionContext) => {
    const result = await statisticsNationalApiClient.intensityStatsFromToGet('2019-08-25T12:35Z', '2019-09-02T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].intensity.average === 'number');
    t.true(typeof result.data.data[0].intensity.max === 'number');
    t.true(typeof result.data.data[0].intensity.min === 'number');
    t.true(typeof result.data.data[0].intensity.index === 'string');
    t.falsy(result.status !== 200);
  });

  test('Statistics National: between two specified DateTimes in specified block intervals | it should return correct values', async (t: ExecutionContext) => {
    const result = await statisticsNationalApiClient.intensityStatsFromToGet(
      '2019-08-25T12:35Z',
      '2019-09-02T12:35Z',
      3
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].intensity.average === 'number');
    t.true(typeof result.data.data[0].intensity.max === 'number');
    t.true(typeof result.data.data[0].intensity.min === 'number');
    t.true(typeof result.data.data[0].intensity.index === 'string');
    t.falsy(result.status !== 200);
  });
}
