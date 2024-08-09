import { createContext, ReactNode, useReducer } from "react";
import { Filter, FilterState } from "../types/types";
import filterReducer from "../reducers/filterReducer";
import {
  addFilter as createAddFilter,
  removeFilter as createRemoveFilter,
} from "../actions";

const initialFilterState: FilterState = {
  filters: [],
};

interface IFilterProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext<{
  state: FilterState;
  dispatch: React.Dispatch<any>;
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
}>({
  state: initialFilterState,
  dispatch: () => null,
  addFilter: () => {},
  removeFilter: () => {},
});

export const FilterProvider = (props: IFilterProviderProps) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  const addFilter = (filter: Filter) => dispatch(createAddFilter(filter));
  const removeFilter = (filter: Filter) => dispatch(createRemoveFilter(filter));

  const { children } = props;
  return (
    <FilterContext.Provider
      value={{ state, dispatch, addFilter, removeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};
