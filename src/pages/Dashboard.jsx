
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";



// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const chartData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Monthly Revenue (₹)",
        data: [12000, 19000, 15000, 22000, 27000, 30000, 25000, 28000, 32000, 35000, 40000, 45000],
        borderColor: "#5b2cbf",
        backgroundColor: "rgba(123, 44, 191, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard Overview</h2>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
