import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataValues = props.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={maxValue}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
}

export default Chart;
