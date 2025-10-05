import React from "react";
import "./DashboardCard.scss";
import classNames from "classnames";

const DashboardCard = ({ title, value, color = "blue" }) => {
  const cls = classNames("dashboard-card", {
    "dashboard-card--blue": color === "blue",
    "dashboard-card--teal": color === "teal",
    "dashboard-card--green": color === "green",
    "dashboard-card--purple": color === "purple",
  });

  return (
    <div className={cls}>
      <div className="card-content">
        <div>
          <div className="value">{value}</div>
          <div className="label">{title}</div>
        </div>
        <div aria-hidden style={{ fontSize: 22, opacity: 0.14 }}>●</div>
      </div>
    </div>
  );
};

export default DashboardCard;
