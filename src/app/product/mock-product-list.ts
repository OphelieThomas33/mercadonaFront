import { Product } from './product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    label: "Robe",
    description: "Robe de soirée noire",
    price: 13.99,
    image: "../../assets/robe-noire.webp",
    category: ["Vêtements", "Femme"],
    discount: 20,
  },
  {
    id: 2,
    label: "Pantalon rouge",
    description: "Pantalon de tailleur rouge",
    price: 99,
    image: "../../assets/pantalon-rouge.webp",
    category: ["Vêtements", "Femme"],
    discount: null,
  },
  {
    id: 3,
    label: "T-shirt",
    description: "T-shirt vert",
    price: 25.50,
    image: "../../assets/tshirt-vert.webp",
    category: ["Vêtements", "Homme"],
    discount: 10,
  },
]
