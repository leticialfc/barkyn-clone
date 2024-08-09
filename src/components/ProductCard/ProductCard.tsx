import "./ProductCard.less";
import plusCircle from "../../../public/assets/plus-circle.svg";
import { Product } from "../../types/types";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface IProductCardProps {
  product: Product;
}

const ProductCard = (props: IProductCardProps) => {
  const { name, price } = props.product;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          className="product-card-img"
          src="https://cdn.shopify.com/s/files/1/0659/0706/5061/files/chicken3_800x_c87f746b-6e79-48e0-b733-b4201781f5b1_500x.png"
        />
        <button
          className="product-card-button button-secondary"
          onClick={() => addToCart(props.product)}
        >
          Adicionar
          <img src={plusCircle} />
        </button>
      </div>
      <div className="product-card-content">
        <div className="product-card-name">{name}</div>
        <div className="product-card-price">€{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
