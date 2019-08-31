import React from 'react';
import success from '../assets/success.svg';
import queryString from 'query-string';
import './index.css';

const SuccessPage = () => {
  const query =
    typeof window !== 'undefined'
      ? queryString.parse(document.location.search)
      : '';

  const onDone = e => {
    e.preventDefault();
    if (query && query.customData) {
      let customData = JSON.parse(localStorage.getItem('customData'));
      customData.startExercise += 1;
      localStorage.setItem('customData', JSON.stringify(customData));
      return (window.location = '/home?customData=true');
    }
    window.location = '/home?createRandom=true';
  };

  return (
    <>
      <div className="nav">
        <h1>
          <span>Good</span> Job!
        </h1>
      </div>
      <div className="success animated pulse">
        <img src={success} className="success" alt="" />
      </div>
      <div className="exercise-message">
        <h3>Now go and hydrate!</h3>
      </div>

      <div className="success">
        <button type="button" className="success-button" onClick={onDone}>
          Done
        </button>
      </div>
    </>
  );
};

export default SuccessPage;
