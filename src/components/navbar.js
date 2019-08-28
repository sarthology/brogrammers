import React from 'react';
import { Link } from 'gatsby';
import yoga from '../assets/yoga.svg';
import audio from '../images/audio.svg';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <img src={yoga} alt="" className="icon" />
    </Link>
    <h1>Brogrammer</h1>
    <img src={audio} className="f-audio" alt="" />
  </div>
);

export default Navbar;
