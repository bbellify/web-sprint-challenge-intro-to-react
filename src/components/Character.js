// Write your Character component here
// import React, { useState, useEffect } from 'react';
import '../../src/App.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CharBox = styled.div`
    border: 3px solid grey;
    border-radius: 5px;
    margin: 2% 0;
    padding: 2% 5%;
    width: 50%;

`

export default function Character(props) {

    const { characters } = props;

    return (
        <Container>
            {characters.map((char, idx) => {
                return <CharBox key={idx}><h2>{char}</h2></CharBox>
            })}
        </Container>
    )
}
