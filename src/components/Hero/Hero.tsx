import Button from "../Button/Button";
import heroImage from "../../../public/assets/hero-image.png";
import ctaArrow from "../../../public/assets/cta-arrow.svg";
import "./Hero.less";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          O seu cão é único. Agora, a sua nutrição também.
        </h1>
        <div className="hero-text">
          Comida e suplementos feitos por veterinários para a idade, raça e
          preferências do seu cão. Entregue em casa.
        </div>
        <Button primary text="Começar agora" iconRight={ctaArrow} />
      </div>
      <div className="hero-image">
        <img src={heroImage} />
      </div>
    </div>
  );
};

export default Hero;
