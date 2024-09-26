import "./CitizensList.scss";
import { Icon } from "../Icon/Icon";
import { useCallback } from "react";
import { Link } from "react-router-dom";

export const CitizensList = ({ users, columnFilter, setColumnFilter }) => {
  const handleColumnFilter = useCallback(
    (column) => {
      if (columnFilter.isSet) {
        if (columnFilter.column === column) {
          if (columnFilter.type < 1) {
            setColumnFilter({ ...columnFilter, type: columnFilter.type + 1 });
          } else {
            setColumnFilter({ isSet: false, column: null, type: -1 });
          }
        } else {
          setColumnFilter({ ...columnFilter, column: column, type: 0 });
        }
      } else {
        setColumnFilter({ isSet: true, column: column, type: 0 });
      }
    },
    [columnFilter, setColumnFilter]
  );

  return (
    <>
      <ul className="citizens__list">
        <li className="citizens__header">
          <span
            className="citizens__user__fullname"
            onClick={() => handleColumnFilter("fullName")}
            data-type={columnFilter.type}
          >
            ФИО
            <Icon
              className={`citizens__user__icon ${
                columnFilter.column === "fullName" ? "active" : ""
              } `}
              iconName={"arrow-right"}
            />
          </span>
          <span
            data-type={columnFilter.type}
            className="citizens__user__phone"
            onClick={() => handleColumnFilter("phone")}
          >
            Номер телефона
            <Icon
              className={`citizens__user__icon ${
                columnFilter.column === "phone" ? "active" : ""
              } `}
              iconName={"arrow-right"}
            />
          </span>
          <span
            data-type={columnFilter.type}
            className="citizens__user__email"
            onClick={() => handleColumnFilter("email")}
          >
            Почта
            <Icon
              className={`citizens__user__icon ${
                columnFilter.column === "email" ? "active" : ""
              } `}
              iconName={"arrow-right"}
            />
          </span>
          <span
            data-type={columnFilter.type}
            className="citizens__user__birthdate"
            onClick={() => handleColumnFilter("birthDate")}
          >
            Дата рождения
            <Icon
              className={`citizens__user__icon ${
                columnFilter.column === "birthDate" ? "active" : ""
              } `}
              iconName={"arrow-right"}
            />
          </span>
          <span
            data-type={columnFilter.type}
            className="citizens__user__status"
            onClick={() => handleColumnFilter("isActive")}
          >
            Статус
            <Icon
              className={`citizens__user__icon ${
                columnFilter.column === "isActive" ? "active" : ""
              } `}
              iconName={"arrow-right"}
            />
          </span>
        </li>
        {users &&
          users.map((user, index) => (
            <li className="citizens__user" key={index}>
              <Link to={`/user/${user.id}`} className="citizens__user__link">
                <span className="citizens__user__fullname">
                  {user.fullName}
                </span>
                <span className="citizens__user__phone">{user.phone}</span>
                <span className="citizens__user__email">{user.email}</span>
                <span className="citizens__user__birthdate">
                  {user.birthDate}
                </span>
                <span
                  className={`citizens__user__status ${
                    user.isActive ? "active" : "unactive"
                  }`}
                >{`${user.isActive ? "Активный" : "Неактивный"}`}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
