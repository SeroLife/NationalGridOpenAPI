import { NationalGridApiClient } from '../../package/lib';

const apiClient = new NationalGridApiClient();

export const carbonIntensityNationalApiClient = apiClient.carbonIntensityNationalApi;
export const carbonIntensityRegionalApiClient = apiClient.carbonIntensityRegionalBetaApi;
export const statisticsNationalApiClient = apiClient.statisticsNationalApi;
export const generationMixNationalApiClient = apiClient.generationMixNationalBetaApi;
