// Write your Character component here
import React from 'react';
// import axios from 'axios';
import '../../src/App.css';
import styled from 'styled-components';



const CharBox = styled.div`
    border: 3px solid grey;
    border-radius: 5px;
    margin: 2% 0;
    padding: 2% 5%;
    width: 50%;

`

export default function Character(props) {
    const { character } = props;

    // const [films, setFilms] = useState('')

    // axios.get('https://swapi.dev/api/films')
    //     .then(res => {
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    // revisit if time allows

    return <CharBox><h2>{character}</h2></CharBox>
}
