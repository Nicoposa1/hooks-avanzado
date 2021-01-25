import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'
import ThemeContext from './context/ThemeContext'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  let bt = darkMode ? "btn-dark" : "btn-light"
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <div className={darkMode ? "Light" : "Dark"} >
        <Header className={bt}/>
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
