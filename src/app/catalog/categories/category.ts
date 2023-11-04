export class Category {
  id: number;
  label: string;
  parent:number|null;
  icon: string;
  subcategories: [];
  products: [];
}
