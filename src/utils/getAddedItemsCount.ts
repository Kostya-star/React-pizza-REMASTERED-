import { ICartItem } from "types/types";

export const getAddedItemsCount = (items: ICartItem[]) => items.reduce((sum, item) => item.count + sum, 0);