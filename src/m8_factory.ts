export class Animal {
  feed(): void {}
}

export class Horse extends Animal {}

type Constructor = new (...args: any[]) => {};

function MakeMovable<ParentConstructor extends Constructor>(
  Parent: ParentConstructor
) {
  return class Movable extends Parent {
    move() {}
  };
}

const MovableHorse = MakeMovable(Horse);

const horse = new MovableHorse();
horse.move();
horse.feed();
