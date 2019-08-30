import React from 'react';
import NavBar from '../components/navbar';
import './index.css';

const SuccessPage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="nav">
        <h1>
          <span>Good</span> Job!
      </h1>
      </div>
      <div className="success animated pulse">
        <img src={require('../images/success.svg')} className="success" alt="" />
      </div>
      <div className="exercise-message">
        <h3>Now go and hydrate!</h3>
      </div>
      <div className="action">
        <button type="button" className="success-button" >
         Done
        </button>
      </div>
    </>
  );
};

export default SuccessPage;
