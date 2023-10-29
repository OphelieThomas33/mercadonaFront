export class Category {
  id: number;
  label: string;
  parent:number|null;
  subcategories: [{
    id: number,
    label: string,
    parent: number|null,
    subcategories: [],
    icon: string,
  }];
  icon: string;
}
