export type IdLabel = {
  id: number;
};

type NameLabel = {
  name: string;
};

type NameOrId<Value extends string | number> = Value extends number
  ? IdLabel
  : NameLabel;

function createLabel<Value extends string | number>(
  value: Value
): NameOrId<Value> {
  throw "";
}

const idLabel = createLabel<number>(123);
const nameLabel = createLabel<string>("123");

type EntityFields<Entity extends object, Field> = {
  [Property in keyof Entity as Entity[Property] extends Field
    ? Property
    : never]: Entity[Property];
};
