import React from 'react';
// import { Link } from 'gatsby';
import NavBar from '../components/navbar';
import './index.css';

const CustomPage = () => (
  <>
    <NavBar />
    <div className="big-form">
      <div className="f-section">
        <label htmlFor="">Select Exercises: </label>
        <div className="choices">
          <div className="choice">Jumping Jacks</div>
          <div className="choice">Lunges</div>
          <div className="choice">Planks</div>
          <div className="choice">Squats</div>
          <div className="choice">Burpees</div>
        </div>
      </div>
      <div className="f-section">
        <label htmlFor="">Frequency: </label>
        <input
          type="range"
          className="slider"
          min="30"
          max="240"
          value="60"
          step="30"
        />
      </div>
      <div className="f-section">
        <label htmlFor="">How long you gonna work:</label>
        <input
          type="range"
          className="slider"
          min="1"
          max="8"
          value="2"
          step="1"
        />
      </div>
      <div className="f-section">
        <label htmlFor="">Level of exercise:</label>
        <div className="level">
          <div className="checkbox">
            <input type="checkbox" id="easy" />
            <label htmlFor="easy">Easy</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="medium" />
            <label htmlFor="medium">Medium</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="hard" />
            <label htmlFor="hard">Hard</label>
          </div>
        </div>
      </div>
      <div className="save-custom">
        <div className="start-exercise custom-session">
          Start Custom Session
        </div>
      </div>
    </div>
  </>
);

export default CustomPage;
