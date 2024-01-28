type Movie = {
  releaseYear: number;
  play(): void;
};

export class Film implements Movie {
  private director: string = "";

  releaseYear: number = 2024;

  constructor(public title: string, public duration: number) {}

  play(): void {
    throw new Error("Method not implemented.");
  }
}

function play(movie: Movie) {
  movie.play();
}

let film: Film = new Film("", 123);
film.title;
// film.director;

play(film);

abstract class Node {
  x: number = 0;
  y: number = 0;

  abstract paint(): void;

  calculateSize() {
    return 100;
  }
}

class StorageNode extends Node {
  paint(): void {
    throw new Error("Method not implemented.");
  }
}
class FabricNode extends Node {
  paint(): void {
    throw new Error("Method not implemented.");
  }
}
class CarNode extends Node {
  paint(): void {
    throw new Error("Method not implemented.");
  }
}

function paint(nodes: Node[]) {
  nodes.forEach((node) => node.paint());
}

paint([new StorageNode(), new FabricNode(), new CarNode()]);
