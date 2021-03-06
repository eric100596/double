import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import Table from './Table';
import './Gamespace.css';

function Gamespace(props) {
    const [handWithHighestCard, setHandWithHighestCard] = useState();
    const sevenSevenIndex = useRef();
    const [playedCards, setPlayedCards] = useState([]);
    const highestDouble = useRef(-1);

    const cardValues = useRef([]);
    //Use for loop to create deck
    useEffect(() => {
        for (let i = 0; i < 8; i++) {
            for (let k = 0; k < 8; k++) {
                if (i <= k) {
                    console.log({ sideA: i, sideB: k });
                    cardValues.current.push({ sideA: i, sideB: k });
                }
            }
        }
    }, []);

    //Function to generate random cards in each hand
    let getNextCard = (playerHand) => {
        return getRandomCard(playerHand);
    }

    const getCardRotation = (hand) => {
        switch (hand) {
            case 0:
                return 90;
            case 1:
                return 90;
            case 2:
                return 0;
            case 3:
                return 180;
        }
    }

    const getRandomCard = (playerHand) => {
        const randomIndex = Math.floor(Math.random() * cardValues.current.length);
        let cardValue = cardValues.current.splice(randomIndex, 1)[0];
        return <Card rotation={getCardRotation(playerHand)} direction={'horizontal'} showFace={playerHand === 1 ? true : false} sides={{ sideA: cardValue.sideA, sideB: cardValue.sideB }}></Card>;
    };

    const [numberOfPlayers, setNumberOfPlayers] = useState();
    const [hands, setHands] = useState(undefined);

    useEffect(() => {
        if (!hands || hands.length == 0) {
            return;
        }

        for (let [index, hand] of hands.entries()) {
            for (let [cardIndex, card] of hand.entries()) {
                if (card.props.sides.sideA == card.props.sides.sideB) {
                    if (highestDouble.current < card.props.sides.sideA) {
                        highestDouble.current = card.props.sides.sideA;
                        setHandWithHighestCard(index);
                        sevenSevenIndex.current = cardIndex;
                    }
                }
            }
        }
    }, [hands])

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

    let handOrder = useRef([1, 2, 0, 3]);

    const setCurrentHand = (hand) => {
        while (hand != handOrder.current[0]) {
            let oldHand = handOrder.current.shift();
            handOrder.current.push(oldHand);
        }

        return handOrder.current[0];
    }

    useEffect(() => {
        if (handWithHighestCard === undefined) {
            return;
        }
        playFirstCard(hands[handWithHighestCard], sevenSevenIndex.current);
    }, [handWithHighestCard])

    const playFirstCard = (hand, cardIndex) => {
        setPlayedCards(...playedCards, hand.splice(cardIndex, 1));
    };

    const playCard = (hand, cardIndex, orientation, side, border) => {
        console.log(playCard);
        return (
            <div> 
                style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'end', alignSelf: 'center', rowGap: '45px', paddingRight: '30px' }} {hands[3]} onClick={() => playCard()}
            </div>
         );
    };


    return (
        <>
            {hands &&
                <div className="gameStatus">
                    <div className='playArea'>
                        <h1>GAMESPACE</h1>
                        <div className="gamespace">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'end', alignSelf: 'center', rowGap: '45px', paddingRight: '30px' }}>{hands[3]}</div>
                            <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'center', columnGap: '20px' }}>{hands[0]}</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, alignSelf: 'center', rowGap: '45px', paddingLeft: '30px' }}>{hands[2]}</div>
                            <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', gridColumn: 1, gridRow: 1, justifySelf: 'center', alignSelf: 'end', columnGap: '20px' }}>{hands[1]}</div>
                            <Table> {
                                playedCards.map((card) => {
                                    return (<Card {...card.props} showFace={true} />)
                                })
                            } </Table>
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