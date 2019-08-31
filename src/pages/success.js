import React from 'react';
import { navigate } from 'gatsby';
import success from '../assets/success.svg';
import './index.css';

const SuccessPage = () => {
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
      <div className="action">
        <button
          type="button"
          className="success-button"
          onClick={e => {
            e.preventDefault();
            navigate('/');
          }}
        >
          Done
        </button>
      </div>
    </>
  );
};

export default SuccessPage;
