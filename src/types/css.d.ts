declare module "*.module.css" {
  const classes: { readonly [key: string]: string };

  export default classes;
}

declare module "my-library" {
  export function calculate(): void;
}
