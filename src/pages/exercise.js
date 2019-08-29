import React from 'react';
import NavBar from '../components/navbar';
import Exercise from '../components/exercise';
import './index.css';

// exercises gif
import burpeesGif from '../images/burpees.gif';
import highKneesGif from '../images/highknees.gif';
import lungesGif from '../images/lunges.gif';
import pushupGif from '../images/pushup.gif';
import squatsGif from '../images/squats.gif';
import crunchesGif from '../images/crunches.gif';
import jumpingGif from '../images/jumping.gif';
import mountainClimbersGif from '../images/mountainclimbers.gif';
import planksGif from '../images/planks.gif';
import stairSteppingGif from '../images/stairstepping.gif';

const ExercisePage = () => {
  const randomExercise = [
    { gif: burpeesGif, reps: 3 },
    { gif: highKneesGif, reps: 100 },
    { gif: lungesGif, reps: 100 },
    { gif: pushupGif, reps: 100 },
    { gif: squatsGif, reps: 100 },
    { gif: crunchesGif, reps: 100 },
    { gif: jumpingGif, reps: 100 },
    { gif: mountainClimbersGif, reps: 100 },
    { gif: planksGif, reps: 100 },
    { gif: stairSteppingGif, reps: 100 }
  ][Math.floor(Math.random() * 10)];

  const { gif, reps, time } = randomExercise;

  return (
    <>
      <NavBar />
      <div className="exercise-area" id="exercise">
        <div className="exercise-message">
          <h3>Go kill it, you beast</h3>
        </div>
        <Exercise gif={gif} reps={reps} time={time} />
        <div className="action">
          <div className="start-exercise">Start Exercise Now !!</div>
        </div>
      </div>
    </>
  );
};

export default ExercisePage;
