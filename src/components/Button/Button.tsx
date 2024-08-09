import "./Button.less";

interface IButtonProps {
  primary?: boolean;
  secondary?: boolean;
  cart?: boolean;
  sandwich?: boolean;
  banner?: boolean;
  iconLeft?: string;
  iconRight?: string;
  text?: string;
}

const Button = (props: IButtonProps) => {
  const {
    primary,
    secondary,
    sandwich,
    banner,
    cart,
    iconLeft,
    iconRight,
    text,
  } = props;

  let className = "button";
  if (primary) className += " button-primary";
  if (secondary) className += " button-secondary";
  if (sandwich) className += " sandwich-menu";
  if (cart) className += " cart";
  if (banner) className += " button-primary banner";

  return (
    <button className={className}>
      {iconLeft && <img src={iconLeft} />}
      {text}
      {iconRight && <img src={iconRight} />}
    </button>
  );
};

export default Button;
