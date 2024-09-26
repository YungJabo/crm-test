import "./User.scss";
import { useParams } from "react-router-dom";
import { users } from "../../data/users.js";
import { useCallback, useState } from "react";
import { Main } from "../../components/User/Main/Main.jsx";
import { Tasks } from "../../components/User/Tasks/Tasks.jsx";
import { Work } from "../../components/User/Work/Work.jsx";
import { Education } from "../../components/User/Education/Education.jsx";
import { Other } from "../../components/User/Other/Other.jsx";
import { ImageContainer } from "../../components/User/ImageContainer/ImageContainer.jsx";

export const User = () => {
  const [currentItemMenu, setCurrentItemMenu] = useState("main");
  
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  const renderContent = useCallback(() => {
    switch (currentItemMenu) {
      case "main":
        return (
          <>
            <Main user={user} /> <ImageContainer user={user} />
          </>
        );
      case "tasks":
        return (
          <>
            <Tasks userTasks={user.tasks} /> <ImageContainer user={user} />{" "}
         
          </>
        );
      case "work":
        return (
          <>
            <Work employment={user.employment} /> <ImageContainer user={user} />{" "}
          </>
        );
      case "education":
        return (
          <>
            <Education education={user.education} />{" "}
            <ImageContainer user={user} />{" "}
          </>
        );
      case "other":
        return (
          <>
            <Other user={user} /> <ImageContainer user={user} />{" "}
          </>
        );
      default:
        return null;
    }
  }, [currentItemMenu]);
  return (
    <>
      <div className="page">
        <div className="user">
          <div className="user__content">
            <h2 className="user__title">{user.fullName}</h2>
            <ul className="user__menu">
              <li
                className={`user__menu__item ${
                  currentItemMenu === "main" ? "active" : ""
                }`}
              >
                <button
                  className="user__menu__button"
                  onClick={() => setCurrentItemMenu("main")}
                >
                  Основная информация
                </button>
              </li>
              <li
                className={`user__menu__item ${
                  currentItemMenu === "tasks" ? "active" : ""
                }`}
              >
                <button
                  className="user__menu__button"
                  onClick={() => setCurrentItemMenu("tasks")}
                >
                  Задачи
                </button>
              </li>
              <li
                className={`user__menu__item ${
                  currentItemMenu === "work" ? "active" : ""
                }`}
              >
                <button
                  className="user__menu__button"
                  onClick={() => setCurrentItemMenu("work")}
                >
                  Работа
                </button>
              </li>
              <li
                className={`user__menu__item ${
                  currentItemMenu === "education" ? "active" : ""
                }`}
              >
                <button
                  className="user__menu__button"
                  onClick={() => setCurrentItemMenu("education")}
                >
                  Образование
                </button>
              </li>
              <li
                className={`user__menu__item ${
                  currentItemMenu === "other" ? "active" : ""
                }`}
              >
                <button
                  className="user__menu__button"
                  onClick={() => setCurrentItemMenu("other")}
                >
                  Дополнительная информация
                </button>
              </li>
            </ul>
            <div className="user__details">{renderContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
