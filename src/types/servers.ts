export interface Root {
  products: TProduct[];
}

export interface TProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  discount: number;
}
