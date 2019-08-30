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
      <Link to="/home" style={{ textDecoration: 'none' }} className="custom">
        Take Custom Challenge
      </Link>
      <Link to="/custom" style={{ textDecoration: 'none' }} className="create">
        Create Your Own Challenge
        </Link>
    </div>
  </>
);

export default IndexPage;
