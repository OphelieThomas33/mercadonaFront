export class Product {
  id: number;
  label: string;
  description: string;
  price: number;
  image: string;
  category: [{
    label: string,
  }];
  has_valid_discount: boolean;
  discount: {
    start_date: Date,
    end_date: Date,
    percentage: number,
  }|null;
  discounted_price: number|null;
}
