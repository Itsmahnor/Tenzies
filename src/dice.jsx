import React from 'react';

export default function Die(props) {
  const styles = {
    backgroundColor: props.held ? "#59E391" : "white",
  };

  const dotStyle = {
    width: '5px',     // Width of the dot
    height: '5px',    // Height of the dot
    borderRadius: '50%', // Makes the element circular
    backgroundColor: 'red', // Color of the dot
    display: 'inline-block',
    margin: '5px', // Adjusted for better spacing
   
  };

let dots=Array.from({length:props.value+1},(_,index)=>
   <div key={index} style={dotStyle}></div>
)

  return (
    <div className="die-face " onClick={props.hold} style={styles}>
      <div >{dots}</div>
   
    </div>
  );
}
