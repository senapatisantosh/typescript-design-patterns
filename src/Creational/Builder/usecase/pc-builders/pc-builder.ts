// Build a PC: Buget/Gaming/Development with different configuration factors can be Processor, OS platform, GPU, RAM, HARDDISKTPE

import { IPcConfigurration } from '../models';
import { IPcBuilderSkeleton } from './ipcbuilderskeleton';

export class PCConfigurationBuilder<T extends IPcBuilderSkeleton> {
  public builder!: T;
  constructor(pcBuilder: new (...args: unknown[]) => T) {
    this.builder = new pcBuilder();
  }
  build(): IPcConfigurration {
    this.builder.buildGraphics();
    return this.builder.buildPC();
  }
}
