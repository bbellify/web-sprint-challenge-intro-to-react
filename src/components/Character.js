// Write your Character component here
import React from 'react';
// import axios from 'axios';
import '../../src/App.css';
import styled from 'styled-components';



const CharBox = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    background-color: #A3643E;
    border: 3px solid maroon;
    border-radius: 5px;
    margin: 2% 0;
    padding: 2% 5%;
    width: 50%;

`
const CharName = styled.h2`
    font-family:Arial, Helvetica, sans-serif;
`

const BornP = styled.p`
    font-weight: bold;
    color: white;
`

export default function Character(props) {
    const { character, birthYear } = props;

    return <CharBox><CharName>{character}</CharName><BornP>Born: {birthYear}</BornP></CharBox>
}
