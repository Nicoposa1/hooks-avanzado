import React, {useContext} from 'react'
import { Head } from '../Styles/Header'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  let bt = darkMode ? "btn-dark" : "btn-light"
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  return(
    <Head>
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick} className={bt}>
        {
          darkMode 
          ? 'Dark Mode' 
          : 'Light Mode'
        }
        </button>
    </Head>
  )
}

export default Header;
