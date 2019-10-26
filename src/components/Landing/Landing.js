import React, { Component } from "react"
import axios from 'axios'
import {withRouter} from "react-router-dom"

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      exercises: [],
      filterBy: "",
      toList: []
    }
  }
  componentDidMount() {
    axios
    .get('/api/all').then(res => {
      this.setState({
        exercises: res.data
        }, () => this.exToDisp())
      })
  }
  exToDisp = () => {
    let tempArr = this.state.exercises.map(ex => ex.MajorMuscle)
     let tempArr2 = tempArr.filter(
      (ex, i) => (tempArr.indexOf(ex) === i))
     this.setState({ toList : tempArr2 })
  }
  
  handleChange = (input) => {
    this.setState({ filterBy: input.value });
  }
  submit = (input) => {
    console.log(input)
    this.props.history.push(`/exlist/${input}`)
   
  }

  render() {
    const {toList} = this.state
    console.log()
    return (
      <main>
        <select onChange={e => this.submit(e.target.value)}>
          <option>None</option>
          {toList.map(ex => {
            return <option value={ex} >{ex}</option>
          })}
        </select>
      </main>
    )
  }
}

export default withRouter(Landing)
