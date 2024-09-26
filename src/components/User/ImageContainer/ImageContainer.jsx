import "./ImageContainer.scss";
import { cleanPhoneNumber } from "./../../../data/phone";
import { Icon } from "../../Icon/Icon";

export const ImageContainer = ({ user }) => {
  return (
    <>
      <div className="user__about">
        <img src={user.profilePicture} alt="" className="user__img" />
        <div className="user__contacts">
          <a
            href={`tel:${cleanPhoneNumber(user.phone)}`}
            className="user__contacts__link"
          >
            <Icon className={"user__contacts__icon"} iconName={"phone"} />
            {user.phone}
          </a>
          <a href={`mailto:${user.email}`} className="user__contacts__link">
            <Icon className={"user__contacts__icon"} iconName={"mail"} />
            {user.email}
          </a>
          <div className="user__contacts__icon-links">
            <a href={user.socialLinks.github} className="user__contacts__link">
              <Icon className={"user__contacts__icon"} iconName={"git"} />
            </a>
            <a href={user.socialLinks.twitter} className="user__contacts__link">
              <Icon className={"user__contacts__icon"} iconName={"twitter"} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
