import "./UserStatistics.scss";
import { Icon } from "./../Icon/Icon";
import { users } from "../../data/users.js";

export const UserStatistics = () => {
  const usersLength = users.length;
  const activeUsersLength = users.filter(
    (user) => user.isActive === true
  ).length;
  const activeUsersPercent =
    Math.round((activeUsersLength / usersLength) * 1000) / 10;

  return (
    <>
      <div className="dashboard__statistics">
        <Icon className={"dashboard__statistics__icon"} iconName={"users"} />
        <div className="dashboard__statistics__info">
          <span className="dashboard__users-statistics__title">
            Всего граждан
          </span>
          <h3 className="dashboard__statistics__count">{usersLength}</h3>
          <div className="dashboard__statistics__active-block">
            <Icon
              className={"dashboard__statistics__active-icon"}
              iconName={"arrow-up"}
            />
            <span className="dashboard__statistics__percent">
              {`${activeUsersPercent}% `}
            </span>
            <span className="dashboard__statistics__text">
              активных пользователей
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
