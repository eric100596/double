import React from 'react';
import './Gamespace.css';

function Gamespace(props) {
    const { box, button1, button2, button3 } = props;
  return (
      <>

        <div>
            { Gamespace }
            <button1>
                New Game
            </button1>
            <button2>
                Number of Players
            </button2>
            <button3>
                Shuffle & Deal
            </button3>
        </div>
    </>
  );
}

export default Gamespace;