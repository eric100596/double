import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <>
      <div className='vertical default'>
        <img src={props.sides.sideA + '_' + props.sides.sideB + '.png'} ></img> 
      </div>
    </>
  )
}
export default Card;