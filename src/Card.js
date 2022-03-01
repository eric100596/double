import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <>
      <div>
        Hello {JSON.stringify(props.sides)}
      </div>
    </>
  )
}
export default Card;