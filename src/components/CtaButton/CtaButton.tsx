import Button from "../Button/Button";
import ctaArrow from "../../../public/assets/cta-arrow.svg";
import "./CtaButton.less";

const CtaButton = () => {
  return <Button primary text="Começar agora" iconRight={ctaArrow} />;
};

export default CtaButton;
