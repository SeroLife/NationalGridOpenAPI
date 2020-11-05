# National Grid Api Client Generator

## Overview

Scripts and documents to help generate typescript api client for the National Grid Intensity Api.

## Build

In the root of the directory run the following

```
npm i

# This generates the api from openapi doc and build the npm package
npm start

# To run local tests
npm run test-api-client
```

## Editing openapi.json

Follow the examples already created inside the .json document.

[https://swagger.io/specification/](https://swagger.io/specification/)

## Releasing

When you want to release a new version to the npm registry. Simply Tag the `main` branch of the repository on GitHub. This will trigger a Actions workflow.
Semantic versions please: `vMajor.minor.patch` e.g `v1.0.0`.

## Conventions

Please use Commitizen to keep commit messages consistent.
