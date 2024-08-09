import "./Card.less";

export type CardType = {
  number?: number;
  img: string;
  title: string;
  text: string;
};

interface ICardProps {
  number?: number;
  img: string;
  title: string;
  text: string;
}

const Card = (props: ICardProps) => {
  const { number, img, title, text } = props;
  return (
    <div className="card">
      {number && <div className="card-number">{number}</div>}
      <div className="card-image">
        <img src={img} />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
    </div>
  );
};

export default Card;
