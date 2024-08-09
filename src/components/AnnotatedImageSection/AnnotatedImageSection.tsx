import CtaButton from "../CtaButton/CtaButton";
import "./AnnotatedImageSection.less";

interface IAnnotatedImageSectionProps {
  data: IAnnotatedImageSection;
  imgOnLeft?: boolean;
}

interface IAnnotatedImageSection {
  img: string;
  preHeader?: string;
  header: string;
  items: AnnotatedImageSectionItem[];
}

interface AnnotatedImageSectionItem {
  img: string;
  header?: string;
  text: string;
}

const AnnotatedImageSection = (props: IAnnotatedImageSectionProps) => {
  const { img, preHeader, header, items } = props.data;

  const mainSectionClassNames = props.imgOnLeft
    ? "annotated-image-section annotated-image-section-img-on-left container"
    : "annotated-image-section annotated-image-section-img-on-right container";

  return (
    <div className={mainSectionClassNames}>
      <div className="annotated-image-content">
        {preHeader && (
          <div className="annotated-image-pre-header">{preHeader}</div>
        )}
        <div className="annotated-image-header">{header}</div>
        <ul className="annotated-image-items">
          {items.map((item) => (
            <li className="annotated-image-list-item">
              {item.header && <div>{item.header}</div>}
              {item.text}
            </li>
          ))}
        </ul>
        <CtaButton />
      </div>
      <div className="annotated-image-image">
        <img src={img} />
      </div>
    </div>
  );
};

export default AnnotatedImageSection;
