import "./Other.scss";

export const Other = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="user__other">
        <ul className="user__fields">
          <li className="user__field">
            <div className="user__field__key">Адрес</div>
            <div className="user__field__value">{user.address}</div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Навыки</div>
            <div className="user__field__value">
              {user.skills.map((skill, index) => (
                <span key={index}>
                  {skill}
                  {index < user.skills.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </li>
          <li className="user__field">
            <div className="user__field__key">Хобби</div>
            <div className="user__field__value">
              {user.hobbies.map((hobby, index) => (
                <span key={index}>
                  {hobby}
                  {index < user.hobbies.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
