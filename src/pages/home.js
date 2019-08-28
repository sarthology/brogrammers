import React from 'react';
import parseMs from 'parse-ms';
import useCountdown from 'react-use-countdown';
import NavBar from '../components/navbar';
import search from '../images/search.svg';
import './index.css';

const HomePage = () => {
  const countdown = useCountdown(() => Date.now() + 10000);
  const { seconds } = parseMs(countdown);

  if (countdown === 0) console.log('redirecting...');
  if (typeof window !== 'undefined' && countdown === 0) {
    window.location = '/exercise';
  }

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
          <h1 id="timeClock">{seconds} seconds</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
