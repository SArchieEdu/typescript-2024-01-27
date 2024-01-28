type Movie = {
  title: string;
  director: string;
  awards?: string[];
};

export type Film = Movie & {
  duration: number;
};

export type TvSeries = Movie & {
  seasonCount: number;
  duration: Film["duration"];
};

type Size = "s" | "m" | "l";
type Seconds = number;

const film1: Film = { title: "Гарри Поттер 1", duration: 123, director: "" };
const film2: Film = { title: "Гарри Поттер 2", duration: 123, director: "" };

let filmDuration: Film["duration"];
