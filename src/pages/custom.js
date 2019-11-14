import React, { Component } from 'react';
import { navigate } from 'gatsby';
import NavBar from '../components/navbar';
import InputRange from 'react-input-range';
import exercises from '../api/exercises-list';
import 'react-input-range/lib/css/index.css';
import './index.css';

// if (typeof window !== 'undefined') {
//   const InputRange = require('react-input-range');
// }

class CustomPage extends Component {
  constructor(props) {
    super(props);
    const customData =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('customData'))
        : {};

    this.state = {
      frequency: customData && customData.frequency ? customData.frequency : 2,
      work: customData && customData.work ? customData.work : 3,
      level: customData && customData.level ? customData.level : '',
      selectedExercises:
        customData && customData.selectedExercises
          ? customData.selectedExercises
          : []
    };
  }
  componentDidMount() {
    this.state.selectedExercises.forEach((selectEx) => {
      const index = exercises.findIndex((exercise) => exercise === selectEx);
      document.getElementById(`${index}${selectEx}`).className = "choice selected-exercise";
    });
    if (typeof window !== 'undefined') {
      const customData = JSON.parse(localStorage.getItem('customData'));
      if (customData) {
        if (typeof window !== 'undefined') {
          document.getElementById(customData.level).checked = true;
        }
      }
    }
  }

  selectExercise = (exercise, index) => {
    // console.log( `${index}${exercise}`);
    if (this.state.selectedExercises.indexOf(exercise) === -1) {
      let exercises = this.state.selectedExercises;
      exercises.push(exercise);
      this.setState({
        selectedExercises: exercises
      });

      if (typeof window !== 'undefined') {
        document.getElementById(`${index}${exercise}`).className =
          'choice selected-exercise';
      }
    } else {
      let exercises = this.state.selectedExercises;
      // exercises.push(exercise);
      exercises.splice(this.state.selectedExercises.indexOf(exercise), 1);
      this.setState({
        selectedExercises: exercises
      });

      if (typeof window !== 'undefined') {
        document.getElementById(`${index}${exercise}`).className = 'choice';
      }
    }
  };

  selectLevel = level => {
    this.setState({
      level: level
    });

    if (typeof window !== 'undefined') {
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
    }
  };

  saveCustomData = () => {
    if (typeof window !== 'undefined') {
      const { frequency, work, level } = this.state;
      if (
        this.state.selectedExercises.length > 0 &&
        frequency &&
        work &&
        level
      ) {
        localStorage.setItem(
          'customData',
          JSON.stringify({
            frequency,
            work,
            level,
            selectedExercises: this.state.selectedExercises,
            startExercise: 1
          })
        );
        navigate('/home?customData=true');
      }
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="big-form">
          <div className="f-section">
            <label htmlFor="">Select Exercises: </label>
            <ul className="choices">
              {exercises.map((exercise, index) => {
                return (
                  <li
                    key={index}
                    id={`${index}${exercise}`}
                    className="choice"
                    onClick={() => this.selectExercise(exercise, index)}
                  >
                    {exercise}
                  </li>
                );
              })}
            </ul>
          </div>
          {typeof window !== 'undefined' && (
            <div>

              <div className="f-section">
                <label htmlFor="">How long you gonna work:</label>
                <InputRange
                  maxValue={12}
                  minValue={2}
                  value={this.state.work}
                  onChange={value => this.setState({ work: value })}
                />
              </div>

              <div className="f-section">
                <label htmlFor="">Frequency: </label>
                <InputRange
                  maxValue={this.state.work}
                  minValue={0}
                  value={this.state.frequency}
                  onChange={value => this.setState({ frequency: value })}
                />
              </div>
              
            </div>
          )}
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
              <div className="checkbox checkbox-2">
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
                <label htmlFor="hard" className="hard-label">
                  Hard
                </label>
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
