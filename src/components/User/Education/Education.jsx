import "./Education.scss";

export const Education = ({ education }) => {
  return (
    <>
      <div className="user__education">
        <ul className="user__fields">
          <li className="user__field">
            <div className="user__field__key">Степень</div>
            <div className="user__field__value">{education.degree}</div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Направление</div>
            <div className="user__field__value">{education.major}</div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Место учебы</div>
            <div className="user__field__value">{education.university}</div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Год окончания</div>
            <div className="user__field__value">
              {education.graduationYear}г
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
