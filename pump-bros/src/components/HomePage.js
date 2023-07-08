import React, { useEffect, useState } from 'react';
import './HomePage.css';
import pumpBroImage from '../assets/pump-bro.png';

function HomePage() {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    const text = 'Get Ready to Pump and Share it with your Bros!';
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 400);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="homepage-text">
          <h1 className="homepage-title">Pump Bros</h1>
          <p className="homepage-description">{displayText}</p>
          <button className="homepage-button">Sign up for beta release</button>
        </div>
        <div className="homepage-image-container">
          <img src={pumpBroImage} alt="Pump Bros" className="homepage-image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
