import React, { Component } from "react"
import axios from "axios"
import ExListDisp from "./ExListDisp"

class ExList extends Component {
  constructor() {
    super()
    this.state = {
      filteredEx: []
    }
  }

  componentDidMount() {
    axios
      .get(`/api/exercise/${this.props.match.params.muscle}`)
      .then(res => {
        this.setState({ filteredEx: res.data })
      })
  }

  toDetailedView = (id) => {
    this.props.history.push(`/detview/${id}`)
  }
  render() {
    let {filteredEx} = this.state
    return (
      <ExListDisp
        toDetailedView={this.toDetailedView}
        filteredEx={filteredEx}
      />
    )
  }
}

export default ExList
