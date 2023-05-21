import { GraphicsCard } from '../enum';
import { Size } from '../type-alias';

export interface IGraphicsConfiguration {
  brand: GraphicsCard;
  capacity: Size;
}
