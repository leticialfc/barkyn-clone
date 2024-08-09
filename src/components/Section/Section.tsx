import "./Section.less";
import Card, { CardType } from "../Card/Card";
import CtaButton from "../CtaButton/CtaButton";

interface ISectionProps {
  title: string;
  cards: CardType[];
}

const Section = (props: ISectionProps) => {
  const { title, cards } = props;
  return (
    <div className="section container">
      <h1 className="section-title">{title}</h1>
      <div className="section-cards">
        {cards.map((card) => (
          <Card
            number={card.number}
            img={card.img}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
      <div className="section-cta">
        <CtaButton />
      </div>
    </div>
  );
};

export default Section;
