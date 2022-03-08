import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Gamespace.css';

function Gamespace(props) {
    let deck = [];
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (i <= k) {
                deck.push(<Card sides={{ sideA: i, sideB: k }}></Card>)
            }
        }
    }

    let getNextCard = () => {
        return getRandomCard();
    }

    const getRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * deck.length);
        return deck.splice(randomIndex, 1)[0];
    };

    const [numberOfPlayers, setNumberOfPlayers] = useState();
    const [hands, setHands] = useState();

    function handleChange(event) {
        setNumberOfPlayers(parseInt(event.target.value));
    }

    useEffect(() => {
        let tempHands = [];
        let numberOfCardsPerHand;
        switch (numberOfPlayers) {
            case 2:
                numberOfCardsPerHand = 9;
                break;
            case 3:
                numberOfCardsPerHand = 12;
                break;
            case 4:
                numberOfCardsPerHand = 9;
                break;
        }


        for (let i = 0; i < numberOfPlayers; i++) {
            let hand = [];
            for (let j = 0; j < numberOfCardsPerHand; j++) {
                hand.push(getNextCard())
            }

            tempHands.push(hand);
        }

        setHands(tempHands);

    }, [numberOfPlayers])

    return (
        <>  
        {hands &&
            <div className="gameStatus">
                <div className='playArea'>
                    <h1>GAMESPACE</h1>
                    <div className="table">
                        {hands[0]}, {hands[1]}, {hands[2]}, {hands[3]}
                    </div>
                    <div className='gameControls'>
                        <label>How many players?</label>
                        <select onChange={handleChange}>
                            <option value="none" selected disabled>Select an Option</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default Gamespace;