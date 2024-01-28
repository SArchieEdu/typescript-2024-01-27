import "reflect-metadata";

export class Calculator {
  a = "";
  static b = 123;
  @MeasureTime()
  sum(a: number, b: number) {
    return a + b;
  }
}

function MeasureTime() {
  return (
    target: object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const originMethod = descriptor.value;
    descriptor.value = function (...args: unknown[]) {
      console.time(propertyName);
      const result = originMethod.apply(this, args);
      console.timeEnd(propertyName);
      return result;
    };
  };
}

const calculator = new Calculator();
calculator.sum(1, 1);

@Service({
  isSingleton: true,
})
class UserService {}

type Constructor = new (...args: unknown[]) => ;

type Metadata = { isSingleton: boolean };

function Service(metadata: Metadata) {
  return function (ctor: Constructor) {
    Reflect.defineMetadata("service", metadata, ctor);
  };
}

function isServiceMetadata(metadata: unknown): metadata is Metadata {
  const serviceMetadata = metadata as Metadata;

  return !!serviceMetadata && typeof serviceMetadata.isSingleton === "boolean";
}

let instanceStorage = new Map();

function getInstance<ServiceConstructor extends Constructor>(
  Service: ServiceConstructor
): ServiceConstructor {
  let metadata: unknown = Reflect.getMetadata("service", Service);

  if (!isServiceMetadata(metadata)) {
    return new Service();
  }

  if (!metadata.isSingleton) {
    return new Service()
  }

  if(!instanceStorage.get(Service)) {
    instanceStorage.set(Service, new Service);
  }

  return instanceStorage.get(Service)
}

type PropertyMetadata = {
    from: number;
    to: number;
}

class Film {
    @Condition({from: 80, to: 240})
    duration: number;

    constructor(duration: number) {
        this.duration = duration;
    }
}


function Condition(metadata: PropertyMetadata) {
    return function(instance: object, propertyName: string) {
        Reflect.defineMetadata(`condition-${propertyName}`, metadata, instance.constructor)
    }
}

