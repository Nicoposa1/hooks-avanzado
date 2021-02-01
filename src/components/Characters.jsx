import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import { Img, H2 } from '../Styles/Characters'
import Search from './Search'
import './Character.css'
import useCharacters from '../hooks/useCharacters'

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character'

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
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const characters = useCharacters(API)

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value)
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

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
          <li className="favoriteList" key={favorite.id}>
            {favorite.name}
          </li>
        ))
      }


      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

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
