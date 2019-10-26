import React, {Component} from 'react';
import { Link } from "react-router-dom"


class ExListDisp extends Component {

  render() { 
  let {filteredEx} = this.props
  return ( 
    <ol>
    {filteredEx.map(ex => {
      return <Link to={`/detview/${ex.id}`}><li>{ex.Exercise}</li></Link>
    })}
    </ol>
   )
  }
}
 
export default ExListDisp;