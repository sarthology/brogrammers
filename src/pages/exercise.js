import React, { useState, useEffect, useLayoutEffect } from 'react';
import queryString from 'query-string';
import { Timer } from 'easytimer.js';
import NavBar from '../components/navbar';
import Exercise from '../components/exercise';
import ExercisesData from '../api/exercises';
import ExercisesList from '../api/exercises-list';
import './index.css';

import alertAudioFile from '../assets/alert.wav';

const ExercisePage = () => {
  const audioFile =
    typeof window !== 'undefined' ? new Audio(alertAudioFile) : null;

  const [time, setTime] = useState(null);
  const [start, setStart] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomExercise, setRandomExercise] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  const [timer] = useState(new Timer());
  const [alarm] = useState(audioFile);

  const handleStartExercise = e => {
    e.preventDefault();

    if (typeof window !== 'undefined') {
      alarm.pause();
      setIsActive(true);
    }

    if (start) {
      timer.pause();
    }

    setStart(!start);

    if (randomExercise && randomExercise.reps && start) {
      setTime(null);
      localStorage.removeItem('random');
      window.location = '/success';
    }
  };

  const handlePauseAlarm = e => {
    e.preventDefault();

    if (typeof window !== 'undefined') {
      alarm.pause();
      setIsActive(true);
    }
  };

  useLayoutEffect(() => {
    setInterval(() => {
      if (
        document.visibilityState === 'hidden' &&
        !isActive &&
        alarm !== null
      ) {
        alarm.play();
      }
    }, 3000);

    // return () => clearInterval(t);
  }, [alarm, isActive]);

  useEffect(() => {
    const getLocalData = item => {
      const localData = localStorage.getItem('customData');
      const data =
        localData && JSON.parse(localData)[item]
          ? JSON.parse(localData)[item]
          : null;

      return data;
    };

    const getRandom = arrayLength => {
      const random = localStorage.getItem('random')
        ? localStorage.getItem('random')
        : localStorage.setItem(
            'random',
            Math.floor(Math.random() * arrayLength)
          );

      return random;
    };

    const query = queryString.parse(document.location.search);
    const selectedExercises = getLocalData('selectedExercises');

    if (query && query.customData && selectedExercises.length) {
      if (selectedExercises.length < randomNumber) {
        localStorage.removeItem('random');
      }

      setRandomNumber(getRandom(selectedExercises.length));
      setRandomExercise(ExercisesData[selectedExercises[randomNumber]]);
      setDifficulty(getLocalData('level'));
    } else {
      setRandomNumber(getRandom(ExercisesList.length));
      setRandomExercise(ExercisesData[ExercisesList[randomNumber]]);
      setDifficulty('easy');
    }

    // setRandomExercise(exercises[0]);
  }, [randomNumber, randomExercise]);

  useEffect(() => {
    if (randomExercise && randomExercise.duration && start) {
      timer.start({
        countdown: true,
        startValues: { minutes: randomExercise.duration[difficulty] }
      });

      timer.addEventListener('secondsUpdated', function(e) {
        setTime(timer.getTimeValues().toString());
      });

      timer.addEventListener('targetAchieved', function(e) {
        setTime(null);
        localStorage.removeItem('random');
        window.location = '/success';
      });
    } else if (randomExercise && randomExercise.reps && start) {
      timer.start();

      timer.addEventListener('secondsUpdated', function(e) {
        setTime(timer.getTimeValues().toString());
      });
    }
  }, [randomExercise, start, timer, difficulty]);

  return (
    <>
      <NavBar pauseMusic={handlePauseAlarm} isTabActive={isActive} />
      <div className="exercise-area" id="exercise">
        <div className="exercise-message">
          <h3>Go kill it, you beast</h3>
        </div>
        {randomExercise && (
          <Exercise
            gif={randomExercise.gif}
            reps={randomExercise.reps[difficulty]}
            time={
              time
                ? time
                : randomExercise.duration[difficulty]
                ? randomExercise.duration[difficulty] + ' minutes'
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
