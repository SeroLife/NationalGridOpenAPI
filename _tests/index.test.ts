import { serial, SerialInterface } from "ava";
import * as CarbonIntensity from "./carbonIntensityNational";

const test = serial as SerialInterface;

CarbonIntensity.tests(test);
