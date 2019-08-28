import React from 'react';
import NavBar from '../components/navbar';
import highKneesGif from '../images/highknees.gif';
import './index.css';

const ExercisePage = () => (
  <>
    <NavBar />
    <div className="exercise-area" id="exercise">
      <div className="exercise-message">
        <h3>Go kill it, you beast</h3>
      </div>
      <div className="exercise-gif">
        <img src={highKneesGif} alt="" />
      </div>
      <div className="exercise-info">
        <div className="reps">
          <h3>
            <span>Reps:</span> 25
          </h3>
        </div>
        <div className="time">
          <h3>
            <span>Duration:</span> 3 mins
          </h3>
        </div>
      </div>
      <div className="action">
        <div className="start-exercise">Start Exercise Now !!</div>
      </div>
    </div>
  </>
);

export default ExercisePage;
