import { CarbonIntensityNationalApi } from '../nationalgrid/sdk/api';

// Simplest test ever run `npm run test` does this show an error no it works
(async () => {
  const client = new CarbonIntensityNationalApi();
  const res = await client.intensityGet()
  console.log(JSON.stringify(res.data));
})();