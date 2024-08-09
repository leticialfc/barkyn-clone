import ProductFilter from "../ProductFilter/ProductFilter";
import "./FilterBar.less";

const FilterBar = () => {
  return (
    <div className="filter-bar container">
      <div className="filter-bar-label">Filtro:</div>
      <div className="filter-bar-group">
        <ProductFilter />
      </div>
    </div>
  );
};

export default FilterBar;
