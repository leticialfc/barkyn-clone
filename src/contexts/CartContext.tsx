import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import cartReducer from "../reducers/cartReducer";
import { CartState, Product } from "../types/types";
import {
  addToCart as createAddToCart,
  removeFromCart as createRemoveFromCart,
  clearCart as createClearCart,
  addQuantity as createAddQuantity,
  removeQuantity as createRemoveQuantity,
} from "../actions";

const STORAGE_KEY = "cart_items";

const initialCartState: CartState = {
  items: [],
};

interface ICartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<any>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  addQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
  clearCart: () => void;
}>({
  state: initialCartState,
  dispatch: () => null,
  addToCart: () => {},
  removeFromCart: () => {},
  addQuantity: () => {},
  removeQuantity: () => {},
  clearCart: () => {},
});

export const CartProvider = (props: ICartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState, () => {
    const storedCart = localStorage.getItem(STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : initialCartState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const { children } = props;

  const addToCart = (product: Product) => dispatch(createAddToCart(product));
  const removeFromCart = (id: number) => dispatch(createRemoveFromCart(id));
  const addQuantity = (id: number) => dispatch(createAddQuantity(id));
  const removeQuantity = (id: number) => dispatch(createRemoveQuantity(id));
  const clearCart = () => dispatch(createClearCart());

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        addQuantity,
        removeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
