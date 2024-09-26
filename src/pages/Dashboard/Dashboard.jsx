import "./Dashboard.scss";
import { UserStatistics } from "../../components/Userstatistics/UserStatistics";
import { TasksStitisctics } from "../../components/TasksStatistics/TaskStatistics";

export const Dashboard = () => {
  return (
    <>
      <div className="page">
        <div className="dashboard">
          <div className="dashboard__content">
            <UserStatistics />
            <TasksStitisctics />
          </div>
        </div>
      </div>
    </>
  );
};
