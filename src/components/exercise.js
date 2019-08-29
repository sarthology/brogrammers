import React from 'react';

const Exercise = props => (
  <>
    <div className="exercise-gif">
      <img src={props.gif} alt="" />
    </div>
    <div className="exercise-info">
      {props.reps && (
        <div className="reps">
          <h3>
            <span>Reps: </span>
            {props.reps}
          </h3>
        </div>
      )}
      {props.time && (
        <div className="time">
          <h3>
            <span>Duration: </span>
            {props.time}
          </h3>
        </div>
      )}
    </div>
  </>
);

export default Exercise;
