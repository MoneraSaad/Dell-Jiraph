import React from "react";
import "./style.css";

const DailyAlerts = (props) => {
  return (
    <div className="daily-alerts">
      {/* <div className="daily-alerts-title">
        <h1>Daily Alerts</h1>
      </div> */}

      <div className="daily-alerts-items">
        <div
          className="daily-alerts-item"
          style={{ backgroundColor: "#ff5722" }}
        >
          <h3>Functional Tests</h3>
          <span>3</span>
        </div>

        <div
          className="daily-alerts-item"
          style={{ backgroundColor: "#2196f3" }}
        >
          <h3>Fix Version</h3>
          <span>1</span>
        </div>
        <div
          className="daily-alerts-item"
          style={{ backgroundColor: "#009688" }}
        >
          <h3>Deleted Tasks</h3>
          <span>4</span>
        </div>
        <div
          className="daily-alerts-item"
          style={{ backgroundColor: "#3f51b5" }}
        >
          <h3>Total Changes</h3>
          <span>8</span>
        </div>
      </div>
    </div>
  );
};

export default DailyAlerts;
