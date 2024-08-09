import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  CLEAR_CART,
} from "../actions";
import { CartState } from "../types/types";

export const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.product, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case ADD_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case REMOVE_QUANTITY:
      const itemToRemove = state.items.find((item) => item.id === action.id);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.id),
        };
      }

    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
