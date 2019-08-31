import React from 'react';
import { navigate } from 'gatsby';
import './index.css';
import yoga from '../assets/yoga.svg';
import product from '../assets/product.png';

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
        <img src={product} alt=""/>
      <div className="button-pro">
        <p>Hey, lovely people! We're on ProductHunt!</p>
        <div className="product-link">Find us here</div>
      </div>
    </div>    
    <div className="copyright-link">
      <p>Made with <span>❤</span> by <a href="" target="_blank" class="team-xenox-link">Team XenoX 
      <img src={require('../assets/fire.svg')} alt="" />
      </a></p>
      <a href="#" className="join-us">Join us</a>
    </div>
  </>
);

export default IndexPage;
