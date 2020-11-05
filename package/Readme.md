# National Grid Carbon Intensity Api Client

A Typescript Api Client for National Grid Carbon Intensity.

Built using OpenAPIGenerator.

## Installing

`npm i @serodigital/national-grid-api-client`

## Usage

```typescript
const apiClient = new OctopusApiClient();
cnew CarbonIntensityNationalApi();

const carbonIntensityNationalApiClient = new CarbonIntensityNationalApi();
const carbonIntensityRegionalApiClient = new CarbonIntensityRegionalBetaApi();
const statisticsNationalApiClient = new StatisticsNationalApi();
const generationMixNationalApiClient = new GenerationMixNationalBetaApi();

const result = await apiClient.carbonIntensityNationalApiClient.intensityGet();
console.log(result.data.data);
```
