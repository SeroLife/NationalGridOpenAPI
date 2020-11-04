import { ExecutionContext, SerialInterface } from 'ava';
import { generationMixNationalApiClient } from './client/api';

export function tests(test: SerialInterface): void {
  test('Generation Mix National: for current half hour | it should return correct values', async (t: ExecutionContext) => {
    const result = await generationMixNationalApiClient.generationGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data.from === 'string');
    t.true(typeof result.data.data.to === 'string');
    t.true(typeof result.data.data.generationmix[0].fuel === 'string');
    t.true(typeof result.data.data.generationmix[0].perc === 'number');
    t.falsy(result.status !== 200);
  });

  test('Generation Mix National: for past 24 hours from specified DateTime | it should return correct values', async (t: ExecutionContext) => {
    const result = await generationMixNationalApiClient.generationFromPt24hGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].generationmix[0].fuel === 'string');
    t.true(typeof result.data.data[0].generationmix[0].perc === 'number');
    t.falsy(result.status !== 200);
  });

  test('Generation Mix National: between two specified dates | it should return correct values', async (t: ExecutionContext) => {
    const result = await generationMixNationalApiClient.generationFromToGet('2019-08-25T12:35Z', '2019-09-02T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].generationmix[0].fuel === 'string');
    t.true(typeof result.data.data[0].generationmix[0].perc === 'number');
    t.falsy(result.status !== 200);
  });
}
