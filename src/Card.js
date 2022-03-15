import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <>
      <div className='default'>
        <img style={{transformOrigin: 'center center', transform: 'rotate(90deg)'}} src={props.sides.sideA + '_' + props.sides.sideB + '.png'} ></img> 
      </div>
    </>
  )
}
export default Card;