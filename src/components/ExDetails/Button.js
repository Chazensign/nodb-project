import React from 'react';

function Button(props) {
 
  return ( 
    <>
    <button disabled={props.disbled ? props.disbled : false} onClick={props.onClick}>{props.name}</button>
    </>
   );
}
 
export default Button;