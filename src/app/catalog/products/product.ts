export class Product {
  id: number;
  label: string;
  description: string;
  image: string;
  price: number;
  category: [{
    id: number,
    label: string,
    parent:number|null,
    icon: string,
    subcategories: [],
    products: []
  }];
  has_valid_discount: boolean;
  discount: {
    start_date: Date,
    end_date: Date,
    percentage: number,
    is_valid: boolean,
  }|null;
  discounted_price: number|null;
}
