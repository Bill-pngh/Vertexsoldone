import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NAV_ITEMS } from './utils/constants';

// Pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ConnectWallet from './pages/ConnectWallet';
import ChartPage from './pages/ChartPage';
import Balance from './pages/Balance';
import Features from './pages/Features';

// Components
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/features" element={<Features />} />
        </Routes>

        {/* Bottom Navigation (visible on all pages except auth screens) */}
        <NavBar items={NAV_ITEMS} />
      </div>
    </Router>
  );
}

export default App;
