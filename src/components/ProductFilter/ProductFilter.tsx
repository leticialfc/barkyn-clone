import { useContext, useState } from "react";
import "./ProductFilter.less";
import arrowUp from "../../../public/assets/arrow-up.svg";
import arrowDown from "../../../public/assets/arrow-down.svg";
import { Filter } from "../../types/types";
import { FilterContext } from "../../contexts/FilterContext";

const options = [
  {
    name: "Sem cereais",
    value: "sem-cereais",
    active: false,
  },
  {
    name: "Light",
    value: "light",
    active: false,
  },
  {
    name: "Sensível",
    value: "sensivel",
    active: false,
  },
];

const ProductFilter = () => {
  const [filters, setFilters] = useState(options);
  const [isOpen, setIsOpen] = useState(false);

  const { addFilter, removeFilter } = useContext(FilterContext);

  const handleFilterChange = (changedFilter: Filter) => {
    const updatedFilters = filters.map((filter) =>
      filter.value === changedFilter.value
        ? { ...filter, active: !filter.active }
        : filter
    );

    setFilters(updatedFilters);

    if (changedFilter.active) {
      removeFilter(changedFilter);
    } else {
      addFilter(changedFilter);
    }
  };

  const dropdownClass = isOpen
    ? "product-filter-dropdown open"
    : "product-filter-dropdown";

  return (
    <div className="product-filter">
      <div className="product-filter-toggle">
        <button onClick={() => setIsOpen(!isOpen)}>
          {filters.find((filter) => filter.active)?.name || "Dieta"}
          <img className="arrow-icon" src={isOpen ? arrowUp : arrowDown} />
        </button>
      </div>
      <div className={dropdownClass}>
        {filters.map((filter) => (
          <div className="product-filter-dropdown-item" key={filter.value}>
            <input
              type="checkbox"
              id={filter.value}
              name={filter.value}
              checked={filter.active}
              onChange={() => handleFilterChange(filter)}
            />
            <label htmlFor={filter.value}>{filter.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
