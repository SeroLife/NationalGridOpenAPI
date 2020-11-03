import { ExecutionContext, SerialInterface } from "ava";
import { carbonIntensityNationalApiClient } from "./client/api";

export function tests(test: SerialInterface): void {
  test("Get intensity for current half hour | it should return correct values", async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === "string");
    t.true(typeof result.data.data[0].to === "string");
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test("Get intensity for today | it should return correct values", async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityDateGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === "string");
    t.true(typeof result.data.data[0].to === "string");
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test("Get intensity for specific date | it should return correct values", async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityDateDateGet(
      "2019-10-25"
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === "string");
    t.true(typeof result.data.data[0].to === "string");
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test("Get intensity for specific date and period | it should return correct values", async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityDateDatePeriodGet(
      "2019-10-25",
      "42"
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === "string");
    t.true(typeof result.data.data[0].to === "string");
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });

  test("Get intensity factors for each fuel type | it should return correct values", async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFactorsGet();

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].Biomass === "number");
    t.true(typeof result.data.data[0].Coal === "number");
    t.true(typeof result.data.data[0]["Gas (Open Cycle)"] === "number");
    t.falsy(result.status !== 200);
  });

  test("Get intensity for specific half hour period | it should return correct values", async (t: ExecutionContext) => {
    const result = await carbonIntensityNationalApiClient.intensityFromGet(
      "2019-08-25T12:35Z"
    );

    t.truthy(result.data.data);
    t.true(typeof result.data.data[0].from === "string");
    t.true(typeof result.data.data[0].to === "string");
    t.truthy(result.data.data[0].intensity);
    t.falsy(result.status !== 200);
  });
}
