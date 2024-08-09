import { Filter, Product } from "./types/types";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_QUANTITY = "REMOVE_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const addQuantity = (id: number) => ({
  type: ADD_QUANTITY,
  id,
});

export const removeQuantity = (id: number) => ({
  type: REMOVE_QUANTITY,
  id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const addFilter = (filter: Filter) => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilter = (filter: Filter) => ({
  type: REMOVE_FILTER,
  filter,
});
