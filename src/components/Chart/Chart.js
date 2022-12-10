import React, { useState } from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        /* 
        ChartBar의 속성
        1. key : 렌더링을 위해서 key 추가
        2. value : 차트값
        3. maxValue : 모든 차트의 바는 전체 차트의 최대값을 기준으로 값을 표시한다.
        그래서 속성으로 maxValue도 전달합니다. 
        4. label : 1월,2월,3월... 
        */
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
