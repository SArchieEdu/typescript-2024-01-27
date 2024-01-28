export interface Movie {
  title: string;
  director: string;
  awards?: string[];
}

type Title = Movie["title"];

type Keys = keyof Movie; // 'title' | 'director' | 'awards'

const size: ("s" | "m" | "l")[] = ["s", "m", "l"];

type Size = {
  [Property in (typeof size)[number]]: string;
};

type MovieCopy = {
  [Property in keyof Movie]: Movie[Property];
};

type OptionalMovie = {
  [Property in keyof Movie]?: Movie[Property];
};

type ReadonlyMovie = {
  readonly [Property in keyof Movie]: Movie[Property];
};

type RequiredMovie = {
  [Property in keyof Movie]-?: Movie[Property];
};

type EditableMovie = {
  -readonly [Property in keyof Movie]: Movie[Property];
};

type MovieSetters = {
  [Property in keyof Movie as `set${Capitalize<Property>}`]-?: (
    value: Movie[Property]
  ) => void;
};

type MovieGetters = {
  [Property in keyof Movie as `get${Capitalize<Property>}`]-?: () => Movie[Property];
};

type CompleteMovie = Movie & MovieGetters & MovieSetters;

// class MovieClass implements CompleteMovie {
//   title: string;
//   director: string;
//   awards?: string[] | undefined;
//   getTitle: () => string;
//   getDirector: () => string;
//   getAwards: () => string[] | undefined;
//   setTitle: (value: string) => void;
//   setDirector: (value: string) => void;
//   setAwards: (value: string[] | undefined) => void;
// }

type Stages =
  | "play"
  | "pause"
  | "buffering"
  | "end"
  | "ready"
  | "waitingUserAction";

type StageSwitchers = {
  [Stage in Stages as `switchTo${Capitalize<Stage>}`]: () => Stages;
};

function createStageMachine(): { currentStage: Stages } & StageSwitchers {
  // logic
  return {
    currentStage: "play",
    switchToBuffering: () => "buffering",
    switchToPause: () => "pause",
    switchToPlay: () => "play",
    switchToEnd: () => "end",
    switchToReady: () => "ready",
    switchToWaitingUserAction: () => "waitingUserAction",
  };
}
