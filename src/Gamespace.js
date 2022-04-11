import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Gamespace.css';

function Gamespace(props) {
    //Create empty array to hold deck
    let deck = [];
    let cardValues = [];
    //Use for loop to create deck    
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (i <= k) {
                cardValues.push({ sideA: i, sideB: k });
            }
        }
    }
    //Function to generate random cards in each hand
    let getNextCard = (playerHand) => {
        return getRandomCard(playerHand);
    }

    const getRandomCard = (playerHand) => {
        const randomIndex = Math.floor(Math.random() * deck.length);
        let cardValue = cardValues.splice(randomIndex, 1)[0];
        /* let card;
        if(){
            card = <Card rotation={playerHand < 2 ? '90' : '90'} showFace={playerHand == 1 ? true : false} sides={{ sideA: cardValue.sideA, sideB: cardValue.sideB }}></Card>;
        }else if(){
            card = <Card rotation={playerHand < 2 ? '90' : '0'} showFace={playerHand == 1 ? true : false} sides={{ sideA: cardValue.sideA, sideB: cardValue.sideB }}></Card>;
            }
        }
        return card; */
        return <Card rotation={playerHand < 2 && playerHand === 0 ? '0' : '90'} showFace={playerHand === 1 ? true : false} sides={{ sideA: cardValue.sideA, sideB: cardValue.sideB }}></Card>;
    };

    const [numberOfPlayers, setNumberOfPlayers] = useState();
    const [hands, setHands] = useState();

    function handleChange(event) {
        setNumberOfPlayers(parseInt(event.target.value));
    }

    useEffect(() => {
        let tempHands = [];
        let numberOfCardsPerHand;
        //Determines number of players/hands/cards per hand
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

//Puts random cards in each player's hand
        for (let i = 0; i < numberOfPlayers; i++) {
            let hand = [];
            for (let j = 0; j < numberOfCardsPerHand; j++) {
                hand.push(getNextCard(i))
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
                        <div style={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'end', alignSelf: 'center'}}>{hands[3]}</div>
                        <div style={{display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'center'}}>{hands[0]}</div>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, alignSelf: 'center'}}>{hands[2]}</div>
                        <div style={{display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'center', alignSelf: 'end'}}>{hands[1]}</div>
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