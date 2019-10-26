import React from 'react';
import axios from 'axios'
import { withRouter } from "react-router-dom"

function DeleteEx(props) {
 const deleteEx = () => {
    axios
    .delete(`/api/delexer/${props.id}`)
    .then(res => goBack())
  }
  function goBack() {
    props.history.push(`/exlist/${props.muscle}`)
  }
  return ( 
    <>
    <button onClick={goBack}>Back</button>
    <button onClick={deleteEx}>Delete</button>
    </>
   );
}
 
export default withRouter(DeleteEx);