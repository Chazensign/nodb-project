import React, { Component } from 'react';
import axios from 'axios'
import './AddEx.css'
import Button from '../ExDetails/Button'
import Header from '../Header/Header'

class AddEx extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Exercise: '',
      Equipment: '',
      ExerciseType: '',
      MajorMuscle: '',
      MinorMuscle: '',
      Example: '',
      Notes: '',
      Modifications: '',
      Reps: null,
      Sets: null,
      Weight: null
     }
  }
  addExIn = () => {
    axios
    .post("/api/exercise", this.state)
    .then(res => {
      this.props.history.push("/")
    })
    .catch(error => console.log(error))
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() { 
    return (
      <div className='add-box'>
        <Header/>
        <div className="header-back"></div>
        <input
          name="Exercise"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Exercise Name"
        />
        <input
          name="Equipment"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Necessary Equipment"
        />
        <input
          name="ExerciseType"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Type of Exercise"
        />
        <input
          name="MajorMuscle"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Main Muscle Worked"
        />
        <input
          name="MinorMuscle"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Secondary Muscle Worked"
        />
        <input
          name="Example"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Image/gif URL"
        />
        <input
          name="Notes"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Add Notes"
        />
        <input
          name="Modifications"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Add Modifications"
        />
        <input
          name="Reps"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Reps"
        />
        <input
          name="Sets"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Sets"
        />
        <input
          name="Weight"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Weight"
        />
        <Button name='Submit' onClick={this.addExIn} />
      </div>
    )
  }
}
 
export default AddEx;