import React, { useState, useEffect,Component } from 'react';
import { Timer } from 'easytimer.js';
import NavBar from '../components/navbar';
import Exercise from '../components/exercise';
import './index.css';
import queryString from 'query-string';


import alertAudioFile from '../assets/alert.wav';

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
import glutebridgesGif from "../images/glutebridges.gif";
import spinalbalanceGif from "../images/spinalbalance.gif";
import bicyclecrunchesGif from "../images/bicyclecrunches.gif";
import sidelungesGif from "../images/sidelunges.gif";
import jumpsquatsGif from "../images/jumpsquats.gif";
import situpsGif from "../images/situps.gif";
import buttkicksGif from "../images/buttkicks.gif";
import supermanraisesGif from "../images/supermanraises.gif";
import tricepdipsGif from "../images/tricepdips.gif";
import flutterkicksGif from "../images/flutterkicks.gif";
import calfraisesGif from "../images/calfraises.gif";
import jumplungesGif from "../images/jumplunges.gif";
import pullupsGif from "../images/pullups.gif";


class ExercisePage extends Component {
  randomExercise = [
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

  exercises = [
    { name: "Burpees", gif: burpeesGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Lunges", gif: lungesGif, easyReps: 12,mediumReps:18,hardReps:22 },
    { name: "Squats", gif: squatsGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name:"Jumping Jacks", gif: jumpingGif, easyTime: 30,mediumTime:60,hardTime:90 },
    { name: "Planks", gif: planksGif, easyTime: 30,mediumTime:60,hardTime:90 },
    { name: "Glute Bridges", gif: glutebridgesGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Spinal Balance", gif: spinalbalanceGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Bicycle Crunches", gif: bicyclecrunchesGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Side Lunges", gif: sidelungesGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Jump Squats", gif: jumpsquatsGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Situps", gif: situpsGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Mountain Climbers", gif: mountainclimbersGif, easyTime: 30,mediumTime:60,hardTime:90 },
    { name: "Butt Kicks", gif: buttkicksGif, easyTime: 30,mediumTime:60,hardTime:90 },
    { name: "Superman Raises", gif: supermanraisesGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Tricep Dips", gif: tricepdipsGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Flutter Kicks", gif: flutterkicksGif, easyTime: 30,mediumTime:60,hardTime:90 },
    { name: "Calf Raises", gif: calfraisesGif, easyReps: 7,mediumReps:12,hardReps:18 },
    { name: "Jump Lunges", gif: jumplungesGif, easyTime: 30,mediumTime:60,hardTime:90 },
    { name: "Pullups", gif: pullupsGif, easyReps: 7,mediumReps:12,hardReps:18 }
  ];


  // { gif, reps, time } = this.randomExercise;
  gif = "";
  reps = "";
  time = "";

  constructor(props) {
    super(props);
    let query = queryString.parse(document.location.search);
    let customData = JSON.parse(localStorage.getItem("customData"));
    if (query && query.customData) {
      const randomIndex = Math.floor(Math.random() * customData["selectedExercises"]);
      const exercise = customData["selectedExercises"][randomIndex];
      const randomExercise = this.exercises.find(ex => ex.name === exercise);
      if(customData["level"] === "easy") {
        this.gif = randomExercise.gif;
        this.reps = randomExercise.easyReps ? randomExercise.easyReps : null;
        this.time = randomExercise.easyTime ? randomExercise.easyTime : null;
      } else if(customData["level"] === "medium") {
        this.gif = randomExercise.gif;
        this.reps = randomExercise.mediumReps ? randomExercise.mediumReps : null;
        this.time = randomExercise.mediumTime ? randomExercise.mediumTime : null;
      } else {
        this.gif = randomExercise.gif;
        this.reps = randomExercise.hardReps ? randomExercise.hardReps : null;
        this.time = randomExercise.hardTime ? randomExercise.hardTime : null;
      }
    } else {
      this.gif = this.randomExercise.gif;
      this.reps = this.randomExercise.reps;
      this.time = this.randomExercise.time ? this.randomExercise.time : null;
    }

  }

  render() {
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
  }
};

export default ExercisePage;
