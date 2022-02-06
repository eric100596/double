import React from 'react';
import './Gamespace.css';
import { Rectangle } from 'draw-shape-reactjs';

function Gamespace(props) {
    const { box, button1, button2, button3 } = props;
  return (
      <>
        <div class="playArea">
            <h1>GAMESPACE</h1>
        <Rectangle
                    corner={[130, 80]}
                    height={500}
                    width={1000}
                    color='black'
                />
        </div>
        <div class="btn">
            { Gamespace }
            <button>
                New Game
            </button>
            <button>
                Number of Players
            </button>
            <button>
                Shuffle & Deal
            </button>
        </div>
    </>
  );
}

export default Gamespace;