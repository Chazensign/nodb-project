import React, { Component } from 'react';
import './EditEx.css'

class EditEx extends Component {
  render() {
    let {
            Exercise,
            Equipment,
            ExerciseType,
            MajorMuscle,
            MinorMuscle,
            Example,
            Notes,
            Modifications,
            Reps,
            Sets,
            Weight
          } = this.props.toEdit 
    return ( 
      <div className='edit-box'>
        <input
          name="Exercise"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Exercise Name"
          value={Exercise || ""}
        />
        <input
          name="Equipment"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Necessary Equipment"
          value={Equipment}
        />
        <input
          name="ExerciseType"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Type of Exercise"
          value={ExerciseType}
        />
        <input
          name="MajorMuscle"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Main Muscle Worked"
          value={MajorMuscle}
        />
        <input
          name="MinorMuscle"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Secondary Muscle Worked"
          value={MinorMuscle}
        />
        <input
          name="Example"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Image/gif URL"
          value={Example}
        />
        <input
          name="Notes"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Add Notes"
          defaultValue={Notes}
        />
        <input
          name="Modifications"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Add Modifications"
          value={Modifications}
        />
        <input
          name="Reps"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Reps"
          value={Reps}
        />
        <input
          name="Sets"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Sets"
          value={Sets}
        />
        <input
          name="Weight"
          type="text"
          onChange={e => this.props.handleChange(e)}
          placeholder="Weight"
          value={Weight}
        />
        <button onClick={() => this.props.submitChange()}>Submit</button>
      </div>
     );
  }
}
 
export default EditEx;



  
