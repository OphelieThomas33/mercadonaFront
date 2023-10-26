export class Product {
    id: number;
    label: string;
    description: string;
    price: number;
    image: string;
    category: string[];
    has_valid_discount: boolean;
    discount: []|null;
    discounted_price: number|null;
}
