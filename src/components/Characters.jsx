import React, { useState, useEffect } from 'react'
import { Img, H2 } from '../Styles/Characters'
import './Character.css'


export default function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <div className="container">
        <ul className="row">
          {characters.map((character) => (
            <li className="col-6 col-md-3">
              <Img src={character.image} alt=""/>
              <H2>{character.name}</H2>
            </li>
          ))}
        </ul>
    </div>
  )
}
