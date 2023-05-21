import { FluentBuilder } from '../../../patterns';
import {
  IPcConfigurration,
  IGraphicsConfiguration,
  GraphicsCard,
  Processor,
  OS
} from '../../models';
import { IPcBuilderSkeleton } from '../ipcbuilderskeleton';

export class GamingPC implements IPcBuilderSkeleton {
  private builderObj!: IPcConfigurration;
  buildGraphics(): void {
    const graphicsObj = FluentBuilder<IGraphicsConfiguration>()
      .brand(GraphicsCard.NVIDIA)
      .capacity(16)
      .build();
    this.builderObj.graphics = graphicsObj;
  }
  buildPC(): IPcConfigurration {
    const gamingPcObj = FluentBuilder<IPcConfigurration>()
      .processor(Processor.INTEL)
      .os(OS.WINDOWS)
      .ram(16)
      .build();
    return gamingPcObj;
  }
}
