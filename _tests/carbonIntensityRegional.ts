import { ExecutionContext, SerialInterface } from 'ava';
import { carbonIntensityRegionalApiClient } from './client/api';

export function tests(test: SerialInterface): void {
  test('Regional intensity: current half hour | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].regions[0].shortname === 'string');
    t.truthy(result.data.data[0].regions[0].intensity);
    t.truthy(result.data.data[0].regions[0].generationmix[0]);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: England for current half hour | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalEnglandGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].dnoregion === 'string');
    t.true(typeof result.data.data[0].shortname === 'string');
    t.true(typeof result.data.data[0].data[0].from === 'string');
    t.true(typeof result.data.data[0].data[0].to === 'string');
    t.truthy(result.data.data[0].data[0].intensity);
    t.true(typeof result.data.data[0].data[0].intensity.forecast === 'number');
    t.truthy(result.data.data[0].data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: Scotland for current half hour | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalScotlandGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].dnoregion === 'string');
    t.true(typeof result.data.data[0].shortname === 'string');
    t.true(typeof result.data.data[0].data[0].from === 'string');
    t.true(typeof result.data.data[0].data[0].to === 'string');
    t.truthy(result.data.data[0].data[0].intensity);
    t.true(typeof result.data.data[0].data[0].intensity.forecast === 'number');
    t.truthy(result.data.data[0].data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: Wales for current half hour | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalWalesGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].dnoregion === 'string');
    t.true(typeof result.data.data[0].shortname === 'string');
    t.true(typeof result.data.data[0].data[0].from === 'string');
    t.true(typeof result.data.data[0].data[0].to === 'string');
    t.truthy(result.data.data[0].data[0].intensity);
    t.true(typeof result.data.data[0].data[0].intensity.forecast === 'number');
    t.truthy(result.data.data[0].data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: a postcode for current half hour | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalPostcodePostcodeGet('BA1');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].dnoregion === 'string');
    t.true(typeof result.data.data[0].shortname === 'string');
    t.true(typeof result.data.data[0].postcode === 'string');
    t.true(typeof result.data.data[0].data[0].from === 'string');
    t.true(typeof result.data.data[0].data[0].to === 'string');
    t.truthy(result.data.data[0].data[0].intensity);
    t.true(typeof result.data.data[0].data[0].intensity.forecast === 'number');
    t.truthy(result.data.data[0].data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: current half hour for specified region | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalRegionidRegionidGet('11');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].dnoregion === 'string');
    t.true(typeof result.data.data[0].shortname === 'string');
    t.true(typeof result.data.data[0].data[0].from === 'string');
    t.true(typeof result.data.data[0].data[0].to === 'string');
    t.truthy(result.data.data[0].data[0].intensity);
    t.true(typeof result.data.data[0].data[0].intensity.forecast === 'number');
    t.truthy(result.data.data[0].data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 24h period after specified dateTime | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromFw24hGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].regions[0].shortname === 'string');
    t.truthy(result.data.data[0].regions[0].intensity);
    t.truthy(result.data.data[0].regions[0].generationmix[0]);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 24h period after specified dateTime for a postcode | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromFw24hPostcodePostcodeGet(
      '2019-08-25T12:35Z',
      'BA1'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data.dnoregion === 'string');
    t.true(typeof result.data.data.shortname === 'string');
    t.true(typeof result.data.data.data[0].from === 'string');
    t.true(typeof result.data.data.data[0].to === 'string');
    t.truthy(result.data.data.data[0].intensity);
    t.true(typeof result.data.data.data[0].intensity.forecast === 'number');
    t.truthy(result.data.data.data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 24h period after specified dateTime for a region | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromFw24hRegionidRegionidGet(
      '2019-08-25T12:35Z',
      '11'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data.dnoregion === 'string');
    t.true(typeof result.data.data.shortname === 'string');
    t.true(typeof result.data.data.data[0].from === 'string');
    t.true(typeof result.data.data.data[0].to === 'string');
    t.truthy(result.data.data.data[0].intensity);
    t.true(typeof result.data.data.data[0].intensity.forecast === 'number');
    t.truthy(result.data.data.data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 48h period after specified dateTime | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromFw48hGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].regions[0].shortname === 'string');
    t.truthy(result.data.data[0].regions[0].intensity);
    t.truthy(result.data.data[0].regions[0].generationmix[0]);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 48h period after specified dateTime for a postcode | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromFw48hPostcodePostcodeGet(
      '2019-08-25T12:35Z',
      'BA1'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data.dnoregion === 'string');
    t.true(typeof result.data.data.shortname === 'string');
    t.true(typeof result.data.data.data[0].from === 'string');
    t.true(typeof result.data.data.data[0].to === 'string');
    t.truthy(result.data.data.data[0].intensity);
    t.true(typeof result.data.data.data[0].intensity.forecast === 'number');
    t.truthy(result.data.data.data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 48h period after specified dateTime for a region | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromFw48hRegionidRegionidGet(
      '2019-08-25T12:35Z',
      '11'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data.dnoregion === 'string');
    t.true(typeof result.data.data.shortname === 'string');
    t.true(typeof result.data.data.data[0].from === 'string');
    t.true(typeof result.data.data.data[0].to === 'string');
    t.truthy(result.data.data.data[0].intensity);
    t.true(typeof result.data.data.data[0].intensity.forecast === 'number');
    t.truthy(result.data.data.data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 24h period before specified dateTime | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromPt24hGet('2019-08-25T12:35Z');

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].regions[0].shortname === 'string');
    t.truthy(result.data.data[0].regions[0].intensity);
    t.truthy(result.data.data[0].regions[0].generationmix[0]);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: 24h period before specified dateTime for a postcode | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromPt24hPostcodePostcodeGet(
      '2019-08-25T12:35Z',
      'BA1'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data.dnoregion === 'string');
    t.true(typeof result.data.data.shortname === 'string');
    t.true(typeof result.data.data.data[0].from === 'string');
    t.true(typeof result.data.data.data[0].to === 'string');
    t.truthy(result.data.data.data[0].intensity);
    t.true(typeof result.data.data.data[0].intensity.forecast === 'number');
    t.truthy(result.data.data.data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: between two specified dateTimes | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromToGet(
      '2019-08-25T12:35Z',
      '2019-09-02T12:35Z'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === 'string');
    t.true(typeof result.data.data[0].to === 'string');
    t.true(typeof result.data.data[0].regions[0].shortname === 'string');
    t.truthy(result.data.data[0].regions[0].intensity);
    t.truthy(result.data.data[0].regions[0].generationmix[0]);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: between two specified dateTimes for a post code | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromToPostcodePostcodeGet(
      '2019-08-25T12:35Z',
      '2019-09-02T12:35Z',
      'BA1'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data.shortname === 'string');
    t.true(typeof result.data.data.data[0].from === 'string');
    t.true(typeof result.data.data.data[0].to === 'string');
    t.truthy(result.data.data.data[0].intensity);
    t.true(typeof result.data.data.data[0].intensity.forecast === 'number');
    t.truthy(result.data.data.data[0].generationmix);
    t.falsy(result.status !== 200);
  });

  test('Regional intensity: between two specified dateTimes for a region | it should return correct values', async (t: ExecutionContext) => {
    const result = await carbonIntensityRegionalApiClient.regionalIntensityFromToRegionidRegionidGet(
      '2019-08-25T12:35Z',
      '2019-09-02T12:35Z',
      '11'
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data.dnoregion === 'string');
    t.true(typeof result.data.data.shortname === 'string');
    t.true(typeof result.data.data.data[0].from === 'string');
    t.true(typeof result.data.data.data[0].to === 'string');
    t.truthy(result.data.data.data[0].intensity);
    t.true(typeof result.data.data.data[0].intensity.forecast === 'number');
    t.truthy(result.data.data.data[0].generationmix);
    t.falsy(result.status !== 200);
  });
}
