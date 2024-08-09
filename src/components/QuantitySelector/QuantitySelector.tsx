import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./QuantitySelector.less";

interface IQuantitySelectorProps {
  quantity: number;
  productId: number;
}

const QuantitySelector = (props: IQuantitySelectorProps) => {
  const { quantity, productId } = props;
  const { addQuantity, removeQuantity } = useContext(CartContext);
  return (
    <div className="quantity-selector">
      <div className="quantity-selector-label">Qtd:</div>
      <div className="quantity-selector-quantity">{quantity}</div>
      <div
        className="quantity-selector-remove"
        onClick={() => removeQuantity(productId)}
      >
        -
      </div>
      <div
        className="quantity-selector-add"
        onClick={() => addQuantity(productId)}
      >
        +
      </div>
    </div>
  );
};

export default QuantitySelector;
