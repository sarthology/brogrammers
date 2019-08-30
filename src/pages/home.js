import React, { useState, useEffect } from 'react';
import { Timer } from 'easytimer.js';
import NavBar from '../components/navbar';
import search from '../images/search.svg';
import './index.css';
import queryString from 'query-string';

const HomePage = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    let query = queryString.parse(document.location.search);
    let customSeconds;
    if(query && query.customData) {
      let customData = JSON.parse(localStorage.getItem("customData"));
      customSeconds = 3600 * customData["frequency"];
    }
  
    const timer = new Timer();

    timer.start({ countdown: true, startValues: { seconds: customSeconds ? customSeconds : 10 } });

    timer.addEventListener('secondsUpdated', function(e) {
      setTime(timer.getTimeValues().toString());
    });

    timer.addEventListener('targetAchieved', function(e) {
      setTime(null);
      if(query && query.customData) {
        return window.location = "/exercise?customData=true";
      }
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
