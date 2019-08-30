import React, { useState, useEffect } from 'react';
import { Timer } from 'easytimer.js';
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

const exercises = [
  { gif: burpeesGif, reps: 3, duration: 3 },
  { gif: highKneesGif, reps: 100, duration: 1 },
  { gif: lungesGif, reps: 100, duration: 2 },
  { gif: pushupGif, reps: 100, duration: 1 },
  { gif: squatsGif, reps: 100, duration: 2 },
  { gif: crunchesGif, reps: 100 },
  { gif: jumpingGif, reps: 100 },
  { gif: mountainClimbersGif, reps: 100 },
  { gif: planksGif, reps: 100 },
  { gif: stairSteppingGif, reps: 100 }
];

const ExercisePage = () => {
  const [time, setTime] = useState(null);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(null);
  const [randomExercise, setRandomExercise] = useState(null);

  const handleStartExercise = e => {
    e.preventDefault();

    if (start) {
      timer.pause();
    }

    setStart(!start);
  };

  useEffect(() => {
    setTimer(new Timer());

    setRandomExercise(
      exercises[Math.floor(Math.random() * (exercises.length + 1))]
    );

    // setRandomExercise(exercises[0]);
  }, []);

  useEffect(() => {
    if (randomExercise && randomExercise.duration && start) {
      timer.start({
        countdown: true,
        startValues: { minutes: randomExercise.duration }
      });

      timer.addEventListener('secondsUpdated', function(e) {
        setTime(timer.getTimeValues().toString());
      });

      timer.addEventListener('targetAchieved', function(e) {
        setTime(null);
        window.location = '/';
      });
    } else if (randomExercise && randomExercise.reps && start) {
      timer.start();

      timer.addEventListener('secondsUpdated', function(e) {
        setTime(timer.getTimeValues().toString());
      });

      timer.addEventListener('targetAchieved', function(e) {
        setTime(null);
        window.location = '/';
      });
    }
  }, [randomExercise, start, timer]);

  return (
    <>
      <NavBar />
      <div className="exercise-area" id="exercise">
        <div className="exercise-message">
          <h3>Go kill it, you beast</h3>
        </div>
        <p class="exercise-name">Exercise Name</p>
        {randomExercise && (
          <Exercise
            gif={randomExercise.gif}
            reps={randomExercise.reps}
            time={
              time
                ? time
                : randomExercise.duration
                ? randomExercise.duration + ' minutes'
                : null
            }
          />
        )}
        <div className="action">
          <div className="start-exercise" onClick={handleStartExercise}>
            {start ? 'Stop Exercise Now !!' : 'Start Exercise Now !!'}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExercisePage;
