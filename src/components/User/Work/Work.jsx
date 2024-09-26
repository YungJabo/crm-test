import "./Work.scss";
import { formatDate } from "../../../data/date";

export const Work = ({ employment }) => {
  return (
    <>
      <div className="user__work">
        <ul className="user__fields">
          <li className="user__field">
            <div className="user__field__key">Специальность</div>
            <div className="user__field__value">{employment.position}</div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Название компании</div>
            <div className="user__field__value">{employment.company}</div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Дата начала работы</div>
            <div className="user__field__value">
              {formatDate(employment.startDate)}
            </div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Зарплата</div>
            <div className="user__field__value">{employment.salary}₽</div>
          </li>
        </ul>
      </div>
    </>
  );
};
