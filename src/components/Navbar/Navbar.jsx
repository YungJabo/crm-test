import "./Navbar.scss";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { navbar } from "../../data/navbar.js";
import { Icon } from "./../Icon/Icon";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const location = useLocation().pathname;
  const [activeIndex, setActiveIndex] = useState(
    navbar.findIndex((item) => item.link === location)
  );

  useEffect(() => {
    setActiveIndex(navbar.findIndex((item) => item.link === location));
  }, [location]);

  return (
    <>
      <aside className="navbar">
        <div className="navbar__content">
          <div className="navbar__logo-block">
            <Icon className={"navbar__logo"} iconName={"logo"} />
          </div>
          <ul
            className={`navbar__list ${activeIndex === -1 ? "unactive" : ""}`}
            style={{ "--active-index": activeIndex }}
          >
            {navbar.map((item, index) => (
              <li
                className={`navbar__item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <Link to={item.link} className="navbar__link">
                  <Icon
                    className={"navbar__link__img"}
                    iconName={item.imgName}
                  />
                  <span className="navbar__link__text">{item.text}</span>
                  <Icon
                    className={"navbar__link__arrow"}
                    iconName={"arrow-right"}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
