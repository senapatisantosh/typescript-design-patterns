import { IPcConfigurration } from '../models';

export interface IPcBuilderSkeleton {
  buildGraphics: () => void;
  buildPC: () => IPcConfigurration;
}
