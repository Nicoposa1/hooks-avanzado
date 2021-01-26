import React, { useState, useEffect, useReducer } from 'react'
import { Img, H2 } from '../Styles/Characters'
import './Character.css'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites:[...state.favorites, action.payload] 
      };
    default:
      return state
  }
}

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

  useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  return (

    <div className="container">
      {
        favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))
      }
        <ul className="row">
          {characters.map((character) => (
            <li key={character.id} className="col-6 col-md-3">
              <Img src={character.image} alt=""/>
              <H2>{character.name}</H2>
              <button type="button" onClick={() => handleClick(character)} >Add to favorites</button>
            </li>
          ))}
        </ul>
    </div>
  )
}
