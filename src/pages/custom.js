import React,{ Component } from 'react';
// import { Link } from 'gatsby';
import NavBar from '../components/navbar';
import './index.css';
import "react-input-range/lib/css/index.css";
import InputRange from 'react-input-range';

class CustomPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frequency : 2,
      work: 3,
      level: ""
    }
  }

  exercises = [
    "Jumping Jacks",
    "Lunges",
    "Planks",
    "Squats",
    "Burpees",
    "Glute Bridges",
    "Spinal Balance",
    "Bicycle Crunches",
    "Side Lunges",
    "Jump Squats",
    "Situps",
    "Mountain Climbers",
    "Butt Kicks",
    "Superman Raises",
    "Tricep Dips",
    "Flutter Kicks",
    "Calf Raises",
    "Jump Lunges",
    "Pullups"
  ];

  selectedExercises = [];
  

  selectExercise =(exercise,index) => {
    if(this.selectedExercises.indexOf(exercise) === -1) {
      this.selectedExercises.push(exercise);
      document.getElementById(`${index}${exercise}`).className = "choice selected-exercise";
    } else {
      this.selectedExercises.splice(this.selectedExercises.indexOf(exercise), 1);
      document.getElementById(`${index}${exercise}`).className = "choice";
    }
  }

  selectLevel = (level) => {
    this.setState({
      level: level
    });
    if (level === "easy") {
      document.getElementById("medium").checked = false;
      document.getElementById("hard").checked = false;
    } else if (level === "medium") {
      document.getElementById("easy").checked = false;
      document.getElementById("hard").checked = false;
    } else {
      document.getElementById("easy").checked = false;
      document.getElementById("medium").checked = false;
    }
  }

  saveCustomData = () => {
    console.log("inside custom")
    const { frequency, work, level } = this.state;
    if(this.selectedExercises.length > 0 && frequency && work && level) {
      localStorage.setItem ("customData", JSON.stringify({
        frequency,
        work,
        level,
        selectedExercises: this.selectedExercises,
        startExercise: 0
      }));
      window.location = '/home?customData=true';
    } 
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="big-form">
          <div className="f-section">
            <label htmlFor="">Select Exercises: </label>
            <div className="choices">
              {
                this.exercises.map((exercise, index) => {
                  return <div key={index} id={`${index}${exercise}`} 
                  className="choice" onClick={ () => this.selectExercise(exercise, index) }
                  >{exercise}</div>
                })
              }
            </div>
          </div>
          <div className="f-section">
            <label htmlFor="">Frequency: </label>
            {/* <input
              type="range"
              className="slider"
              min="1"
              max="100"
              value="10"
              step="1"
            /> */}
              <InputRange
                maxValue={this.state.work}
                minValue={0}
                value={this.state.frequency}
                onChange={(value) => this.setState({frequency: value})} 
              />
          </div>
          <div className="f-section">
            <label htmlFor="">How long you gonna work:</label>
            {/* <input
              type="range"
              className="slider"
              min="1"
              max="8"
              value="2"
              step="1"
            /> */}
            <InputRange
                maxValue={12}
                minValue={2}
                value={this.state.work}
                onChange={(value) => this.setState({work : value})} 
              />
          </div>
          <div className="f-section">
            <label htmlFor="">Level of exercise:</label>
            <div className="level">
              <div className="checkbox">
                <input type="checkbox" id="easy" value="easy" onClick={() => this.selectLevel("easy")} />
                <label htmlFor="easy">Easy</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="medium" value="medium" onClick={() => this.selectLevel("medium")}/>
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="hard" value="hard" onClick={() => this.selectLevel("hard")}/>
                <label htmlFor="hard">Hard</label>
              </div>
            </div>
          </div>
          <div className="save-custom">
            <div className="start-exercise custom-session" onClick={this.saveCustomData}>
              Start Custom Session
            </div>
          </div>
        </div>
      </>
    );
  }


};

export default CustomPage;
