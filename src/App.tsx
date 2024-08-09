import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { FilterProvider } from "./contexts/FilterContext";

const App = () => {
  return (
    <CartProvider>
      <FilterProvider>
        <Outlet />
      </FilterProvider>
    </CartProvider>
  );
};

export default App;
