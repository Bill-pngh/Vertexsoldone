// Initialize TradingView Lite chart for PEPE
export function initPepeChart() {
  if (typeof TradingView !== 'undefined') {
    new TradingView.widget({
      autosize: true,
      symbol: "BINANCE:PEPEUSDT",
      interval: "15",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#0a0e23",
      enable_publishing: false,
      hide_top_toolbar: true,
      container_id: "pepe-chart"
    });
  } else {
    console.error("TradingView library not loaded");
  }
}

// Fallback using Chart.js (if TradingView fails)
export function renderSimpleChart() {
  const ctx = document.getElementById('pepe-chart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: '$PEPE',
        data: [0.0012, 0.0025, 0.0018, 0.0031, 0.0027],
        borderColor: '#6E45C7',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}
