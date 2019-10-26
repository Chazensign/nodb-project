import React, { Component } from 'react';
import axios from 'axios'
import DeleteEx from './DeleteEx'
import './ExDetails.css'
import EditEx from '../EditEx'


class ExDetails extends Component {
  constructor() {
    super()
    this.state = {
      toDisplay: {},
      displayEdit: true
    }
  }
  submitChange = () => {
    axios.put(`/api/update/${this.state.toDisplay.id}`, this.state.toDisplay)
    this.toggleEdit()
  }
  componentDidMount() {
    axios.get(`/api/exer/${this.props.match.params.id}`).then(res => {
      this.setState({ toDisplay: res.data[0] })
    })
  }
  toggleEdit = () => {
    this.setState({ displayEdit: !this.state.displayEdit })
  }
  handleChange = e => {
    this.setState({
      toDisplay:{
        ...this.state.toDisplay,
      [e.target.name]: e.target.value}
    })
  }
  render() {
    const {
      id,
      Exercise,
      Equipment,
      ExersizeType,
      MajorMuscle,
      MinorMuscle,
      Example,
      Notes,
      Modifications,
      Reps,
      Sets,
      Weight
    } = this.state.toDisplay
    return this.state.displayEdit ? (
      <div id={id}>
        <h3>{Exercise}</h3>
        <p>{Equipment}</p>
        <p>{ExersizeType}</p>
        <p>{MajorMuscle}</p>
        <p>{MinorMuscle}</p>
        <p>{Notes}</p>
        <p>{Modifications}</p>
        <p>{Reps}</p>
        <p>{Sets}</p>
        <p>{Weight}</p>
        <img src={Example} alt="Exercise example" />
        <button onClick={() => this.toggleEdit()}>Edit</button>
        <DeleteEx history={this.props.history} muscle={MajorMuscle} id={id} />
      </div>
    ) : (
      <EditEx
        handleChange={this.handleChange}
        submitChange={this.submitChange}
        toEdit={this.state.toDisplay}
      />
    )
  }
}

  

 
export default ExDetails;






