import { IGraphicsConfiguration } from '.';
import { OS, Processor } from '../enum';
import { Size } from '../type-alias';

export interface IPcConfigurration {
  processor: Processor;
  ram: Size;
  os: OS;
  graphics: IGraphicsConfiguration;
}
