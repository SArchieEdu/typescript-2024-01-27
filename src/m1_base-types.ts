// Boolean
let isTrue: boolean;
isTrue = true;
isTrue = false;
// isTrue = "";
// isTrue = 123;
// isTrue = {};

// Number
let num: number = 123;
let float: number = 12.56;
let binary: number = 0b101;
// num = '';

// BigInt
Number.MAX_SAFE_INTEGER;
let bigNumber: bigint = 100n;
// num = 100n;
// bigNumber = 123;

// String
let str: string = "string, Hello";
str = "";
// str = {};
// str = 123;

// Null
let nullVar: null = null;

// Undefined
let undefinedVar: undefined = undefined;

// Object
let objectVar: { readonly a: string; b?: number; c: { d: boolean } } = {
  a: "",
  c: { d: true },
};

objectVar.a;

objectVar.b = 123;
objectVar.b = 123657;
// objectVar.a = 'a';

// Array
let arrayVar: string[][] = [["a", "b", "c"], []];

// Tuple
let tuple: [string, number, { a: boolean }, bigint] = [
  "",
  12,
  { a: true },
  10n,
];

// function

function calculate(a: number, b: number): number {
  return a + b;
}

const result = calculate(123, 123);

const sum = (a: number, b: number): number => {
  return a + b;
};

function invoke(callback?: (a: number, b: number) => number): void {
  if (!callback) {
    return;
  }

  callback(1, 1);
}

invoke(calculate);
invoke(sum);

// any
let anyVar: any;
anyVar = 124;
anyVar = "";
anyVar.a;

// unknown
let unknownVar: unknown = { a: "" };

// unknownVar.a;

let numberVar: number = anyVar;
unknownVar = "";

// never
let neverVar: never;

// literal type
let fontWeight: 500 | 600 | 700 | "bold" = 500;
fontWeight = 500;
fontWeight = "bold";
fontWeight = 700;
// fontWeight = "";

function calculateButtonStyle(size: "s" | "m" | "l") {}

calculateButtonStyle("m");

// union
let numberOrStringVar: number | string = "";

function getProperty(
  obj: { a: string; d: string } | { b: boolean; d: string }
) {
  obj.d;
}

// intersection

let testVar: number & string;

let testObjVar: { a: string; b: number } & { b: string | number } = {
  a: "",
  b: 123,
};
// {title: string, duration: number} & {seasonCount: number} = {title: string, duration: number, seasonCount: number}
