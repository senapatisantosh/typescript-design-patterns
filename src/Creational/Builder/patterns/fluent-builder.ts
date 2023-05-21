//  Fluent builder schema genericcs to accept property as function
export type IFluentBuilder<T> = {
  [k in keyof T]-?: ((arg: T[k]) => IFluentBuilder<T>) & (() => T[k]);
} & {
  build(): T;
};

//  Fluent Builder with proxy objects
export function FluentBuilder<T>(): IFluentBuilder<T> {
  const built: Record<string, unknown> = {};
  const builder = new Proxy(
    {},
    {
      get(_, prop) {
        if ('build' === prop) {
          return () => built;
        }
        return (...args: unknown[]): unknown => {
          if (0 === args.length) {
            return built[prop.toString()];
          }
          built[prop.toString()] = args[0];
          return builder;
        };
      }
    }
  );

  return builder as IFluentBuilder<T>;
}

// Example of fluent builder
interface IPerson {
  name: string;
  passport: string;
  address: IAddress;
}

interface IAddress {
  city: string;
  pin: number;
}

const personObj = FluentBuilder<IPerson>()
  .name('Santosh')
  .passport('N334543')
  .address({
    city: 'bangalore',
    pin: 560073
  });

console.log(personObj);
