import React from 'react';
import { navigate } from 'gatsby';
import './index.css';
import yoga from '../assets/yoga.svg';
import product from '../assets/product.png';
import fire from '../assets/fire.svg';

const IndexPage = () => (
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
    <div className="producthunt">
      <div className="close-it">x</div>
      <img src={product} alt="" />
      <div className="button-pro">
        <p>Hey, We're on ProductHunt!</p>
        <div className="product-link">Find us here</div>
      </div>
    </div>
    <div className="copyright-link">
      <p>
        Made with <span>❤</span> by{' '}
        <a href="https://teamxenox.com/" target="_blank" className="team-xenox-link">
          Team XenoX
          <img src={fire} alt="" />
        </a>
      </p>
      <a href="https://github.com/sarthology/XenoXMultiverse/tree/master" className="join-us">
        Join us
      </a>
    </div>
  </>
);

export default IndexPage;
