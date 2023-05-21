import { FluentBuilder } from '../../../patterns';
import {
  IPcConfigurration,
  IGraphicsConfiguration,
  GraphicsCard,
  Processor,
  OS
} from '../../models';
import { IPcBuilderSkeleton } from '../ipcbuilderskeleton';

export class BugetPC implements IPcBuilderSkeleton {
  private builderObj!: IPcConfigurration;
  buildGraphics(): void {
    const graphicsObj = FluentBuilder<IGraphicsConfiguration>()
      .brand(GraphicsCard.INTEL)
      .capacity(4)
      .build();
    this.builderObj.graphics = graphicsObj;
  }
  buildPC(): IPcConfigurration {
    const bugetPcObj = FluentBuilder<IPcConfigurration>()
      .processor(Processor.INTEL)
      .os(OS.WINDOWS)
      .ram(4)
      .build();
    return bugetPcObj;
  }
}
