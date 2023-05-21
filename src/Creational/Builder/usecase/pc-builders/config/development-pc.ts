import { FluentBuilder } from '../../../patterns';
import {
  IPcConfigurration,
  IGraphicsConfiguration,
  GraphicsCard,
  Processor,
  OS
} from '../../models';
import { IPcBuilderSkeleton } from '../ipcbuilderskeleton';

export class DevelopmentPC implements IPcBuilderSkeleton {
  private builderObj!: IPcConfigurration;
  buildGraphics(): void {
    const graphicsObj = FluentBuilder<IGraphicsConfiguration>()
      .brand(GraphicsCard.AMD)
      .capacity(16)
      .build();
    this.builderObj.graphics = graphicsObj;
  }
  buildPC(): IPcConfigurration {
    const developmentPcObj = FluentBuilder<IPcConfigurration>()
      .processor(Processor.M2)
      .os(OS.MAC)
      .ram(32)
      .build();
    return developmentPcObj;
  }
}
