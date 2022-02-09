import React, { useState, useEffect } from 'react';
import './Gamespace.css';


function Gamespace(props) {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);

    useEffect(() => {
        document.title = 'You clicked ${numberOfPlayers} times';
    }, [numberOfPlayers])

  return (
      <>
      <div className='playArea'>
                <div className="table">
                    <h1>GAMESPACE</h1>
                </div> 
          <div className='gameControls'>
                    <button>
                     New Game
                    </button>
                    {/* <button>
                     Number of Players
                    </button> */}
                    <button>
                    Shuffle & Deal
                    </button>
                
        </div>   
    </div>
        
    </>
  );
}

export default Gamespace;