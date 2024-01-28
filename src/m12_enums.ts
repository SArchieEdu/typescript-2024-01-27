export enum Size {
  s = "s",
  m = "m",
  l = "l",
}

// Object.values(Size);

function getButtonSize(size: Sizes) {}

getButtonSize("m");

type Sizes = "s" | "m" | "l";

export const Sizes = {
  s: "s",
  m: "m",
  l: "l",
} as const;

// export type Sizes = keyof typeof Sizes;
