import React, { useEffect, useRef } from 'react';
import { initPepeChart, renderSimpleChart } from '../../public/scripts/chart';
import './Chart.css';

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    try {
      initPepeChart();
    } catch (err) {
      renderSimpleChart(chartRef.current);
    }
  }, []);

  return <div ref={chartRef} id="pepe-chart" className="chart-container" />;
};

export default Chart;
