// 1 typeof

function toUpperCase(a: number | string) {
  if (typeof a === "string") {
    return a.toUpperCase();
  } else {
    return `${a}`;
  }
}

// 2 Истинность

interface Movie {
  duration: number;
}
export function playMovie(movie?: Movie): number | undefined {
  // 1
  //   if (movie) {
  //     return movie.duration;
  //   }

  // 2
  //   if (!movie) {
  //     return;
  //   }

  //   return movie.duration;

  // 3
  //   return movie?.duration;

  // 4
  return movie ? movie.duration : undefined;
}

// 3 равенство
function calculate(a: number | string, b: number | boolean) {
  if (a === b) {
    return a + b;
  }
}

// 4 in

type Dog = {
  bark: () => void;
};

type Wolf = {
  run: () => void;
  bark: () => void;
};

type Cat = {
  meow: () => void;
};

function makeSomeNoise(pet: Dog | Cat | Wolf) {
  if ("bark" in pet) {
    pet.bark();
  }
}

// 5 instanceof

function log(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    date;
  }
}

// 6 type predicate

type Film = {
  __typename: "Film";
  title: string;
  duration: number;
};

type Response = {
  status: string;
  result: unknown;
};

function isFilm(entity: unknown): entity is Film {
  const film: Film = entity as Film;

  return (
    !!film &&
    typeof film.title === "string" &&
    typeof film.duration === "number"
  );
}

function getFilm(): Film | undefined {
  const response: Response = {
    status: "",
    result: { title: "", duration: 123 },
  };

  const result = response.result;

  if (isFilm(result)) {
    return result;
  }
}

// 7 discriminated union
type TvSeries = {
  __typename: "TvSeries";
  seasonCount: number;
};

type TvShow = {
  __typename: "TvShow";
  episodeCount: number;
};

type Catchup = {
  __typename: "Catchup";
  endDate: string;
};

type Collection = {
  title: string;
  items: (Film | TvSeries | TvShow | Catchup)[];
};

function play(collection: Collection) {
  return collection.items.map((item) => {
    if (item.__typename === "Film") {
      return item.duration;
    }
  });
}

// 8

const test = {
  a: 123,
  b: "",
  c: 45,
} satisfies Record<string, string | number>;

test.b.toUpperCase();
test.a;

// const restArray = ["a", "b", 123, {}, []] as const satisfies (
//   | string
//   | number
//   | object
//   | []
// )[];

// restArray[4].map((item) => item);

type Film2 = Pick<Film, "duration" | "title">;
type Film3 = Omit<Film, "duration">;

type ExcludeExample = Exclude<"a" | "b" | "c", "a">;

function calculateSum(a: string, b: number): number {
  return 123;
}

type CalculateSumResult = ReturnType<typeof calculateSum>;
type CalculateSumParams = Parameters<typeof calculateSum>;
