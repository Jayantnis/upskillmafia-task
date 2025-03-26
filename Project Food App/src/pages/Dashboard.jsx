import React from "react";
import { Bar, Pie } from "react-chartjs-2";

const Dashboard = ({ monthlyData, categoryData }) => {
  const monthlySpendingConfig = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: "Monthly Spending",
        data: monthlyData.values,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const categorySpendingConfig = {
    labels: categoryData.labels,
    datasets: [
      {
        data: categoryData.values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Monthly Spending Trends</h2>
      <Bar data={monthlySpendingConfig} />
      <h2>Category-wise Expense Breakdown</h2>
      <Pie data={categorySpendingConfig} />
    </div>
  );
};

export default Dashboard;
