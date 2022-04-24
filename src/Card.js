import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <>
      <div className='default'>
        <img style={{transformOrigin: 'center center', transform: `rotate(${props.rotation}deg)`}} src={props.showFace ? props.sides.sideA + '_' + props.sides.sideB + '_'+ props.direction +'.png' : 'Dbl-7_Logo_'+ props.direction +'.png'} ></img> 
      </div>
    </>
  )
}

Card.defaultProps = {
  rotation: "0", 
  showFace: true,
  direction: 'vertical'
}

export default Card;