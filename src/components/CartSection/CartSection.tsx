import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./CartSection.less";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const CartSection = () => {
  const { state, removeFromCart } = useContext(CartContext);

  const getCartTotal = () => {
    return state.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getCartTotalPrice = () => {
    return state.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  };

  const hasItems = state.items.length;

  const getCartHeading = () => {
    let heading;
    if (!hasItems) {
      heading = (
        <div className="cart-heading empty">
          <h1>Carrinho vazio</h1>
        </div>
      );
    } else {
      heading = (
        <div className="cart-heading">
          <h1>Carrinho ({getCartTotal()})</h1>
          <div className="cart-heading-link">
            <Link to="/loja">Continuar a comprar</Link>
          </div>
        </div>
      );
    }

    return heading;
  };
  return (
    <div className="cart-section">
      {getCartHeading()}
      <div className="cart-section-main">
        <div className="cart-section-items">
          {state.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img">
                <img src={item.img} />
              </div>
              <div className="cart-item-information">
                <div className="cart-item-information-top">
                  <div className="cart-item-title-price">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-price">€{item.price}</div>
                  </div>
                  {item.size && (
                    <div className="cart-item-size">
                      Tamanho: {item.size.toLocaleUpperCase()}
                    </div>
                  )}
                </div>
                <div className="cart-item-information-bottom">
                  <QuantitySelector
                    quantity={item.quantity}
                    productId={item.id}
                  />
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasItems && (
          <div className="cart-section-summary">
            <div className="cart-section-summary-title">Resumo</div>
            <div className="cart-section-summary-pricing">
              <div className="cart-section-summary-pricing-row">
                <div>Entrega</div>
                <div>Calculado no passo seguinte</div>
              </div>
              <div className="cart-section-summary-pricing-row subtotal">
                <div>Subtotal</div>
                <div>€{getCartTotalPrice()}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSection;
