// Write your Character component here
import React, { useState } from 'react';
// import axios from 'axios';
import '../../src/App.css';
import styled from 'styled-components';



const CharBox = styled.div`
    display: flex;
    justify-content:space-around;
    align-items:center;
    background-color: #A3643E;
    border: 3px solid maroon;
    border-radius: 5px;
    margin: 2% 0;
    padding: 2% 2%;
    width: 50%;

`
const CharName = styled.h2`
    font-family:Arial, Helvetica, sans-serif;
`

const BornP = styled.p`
    font-weight: bold;
    color: white;
`
const NameDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Character(props) {
    const { characters, character, birthYear } = props;

    const [details, setDetails] = useState(false)

    return <CharBox>
                <NameDetails>
                    <CharName>{character}</CharName>
                    <button onClick={()=> setDetails(!details)}>More Details</button>
                    {/* {details && <Details characters={characters}/> */}
                </NameDetails>
                <BornP>Born: {birthYear}</BornP>
            </CharBox>
}
