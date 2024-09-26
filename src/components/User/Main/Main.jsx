import "./Main.scss";
import { getAge, formatDate } from "../../../data/date";

export const Main = ({ user }) => {
  return (
    <>
      <div className="user__main">
        <ul className="user__fields">
          <li className="user__field">
            <div className="user__field__key">Статус</div>
            <div className="user__field__value">
              {user.isActive ? "Активный" : "Неактивный"}
            </div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Дата рождения</div>
            <div className="user__field__value">
              {`${formatDate(user.birthDate)} - ${getAge(user.birthDate)}`}
            </div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Пол</div>
            <div className="user__field__value">
              {user.gender === "male" ? "Мужской" : "Женский"}
            </div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Специальность</div>
            <div className="user__field__value">{user.employment.position}</div>
          </li>
        </ul>
      </div>
    </>
  );
};
