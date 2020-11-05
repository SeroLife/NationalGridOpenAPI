import {
  CarbonIntensityNationalApi,
  CarbonIntensityRegionalBetaApi,
  GenerationMixNationalBetaApi,
  StatisticsNationalApi,
} from './nationalgrid';

export class NationalGridApiClient {
  constructor() {}

  carbonIntensityNationalApi = new CarbonIntensityNationalApi();
  carbonIntensityRegionalBetaApi = new CarbonIntensityRegionalBetaApi();
  enerationMixNationalBetaApi = new GenerationMixNationalBetaApi();
  statisticsNationalApi = new StatisticsNationalApi();
}
