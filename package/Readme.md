# National Grid Carbon Intensity Api Client

A Typescript Api Client for National Grid Carbon Intensity.

Built using OpenAPIGenerator.

## Installing

`npm i @serodigital/national-grid-api-client`

## Usage

```typescript
const apiClient = new NationalGridApiClient();
const carbonIntensityNationalApiClient = apiClient.carbonIntensityNationalApi;
const carbonIntensityRegionalApiClient = apiClient.carbonIntensityRegionalBetaApi;
const generationMixNationalApiClient = apiClient.generationMixNationalBetaApi;
const statisticsNationalApiClient = apiClient.statisticsNationalApi;

const result = await carbonIntensityNationalApiClient.intensityGet();
console.log(result.data.data);
```
