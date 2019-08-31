import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { Timer } from 'easytimer.js';
import NavBar from '../components/navbar';
import search from '../images/search.svg';
import './index.css';
import queryString from 'query-string';

const HomePage = () => {
  const [time, setTime] = useState(null);

  const handleSkipTimer = e => {
    e.preventDefault();

    let query = queryString.parse(document.location.search);
    if (query && query.customData) {
      navigate('/exercise?customData=true');
    } else navigate('/exercise');
  };

  useEffect(() => {
    let query = queryString.parse(document.location.search);
    let customSeconds;
    if (query && query.customData) {
      let customData = JSON.parse(localStorage.getItem('customData'));
      if (customData.startExercise * customData.frequency <= customData.work) {
        customSeconds = 3600 * customData['frequency'];
      } else {
        navigate('/');
      }
    }
    if (query && query.createRandom) {
      const randomMinutes = Math.floor(Math.random() * 21) + 40;
      customSeconds = 60 * randomMinutes;
    }

    const timer = new Timer();

    timer.start({
      countdown: true,
      startValues: { seconds: customSeconds ? customSeconds : 10 }
    });

    timer.addEventListener('secondsUpdated', function(e) {
      setTime(timer.getTimeValues().toString());
    });

    timer.addEventListener('targetAchieved', function(e) {
      setTime(null);
      if (query && query.customData) {
        navigate('/exercise?customData=true');
      } else navigate('/exercise');
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="search-area" id="search">
        <div className="search-image">
          <img src={search} className="floating" alt="" />
        </div>
        <div className="search-message">
          <h2>Finding Best Excercises for you...</h2>
        </div>
        <div className="skip-timer">
          <div className="timer">
            <h1 id="timeClock">{time}</h1>
          </div>
          <div className="skip-button" onClick={handleSkipTimer}>
            <h1>Skip</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
