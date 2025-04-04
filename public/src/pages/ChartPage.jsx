import React, { useEffect } from 'react';
import Chart from '../components/Chart/Chart';
import NavBar from '../components/NavBar/NavBar';

const ChartPage = () => {
  useEffect(() => {
    // Load TradingView script dynamically
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => window.initPepeChart?.();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page-container">
      <h2>$PEPE Price Chart</h2>
      <Chart />
      <NavBar />
    </div>
  );
};

export default ChartPage;
