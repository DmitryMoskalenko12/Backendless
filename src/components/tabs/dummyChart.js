import React, { useEffect, useState } from "react";
import { request } from "../../helpers/helpers";
import './dummyChart.scss';

export const DummyChart = () => {
const [chart, setChart] = useState({});

useEffect(() => {
  request()
  .then((res) => {
    setChart(res[1])
  })
},[])

  return <ul className="chart-list">
          <li>{chart.title}</li>
          <li>{chart.order}</li>
          <li>{chart.path}</li>
          <li>{chart.id}</li>
        </ul>
  
}

