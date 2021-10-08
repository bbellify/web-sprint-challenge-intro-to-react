import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Header = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  margin-top: 2%;
`

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        // console.log(res.data);
        setCharacters(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Header>React Wars</Header>
      <Container>
        {characters.map((char, idx) => {
          return <Character character={char['name']} birthYear={char['birth_year']} key={idx}/>
        })
        }
      </Container>
    </div>
  )
}

export default App;
