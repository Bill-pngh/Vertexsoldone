import React, { useState } from 'react';
import Button from '../components/Button/Button';
import NavBar from '../components/NavBar/NavBar';
import Popup from '../components/Popup/Popup';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="home-container" style={{ 
      backgroundImage: "url('/images/backgrounds/vertexsol-bg-dark.png')" 
    }}>
      {/* Snipe Tokens Button (Center) */}
      <div className="snipe-button-container">
        <Button
          icon="/images/icons/actions/snipe-tokens.svg"
          text="Snipe New Tokens"
          variant="primary"
          onClick={() => setShowPopup(true)}
          className="pulse-animation"
        />
      </div>

      {/* Wallet Connection Popup */}
      {showPopup && (
        <Popup
          icon="/images/icons/warning.svg"
          message="This functionality is available after you connect your wallet."
          onClose={() => setShowPopup(false)}
        />
      )}

      <NavBar />
    </div>
  );
};

export default Home;
