import React, { useState } from 'react';
import { navigate } from 'gatsby';
import './index.css';
import yoga from '../assets/yoga.svg';
import product from '../assets/product.png';
import fire from '../assets/fire.svg';

const IndexPage = () => {
  const [popup, setPopup] = useState(true);

  return (
    <>
      <div className="nav">
        <h1>
          <span>Bro</span>grammer!
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
          Take Random Challenge
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
      <div className="copyright-link">
        <p>
          Made with <span>❤</span> by{' '}
          <a href="https://xenox.dev/" className="team-xenox-link">
            Xenox
            <img src={fire} alt="" />
          </a>
        </p>
        <a
          href="https://forms.clickup.com/f/1rz92-7662/S4VHGYQNFOM65DKOGG"
          className="join-us"
        >
          Join us
        </a>
      </div>
    </>
  );
};

export default IndexPage;
