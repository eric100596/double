import React, { useState, useEffect } from 'react';
import './Gamespace.css';


// function Gamespace(props) {
//     let deck = [
//         '0,0', '0,1', '0,2', '0,3', '0,4', '0,5', '0,6', '0,7', '1,1', '1,2', '1,3', '1,4', '1,5', '1,6', '1,7', '2,2', '2,3', '2,4', '2,5', '2,6', '2,7', '3,3' , '3,4' , '3,5', '3,6', '3,7', '4,4', '4,5', '4,6', '4,7', '5,5', '5,6', '5,7', '6,6', '6,7', '7,7'
//     ]

//     let hands;

//     let detNextCard = () => {
//         deck.pop();
//     }

//     const [numberOfPlayers, setNumberOfPlayers] = useState(4);

//     useEffect(() => {
//         hands = {};
//         let numberOfCardsPerHand;
//         switch (numberOfPlayers) {
//             case 2:
//                 numberOfCardsPerHand = 9;
//                 break;
//             case 3:
//                 numberOfCardsPerHand = 12;
//                 break;
//             case 4:
//                 numberOfCardsPerHand = 9;
//                 break;
//         }
//     }

//     for (let i = 0; i < numberOfPlayers; i++) {
//         let hand = [];
//         for (i = 0; i < numberOfCardsPerHand; i++) {
//             hand.push(getNextCard())
//         }

//         hands[i] = hand;
//     }
    
//   }, [numberOfPlayers])
       
//   return (


function Gamespace() {

    const [numberOfPlayers, setNumberOfPlayers] = useState();

    function handleChange(event) {
        setNumberOfPlayers(event.target.value);
    }

    return (
        <div> 
            {/* How many players?
        <input 
        type={Number}
        numberOfPlayers="numberOfPlayers"
        onChange={handleChange}
        value={numberOfPlayers}
        /> */}
        <div className="gameStatus">
        <label for="gameStatus">How many players?</label>
             <select id="gameStatus" name="gameStatus">
            <option value="">Select</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
        </div>


<div className='playArea'>
          <div className="table">
              <h1>GAMESPACE</h1>
          </div> 
    <div className='gameControls'>
              <button>
               New Game
              </button>
              <button>
              Shuffle & Deal
              </button>
          
  </div>   
</div>
        </div>

  


    );

    }


export default Gamespace;