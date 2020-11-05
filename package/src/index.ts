import {
  CarbonIntensityNationalApi,
  CarbonIntensityRegionalBetaApi,
  GenerationMixNationalBetaApi,
  StatisticsNationalApi,
} from './nationalGrid';

export class NationalGridApiClient {
  constructor() {}

  carbonIntensityNationalApi = new CarbonIntensityNationalApi();
  carbonIntensityRegionalBetaApi = new CarbonIntensityRegionalBetaApi();
  enerationMixNationalBetaApi = new GenerationMixNationalBetaApi();
  statisticsNationalApi = new StatisticsNationalApi();
}
