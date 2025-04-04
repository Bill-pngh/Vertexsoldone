import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navItems = [
    { icon: '/images/icons/nav/portfolio.svg', text: 'Portfolio', path: '/portfolio' },
    { icon: '/images/icons/nav/wallet.svg', text: 'Wallet', path: '/connect' },
    { icon: '/images/icons/nav/chart.svg', text: 'Chart', path: '/chart' },
    { icon: '/images/icons/nav/balance.svg', text: 'Balance', path: '/balance' },
    { icon: '/images/icons/nav/features.svg', text: 'Features', path: '/features' }
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <Link to={item.path} key={item.text} className="nav-button">
          <img src={item.icon} alt={item.text} />
          <span>{item.text}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
