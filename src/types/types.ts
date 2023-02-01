export interface IPizza {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface ICartItem
  extends Omit<IPizza, 'types' | 'sizes' | 'rating' | 'category'> {
  type: string;
  size: number;
  count: number;
}
