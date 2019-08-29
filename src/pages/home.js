import React, { useState, useEffect } from 'react';
import { Timer } from 'easytimer.js';
import NavBar from '../components/navbar';
import search from '../images/search.svg';
import './index.css';

const HomePage = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = new Timer();

    timer.start({ countdown: true, startValues: { seconds: 10 } });

    timer.addEventListener('secondsUpdated', function(e) {
      setTime(timer.getTimeValues().toString());
    });

    timer.addEventListener('targetAchieved', function(e) {
      setTime(null);
      window.location = '/exercise';
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
        <div className="timer">
          <h1 id="timeClock">{time}</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
