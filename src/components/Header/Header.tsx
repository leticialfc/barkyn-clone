import { useContext } from "react";
import "./Header.less";
import logoSmall from "../../../public/assets/logo-small.png";
import logoType from "../../../public/assets/logo-type.png";
import cart from "../../../public/assets/cart.svg";
import sandwichMenu from "../../../public/assets/sandwich-menu.svg";
import userLogin from "../../../public/assets/user-login.svg";
import Button from "../Button/Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import CtaButton from "../CtaButton/CtaButton";
import ctaArrow from "../../../public/assets/cta-arrow.svg";
import MainHeaderLink from "../MainHeaderLink/MainHeaderLink";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const headerMainMenu = [
  {
    to: "/comida",
    text: "Comida",
  },
  {
    to: "/veterinarios",
    text: "Veterinários",
  },
  {
    to: "/loja",
    text: "Loja",
  },
  {
    to: "/promo",
    text: "Receba 10€",
  },
];

const Header = () => {
  const { state } = useContext(CartContext);

  const getCartTotal = () => {
    return state.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const cartClassName =
    getCartTotal() > 0 ? "header-cart-items filled" : "header-cart-items";

  return (
    <>
      <div className="header-usp container">Envio gratuito acima de 49€</div>
      <div className="header-pre container">
        <ul>
          <li>Perguntas frequentes</li>
          <li>Sobre nós</li>
        </ul>
        <LanguageSwitcher />
      </div>
      <div className="header-main container">
        <Link to="/">
          <div className="logo">
            <img className="logo-small" src={logoSmall} />
            <img className="logo-type" src={logoType} />
          </div>
        </Link>
        <div className="header-main-menu">
          <ul>
            {headerMainMenu.map((item) => (
              <MainHeaderLink key={item.to} to={item.to} text={item.text} />
            ))}
          </ul>
        </div>
        <div className="header-main-quick-links">
          <CtaButton />
          <Button secondary text="Entrar" iconLeft={userLogin} />
          <Link to="/cart">
            <Button cart iconLeft={cart} />
            <span className={cartClassName}>{getCartTotal()}</span>
          </Link>
          <Button sandwich iconLeft={sandwichMenu} />
        </div>
      </div>
      <div className="header-cta">
        <Button banner text="Começar agora" iconRight={ctaArrow} />
      </div>
    </>
  );
};

export default Header;
