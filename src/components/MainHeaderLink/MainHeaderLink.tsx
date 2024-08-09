import { Link } from "react-router-dom";

interface IMainHeaderLinkProps {
  to: string;
  text: string;
}

const MainHeaderLink = (props: IMainHeaderLinkProps) => {
  const { to, text } = props;
  return (
    <li className="header-main-link">
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default MainHeaderLink;
