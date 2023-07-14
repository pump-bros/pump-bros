import React, { useEffect, useState, useRef } from 'react';
import './HomePage.css';
import profileImage from '../assets/pump-bro.png';
import notificationImage from '../assets/notification.png';

function HomePage() {
  const [displayText, setDisplayText] = useState('');
  const imageListRef = useRef(null);

  useEffect(() => {
    const text = 'Get ready to pump and share it with your bros!';
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 50);

    const timeoutId = setTimeout(() => {
      scrollToImageList();
      startImageScroll();
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToImageList = () => {
    if (imageListRef.current) {
      imageListRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const startImageScroll = () => {
    const images = imageListRef.current.getElementsByClassName('image-caption-wrapper');
    let index = 0;

    const scrollInterval = setInterval(() => {
      if (index < images.length) {
        images[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        index++;
      } else {
        clearInterval(scrollInterval);
      }
    }, 1400); // Delay between each scroll (adjust as needed)
  };

  const captions = [
    '1. You get a notification after your workouts.',
    '2. Take a picture of your pump and share it with your bros.',
    '3. Your bros can like and comment on your pump, encouraging each other to push harder and reach new milestones.',
    '4. Everyone has their own profile where they can see their progress and stats.',
  ];

  const images = [
    { url: notificationImage, caption: captions[0] },
    { url: 'https://thumbs.dreamstime.com/b/fitness-woman-working-out-gym-athletic-girl-training-281538096.jpg', caption: captions[1] },
    { url: 'https://www.diggitmagazine.com/sites/default/files/styles/inline_image/public/gymbro_0.jpeg?itok=YgiuA-Lh', caption: captions[2] },
    { url: profileImage, caption: captions[3] },
  ];

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="homepage-text-button-wrapper">
          <div className="homepage-text-button">
            <h1 className="homepage-title">Pump Bros</h1>
            <p className="homepage-description">{displayText}</p>
            <button className="homepage-button">Sign up for beta release</button>
          </div>
        </div>
        <div className="image-list" ref={imageListRef}>
          {images.map((image, index) => (
            <div key={index} className={`image-caption-wrapper fade-in`}>
              {index % 2 === 0 ? (
                <>
                  <img src={image.url} alt={image.caption} className="image" />
                  <p className="image-caption">{image.caption}</p>
                </>
              ) : (
                <>
                  <p className="image-caption">{image.caption}</p>
                  <img src={image.url} alt={image.caption} className="image" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
