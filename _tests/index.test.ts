import { serial, SerialInterface } from "ava";
import * as CarbonIntensity from './carbonintensity';

const test = serial as SerialInterface

CarbonIntensity.tests(test);
