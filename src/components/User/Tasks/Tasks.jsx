import "./Tasks.scss";
import { tasks } from "../../../data/tasks";
import { useEffect, useRef, useState } from "react";

export const Tasks = ({ userTasks }) => {
  const tasksContainerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (tasksContainerRef) {
      const element = tasksContainerRef.current;
      if (element.scrollHeight > element.clientHeight) {
        setIsScroll(true);
        element.addEventListener("scroll", handleScroll);
      } else {
        setScroll(false);
      }

      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [tasksContainerRef]);

  const handleScroll = () => {
    const element = tasksContainerRef.current;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    scrollPercentage = Math.max(1, Math.min(93, scrollPercentage));
    setScroll(scrollPercentage);
  };

  const currentTasks = userTasks.map((taskId) =>
    tasks.find((task) => task.id === taskId)
  );
  if (!currentTasks) {
    return <>Задачи отсутствуют</>;
  }

  return (
    <>
      <div className="user__tasks" ref={tasksContainerRef}>
        <ul className="user__tasks__list">
          {currentTasks.map((task) => (
            <li key={task.id} className="user__tasks__item">
              <div className="user__field">
                <div className="user__field__key">Название задачи</div>
                <h3 className="user__field__value">{task.title}</h3>
              </div>
              <div className="user__field">
                <div className="user__field__key">Описание</div>
                <p className="user__field__value">{task.description}</p>
              </div>
              <div className="user__field">
                <div className="user__field__key">Статус задачи</div>
                <span className="user__field__value">{task.status}</span>
              </div>
              <div className="user__field">
                <div className="user__field__key">Приоритет</div>
                <span className="user__field__value">{task.priority}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`user__tasks__scrollbar ${isScroll ? "active" : ""}`}>
        <div
          className="user__tasks__slider"
          style={{ top: `${scroll}%` }}
        ></div>
      </div>
    </>
  );
};
