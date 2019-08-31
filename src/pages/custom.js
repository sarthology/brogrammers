import React, { Component } from 'react';
import NavBar from '../components/navbar';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import exercises from '../api/exercises-list';
import './index.css';

class CustomPage extends Component {

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


  constructor(props) {
    super(props);
    const customData = JSON.parse(localStorage.getItem("customData"));  
    this.state = {
      frequency : customData && customData.frequency ? customData.frequency : 2,
      work:  customData && customData.work ? customData.work : 3,
      level: customData && customData.level ? customData.level : "",
      selectedExercises: customData && customData.selectedExercises ? customData.selectedExercises : []
    }
  }
  componentDidMount() {
    // console.log("fsdfsdfdsfds",this.state.selectedExercises);
    // this.state.selectedExercises((selectEx) => {
    //   const index = this.exercises.findIndex((exercise) => exercise === selectEx);
    //   document.getElementById(`${index}${exercise}`).className = "choice selected-exercise";
    // });
    const customData = JSON.parse(localStorage.getItem("customData")); 
    if(customData) {
      document.getElementById(customData.level).checked = true;
    }
  }


  selectExercise =(exercise,index) => {
    if(this.state.selectedExercises.indexOf(exercise) === -1) {
      let exercises = this.state.selectedExercises;
      exercises.push(exercise);
      this.setState({
        selectedExercises: exercises
      });
      document.getElementById(`${index}${exercise}`).className = "choice selected-exercise";
    } else {
      let exercises = this.state.selectedExercises;
      // exercises.push(exercise);
      exercises.splice(this.state.selectedExercises.indexOf(exercise), 1);
      this.setState({
        selectedExercises: exercises
      })
      document.getElementById(`${index}${exercise}`).className = "choice";
    }
  };

  selectLevel = level => {
    this.setState({
      level: level
    });
    if (level === 'easy') {
      document.getElementById('medium').checked = false;
      document.getElementById('hard').checked = false;
    } else if (level === 'medium') {
      document.getElementById('easy').checked = false;
      document.getElementById('hard').checked = false;
    } else {
      document.getElementById('easy').checked = false;
      document.getElementById('medium').checked = false;
    }
  };

  saveCustomData = () => {
    const { frequency, work, level } = this.state;
    if(this.state.selectedExercises.length > 0 && frequency && work && level) {
      localStorage.setItem ("customData", JSON.stringify({
        frequency,
        work,
        level,
        selectedExercises: this.state.selectedExercises,
        startExercise: 0
      }));
      window.location = '/home?customData=true';
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="big-form">
          <div className="f-section">
            <label htmlFor="">Select Exercises: </label>
            <div className="choices">
              {exercises.map((exercise, index) => {
                return (
                  <div
                    key={index}
                    id={`${index}${exercise}`}
                    className="choice"
                    onClick={() => this.selectExercise(exercise, index)}
                  >
                    {exercise}
                  </div>
                );
              })}
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
              onChange={value => this.setState({ frequency: value })}
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
              onChange={value => this.setState({ work: value })}
            />
          </div>
          <div className="f-section">
            <label htmlFor="">Level of exercise:</label>
            <div className="level">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="easy"
                  value="easy"
                  onClick={() => this.selectLevel('easy')}
                />
                <label htmlFor="easy">Easy</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="medium"
                  value="medium"
                  onClick={() => this.selectLevel('medium')}
                />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="hard"
                  value="hard"
                  onClick={() => this.selectLevel('hard')}
                />
                <label htmlFor="hard">Hard</label>
              </div>
            </div>
          </div>
          <div className="save-custom">
            <div
              className="start-exercise custom-session"
              onClick={this.saveCustomData}
            >
              Start Custom Session
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CustomPage;
