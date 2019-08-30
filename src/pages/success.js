import React from 'react';
import NavBar from '../components/navbar';
import './index.css';

const SuccessPage = () => {
  return (
    <>
      <NavBar />
      <div className="search-area" id="search">
        <div className="search-message">
          <h2>Congratulations for completing your challenge...</h2>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
