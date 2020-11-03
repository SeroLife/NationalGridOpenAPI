import {
  CarbonIntensityNationalApi,
  CarbonIntensityRegionalBetaApi,
  GenerationMixNationalBetaApi,
  StatisticsNationalApi,
} from "../../nationalgrid/sdk";

export const carbonIntensityNationalApiClient = new CarbonIntensityNationalApi();

export const carbonIntensityRegionalApiClient = new CarbonIntensityRegionalBetaApi();

export const generationMixNationalApiClient = new GenerationMixNationalBetaApi();

export const statisticsNationalApiClient = new StatisticsNationalApi();
