import React, { useState, useEffect } from 'react';
import { Timer } from 'easytimer.js';
import NavBar from '../components/navbar';
import Exercise from '../components/exercise';
import exercises from '../assets/exercises';
import './index.css';

import alertAudioFile from '../assets/alert.wav';

const alarm = new Audio(alertAudioFile);
let isActive = false;

if (!document.hasFocus() && !isActive) {
  alarm.play();
}

const stopAlarm = () => {
  isActive = true;
  alarm.pause();
};

const random = () => {
  const random = localStorage.getItem('random')
    ? localStorage.getItem('random')
    : localStorage.setItem(
        'random',
        Math.floor(Math.random() * exercises.length)
      );

  return random;
};

const ExercisePage = () => {
  const randomNumber = random();

  const [time, setTime] = useState(null);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(null);
  const [randomExercise, setRandomExercise] = useState(null);

  const handleStartExercise = e => {
    e.preventDefault();

    alarm.pause();
    isActive = true;

    if (start) {
      timer.pause();
    }

    setStart(!start);

    if (randomExercise && randomExercise.reps && start) {
      localStorage.removeItem('random');
      window.location = '/';
    }
  };

  useEffect(() => {
    setTimer(new Timer());
    setRandomExercise(exercises[randomNumber]);

    // setRandomExercise(exercises[0]);
  }, [randomNumber]);

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
        localStorage.removeItem('random');
        window.location = '/';
      });
    } else if (randomExercise && randomExercise.reps && start) {
      timer.start();

      timer.addEventListener('secondsUpdated', function(e) {
        setTime(timer.getTimeValues().toString());
      });

      timer.addEventListener('targetAchieved', function(e) {
        setTime(null);
        localStorage.removeItem('random');
        window.location = '/';
      });
    }
  }, [randomExercise, start, timer]);

  return (
    <>
      <NavBar pauseMusic={stopAlarm} isTabActive={isActive} />
      <div className="exercise-area" id="exercise">
        <div className="exercise-message">
          <h3>Go kill it, you beast</h3>
        </div>
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
