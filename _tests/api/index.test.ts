import { serial, SerialInterface } from 'ava';
import * as CarbonIntensityNational from './carbonIntensityNational';
import * as CarbonIntensityRegional from './carbonIntensityRegional';
import * as GenerationMixNational from './generationMixNational';
import * as StatisticsNational from './statisticsNational';

const test = serial as SerialInterface;

CarbonIntensityNational.tests(test);
CarbonIntensityRegional.tests(test);
StatisticsNational.tests(test);
GenerationMixNational.tests(test);
