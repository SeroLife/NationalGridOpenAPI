# National Grid Api Client Generator

## Overview

Scripts and documents to help generate typescript api client for the National Grid Intensity Api.

## Setup

In the root of the directory run the following

```
npm i
npm run generate
```

## Editing openapi.json

Follow the examples already created inside the .json document.

[https://swagger.io/specification/](https://swagger.io/specification/)

## Bugs

Until the cli is brought up to 5.0.0.

```
//Find and replace all instances of this in `api.ts`
delete localVarUrlObj.search;
// with this
localVarUrlObj.search = null;
```