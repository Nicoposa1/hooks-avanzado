import React from 'react'

export const Theme = {
  Dark:{
    color:"#f5feff" ,
    background: "#232931",
  },
  Light:{
    color:  "#1e56a0",
    background:  "#f5feff",
  }
}

const ThemeContext = React.createContext(null)

export default ThemeContext