import React, { useState } from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  
  // 차트에 채워질 값을 1~100으로 나타내기
  let barFillHeight = '0%';
  if(props.maxValue> 0 ) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
