import React from 'react';
import NavBar from '../components/NavBar/NavBar';

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="portfolio-empty">
        <img src="/images/icons/portfolio-empty.svg" alt="Empty portfolio" />
        <p>Your portfolio is empty, snipe some tokens to build your portfolio.</p>
      </div>
      <NavBar />
    </div>
  );
};

export default Portfolio;
