import { ADD_FILTER, REMOVE_FILTER } from "../actions";
import { FilterState } from "../types/types";

export const initialState: FilterState = {
  filters: [],
};

const filterReducer = (state: FilterState, action: any): FilterState => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.filter],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(
          (filter) => filter.value !== action.filter.value
        ),
      };
    default:
      return state;
  }
};

export default filterReducer;
