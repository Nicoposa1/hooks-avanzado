import React from 'react'
import { Head } from '../Styles/Header'

const Header = (props) => {
  let bt = props.darkMode ? "btn-dark" : "btn-light"
  return(
    <Head>
      <h1>React Hooks</h1>
      <button type="button" onClick={props.onHandleClick} className={bt}>
        {
          props.darkMode 
          ? 'Dark Mode' 
          : 'Light Mode'
        }
      </button>
    </Head>
  )
}

export default Header;
