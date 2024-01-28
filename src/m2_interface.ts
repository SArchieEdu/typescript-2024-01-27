interface Movie {
  title: string;
  director: string;
  awards?: string[];
}

export interface Film extends Movie {
  duration: number;
}

export interface TvSeries extends Movie {
  seasonCount: number;
  duration: Film["duration"];
}

// const film1: Film = { title: "Гарри Поттер 1", duration: 123, director: "" };
// const film2: Film = { title: "Гарри Поттер 2", duration: 123, director: "" };

let filmDuration: Film["duration"];

interface Movie {
  a: string;
  b: number;
}
