export let example = "";
// example = 123;
example = "dasdasda";

function calculate(a: number): boolean | number | undefined {
  if (a > 0) {
    return;
  }

  if (a === 3) {
    return true;
  }

  if (a === 4) {
    return false;
  }

  return a;
}

type Film = {
  title: string;
  duration: number;
};

function getProperty<
  Entity extends object,
  Key extends keyof Entity = keyof Entity
>(entity: Entity, key: Key) {
  return entity[key];
}

getProperty({ title: "", duration: 123 }, "title");

function call<Arguments extends unknown[], ReturnType>(
  callback: (...args: Arguments) => ReturnType,
  ...args: Arguments
): ReturnType {
  return callback(...args);
}

const callback = (a: boolean, b: string, c: number) => {
  return { a: 123, c: { d: "" } };
};

call(callback, true, "", 56);

type Ad1 = {
  __typename: "1";
  param1: number;
  param2: string;
  param3: boolean;
};
type Ad2 = {
  __typename: "2";
  param1: number;
  param3: boolean;
};
type Ad3 = {
  __typename: "3";
  param3: Record<string, number>;
};

type AdTypes = "1" | "2" | "3";

type Ad<AdType extends AdTypes> = AdType extends "1"
  ? Ad1
  : AdType extends "2"
  ? Ad2
  : Ad3;

function createAdConfig<AdType extends "1" | "2" | "3">(
  adType: AdType,
  params: Omit<Ad<AdType>, "__typename">
): Ad<AdType> {
  throw "";
}

const adConfig = createAdConfig("3", { param3: {} });

const result = ["a", "b", "c"].reduce<number[]>((acc, _, index) => {
  acc.push(index);
  return acc;
}, []);

type ReturnType<Func extends (args: unknown) => unknown> = Func extends (
  args: unknown
) => infer Result
  ? Result
  : never;

const callback2 = () => ({ a: 123, b: true });

type Result = ReturnType<typeof callback2>;

type GetComponentProps<FunctionComponent extends (props: object) => {}> =
  FunctionComponent extends (props: infer Props) => {} ? Props : never;

type GetSecondArrayElement<CustomArray extends [...any]> = CustomArray extends [
  infer SecondElement,
  any,
  any,
  any,
  any
]
  ? SecondElement
  : never;

const myArray = [
  "",
  { a: { b: [{ g: { c: { d: [[[["h"]]]] } } }] } },
  "",
  123,
  "g",
];

type SecondElement = GetSecondArrayElement<typeof myArray>;
