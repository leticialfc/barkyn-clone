import { useState, useEffect, useContext } from "react";
import { fetchProductData } from "../../api/api";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSection.less";
import { Filter, Product } from "../../types/types";
import { FilterContext } from "../../contexts/FilterContext";

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  const {
    state: { filters },
  } = useContext(FilterContext);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProductData();
      setProducts(data.products);
    };

    getData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      if (filters.length === 0) {
        setFilteredData(products);
        return;
      }

      const filtered = products.filter((product) =>
        filters.every((filter: Filter) =>
          product.filters.includes(filter.value)
        )
      );

      setFilteredData(filtered);
    };

    applyFilters();
  }, [filters, products]);

  return (
    <div className="product-section container">
      {filteredData.length &&
        filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductSection;
