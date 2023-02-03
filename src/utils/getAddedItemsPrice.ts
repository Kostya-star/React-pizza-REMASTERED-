import { ICartItem } from 'types/types';

export const getAddedItemsPrice = (items: ICartItem[]) =>
  items.reduce((sum, item) => item.count * item.price + sum, 0);
