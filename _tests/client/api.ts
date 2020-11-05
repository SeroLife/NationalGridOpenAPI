import {
  CarbonIntensityNationalApi,
  CarbonIntensityRegionalBetaApi,
  GenerationMixNationalBetaApi,
  StatisticsNationalApi,
} from '../../package/src/nationalGrid';

export const carbonIntensityNationalApiClient = new CarbonIntensityNationalApi();

export const carbonIntensityRegionalApiClient = new CarbonIntensityRegionalBetaApi();

export const statisticsNationalApiClient = new StatisticsNationalApi();

export const generationMixNationalApiClient = new GenerationMixNationalBetaApi();
