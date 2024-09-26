import "./Diagramm.scss";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

import { tasks } from "../../data/tasks.js";

export const Diagramm = () => {
  const tasksPlan = tasks.filter(
    (task) => task.status === "Запланировано"
  ).length;
  const tasksProcces = tasks.filter(
    (task) => task.status === "В процессе"
  ).length;
  const tasksFinish = tasks.filter(
    (task) => task.status === "Завершено"
  ).length;

  const pieChartData = {
    labels: ["Запланировано", "В процессе", "Завершено"],
    datasets: [
      {
        data: [tasksPlan, tasksProcces, tasksFinish],
        label: "Количество задач",
        backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
        hoverBackgroundColor: ["#175000", "#003350", "#993d00"],
      },
    ],
  };

  return (
    <div className="dashboard__diagramm">
      <Pie
        type="pie"
        width={130}
        height={50}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
              position: "top",
              labels: {
                font: {
                  size: "16px",
                },
              },
            },
            datalabels: {
              formatter: (value, ctx) => {
                const total = ctx.chart.data.datasets[0].data.reduce(
                  (acc, val) => acc + val,
                  0
                );
                const percentage = ((value / total) * 100).toFixed(1) + "%";
                return percentage;
              },
              color: "#fff",
              anchor: "end",
              align: "start",
              font: {
                weight: "bold",
                size: "16px",
              },
            },
          },
        }}
        data={pieChartData}
      />
    </div>
  );
};
