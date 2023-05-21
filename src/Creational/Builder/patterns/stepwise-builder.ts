enum CarType {
  SUV,
  HATCHBACK
}

interface ICar {
  wheelSize: number;
  type: CarType;
}

interface ISpecifyCarType {
  carType(carType: CarType): ISpecifyWheelSize;
}

interface ISpecifyWheelSize {
  carWheelSize(wheelSize: number): IBuilder;
}

interface IBuilder {
  build(): ICar;
}

class StepwiseBuilder implements ISpecifyCarType, ISpecifyWheelSize, IBuilder {
  private carObj: ICar;

  constructor() {
    this.carObj = {} as ICar;
  }

  carType(carType: CarType): ISpecifyWheelSize {
    this.carObj.type = carType;
    return this;
  }
  carWheelSize(wheelSize: number): IBuilder {
    this.carObj.wheelSize = wheelSize;
    return this;
  }
  build(): ICar {
    return this.carObj;
  }
}

// Example
const stepwiseBuilder = new StepwiseBuilder()
  .carType(CarType.SUV)
  .carWheelSize(55)
  .build();

console.log(stepwiseBuilder);
