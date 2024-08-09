import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.less";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Shop from "./pages/Shop/Shop.tsx";
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route path="loja" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
