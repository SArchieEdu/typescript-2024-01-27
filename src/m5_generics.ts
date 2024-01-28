export function sum(a: number, b: number) {
  return a + b;
}

type Film = {
  title: string;
  duration: number;
};

type ResponseStatuses = "success" | "error" | "pending";

type Response<Result = unknown, Status = ResponseStatuses> = {
  isSuccess: boolean;
  status: Status;
  result: Result;
};

type FilmResponse = Response<Film>;
// {
//   isSuccess: boolean;
//   result: Film;
// }

type FilmsResponse = Response<Film[]>;
// {
//   isSuccess: boolean;
//   result: Film[];
// }

type UnknownResponse = Response;
// {
//   isSuccess: boolean;
//   result: unknown;
// }

function getFilms(): Response<Film[]> {
  throw "getFilms";
}

function getFilm(): Response<Film> {
  throw "getFilm";
}

type Collection<Item> = {
  title: string;
  id: number;
  link: string;
  items: Item[];
};

type Catchup = {
  title: string;
  endDate: string;
};

type FilmCollection = Collection<Film>;
type CatchupCollection = Collection<Catchup>;

interface Movie<Director> {
  title: string;
  director: Director;
}

// type Director = {
//   name: string;
// };

interface TvSeries<Episode, Director> extends Movie<Director> {
  episodes: Episode[];
}

// type Episode = {
//   duration: number;
// };

function playMovie<Episode, Movie = TvSeries<Episode, string>>(
  movie: Movie
): Movie {
  let collection: Collection<Movie>;
  return movie;
}

// playMovie<Film>({ title: "", duration: 132 });

const playEpisode = <Episode>(episode: Episode): Episode => {
  return episode;
};

function getProperty<
  Entity extends object,
  Key extends keyof Entity = keyof Entity
>(entity: Entity, key: Key) {
  return entity[key];
}

getProperty<Film>({ title: "", duration: 123 }, "duration");

// generics + mapped types

interface Test {
  1: string;
  a: number;
  d: string;
  e: {};
}

type TestSetters = EntitySetters<Test>;

type TransformedProperty = "a" | "b" | "c";

type EntitySetters<Entity extends object> = {
  [Property in keyof Entity as `set${Capitalize<Property & string>}`]-?: (
    value: Entity[Property]
  ) => void;
};

type EntityGetters<Entity extends object> = {
  [Property in keyof Entity as `get${Capitalize<
    Property & string
  >}`]-?: () => Entity[Property];
};

type CompleteEntity<Entity extends object> = Entity &
  EntityGetters<Entity> &
  EntitySetters<Entity>;

type EntityFields<Entity extends object, Field> = {
  [Property in keyof Entity as Entity[Property] extends Field
    ? Property
    : never]: Entity[Property];
};

type Test4 = EntityFields<Film, number>;

// class FilmClass implements CompleteEntity<Film> {
//     title: string;
//     duration: number;
//     getTitle: () => string;
//     getDuration: () => number;
//     setTitle: (value: string) => void;
//     setDuration: (value: number) => void;
// }
