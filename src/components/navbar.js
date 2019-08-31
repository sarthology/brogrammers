import React from 'react';
import { Link } from 'gatsby';
import yoga from '../assets/yoga.svg';
import audio from '../images/audio.svg';
import audio1 from '../images/audio1.svg';
const Navbar = props => (
  <div className="navbar">
    <Link to="/">
      <img src={yoga} alt="" className="icon" />
    </Link>
    <h1>Brogrammer</h1>
    {props.isTabActive ? (
      <img src={audio} className="f-audio" alt="" />
    ) : (
      <img src={audio} onClick={props.pauseMusic} className="f-audio" alt="" />
    )
    }
   {/* <img src={audio1}  className="f-audio pulse" alt="" /> */}
  </div>
);

export default Navbar;
