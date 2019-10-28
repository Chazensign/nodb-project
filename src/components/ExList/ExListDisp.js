import React, {Component} from 'react';
import { Link } from "react-router-dom"
import './ExList.css'


class ExListDisp extends Component {

  render() { 
  let {filteredEx} = this.props
  return ( 
    <ol>
    {filteredEx.map(ex => {
      return (
        <Link key={ex.id} to={`/detview/${ex.id}`}>
          <li className='link-list'>{ex.Exercise}</li>
        </Link>
      )
    })}
    </ol>
   )
  }
}
 
export default ExListDisp;