import React from 'react'
import { Head } from '../Styles/Header'

const Header = (props) => {
  let bt = props.darkMode ? "btn-light" : "btn-dark"
  return(
    <Head>
      <h1>React Hooks</h1>
      <button type="button" onClick={props.onHandleClick} className={bt}>
        {
          props.darkMode 
          ? 'Light Mode' 
          : 'Dark Mode'
        }
        </button>
    </Head>
  )
}

export default Header;
