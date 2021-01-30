import React from 'react'

export default function Search({search,searchInput, handleSearch}) {
  return (
    <div className="Search">
      <input 
        type="text" 
        ref={searchInput} 
        value={search} 
        onChange={handleSearch} 
      />
    </div>
  )
}
