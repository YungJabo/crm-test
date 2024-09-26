import "./TasksStitisctics.scss";
import { Diagramm } from "../Diagramm/Diagramm";
import { tasks } from "../../data/tasks.js";
import { Icon } from "../Icon/Icon.jsx";

export const TasksStitisctics = () => {
  const tasksLength = tasks.length;
  const finishedTasksLength = tasks.filter(
    (task) => task.status === "Завершено"
  ).length;
  const finishedTasksPercent =
    Math.round((finishedTasksLength / tasksLength) * 1000) / 10;
  return (
    <>
      <>
        <div className="dashboard__statistics">
          <Diagramm />
          <div className="dashboard__statistics__info">
            <span className="dashboard__users-statistics__title">
              Всего задач
            </span>
            <h3 className="dashboard__statistics__count">{tasksLength}</h3>
            <div className="dashboard__statistics__active-block">
              <Icon
                className={"dashboard__statistics__active-icon"}
                iconName={"arrow-up"}
              />
              <span className="dashboard__statistics__percent">
                {`${finishedTasksPercent}% `}
              </span>
              <span className="dashboard__statistics__text">
                выполненных задач
              </span>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
