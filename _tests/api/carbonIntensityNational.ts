import { ExecutionContext, SerialInterface } from 'ava';
import { carbonIntensityNationalApiClient } from '../client/api';

export function tests(test: SerialInterface): void {
  test('National intensity: current half hour | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: today | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityDateGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: specific date | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityDateDateGet('2019-10-25');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: specific date and period | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityDateDatePeriodGet('2019-10-25', '42');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: factors for each fuel type | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFactorsGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].Biomass === 'number');
    t.true(typeof result.data.data[0].Coal === 'number');
    t.true(typeof result.data.data[0]['Gas (Open Cycle)'] === 'number');
    t.falsy(result.status !== 200);
  });

  test('National intensity: specific half hour period | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFromGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: 24h period after specified dateTime | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFromFw24hGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: 48h period after specified dateTime | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFromFw48hGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: 24h period before specified dateTime | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFromPt24hGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test('National intensity: between two specified dateTimes | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFromToGet('2019-08-25T12:35Z', '2019-09-02T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });
}
