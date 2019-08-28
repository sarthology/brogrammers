import React from 'react';
import { Link } from 'gatsby';
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
      <div className="custom">
        <Link to="/home">Take Custom Challenge</Link>
      </div>
      <div className="create">
        <Link to="/custom">Create Your Own Challenge</Link>
      </div>
    </div>
  </>
);

export default IndexPage;
