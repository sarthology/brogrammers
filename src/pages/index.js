import React from 'react';
import { navigate } from 'gatsby';
import './index.css';
import yoga from '../assets/yoga.svg';

const IndexPage = () => (
  <>
    <div className="nav">
      <h1>
        <span>Bro</span>grammer !!
      </h1>
    </div>
    <div className="logo">
      <img src={yoga} className="tada" alt="" />
    </div>
    <div className="start-button">
      <div
        className="custom"
        onClick={e => {
          e.preventDefault();
          navigate('/home');
        }}
      >
        Take Custom Challenge
      </div>
      <div
        className="create"
        onClick={e => {
          e.preventDefault();
          navigate('/custom');
        }}
      >
        Create Your Own Challenge
      </div>
    </div>
  </>
);

export default IndexPage;
