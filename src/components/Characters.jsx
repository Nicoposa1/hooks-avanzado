import React, { useState, useEffect, useReducer, useMemo } from 'react'
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
  const [search, setSearch] = useState('')

  useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filteredUsers = useMemo(() => 
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search]
  )

  return (

    <div className="container">
      {
        favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))
      }


      <div className="Search">
        <input type="text" value={search} onChange={handleSearch} />
      </div>

        <ul className="row">
          {filteredUsers.map((character) => (
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
