import "./Icon.scss";
import { baseUrl } from "../../data/url";
import sprite from "../../assets/images/sprite.svg";

export const Icon = ({ iconName, className }) => {
  return (
    <svg className={`icon ${className}`}>
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};
