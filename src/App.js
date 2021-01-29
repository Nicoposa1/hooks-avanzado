import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  let bt = darkMode ? "btn-dark" : "btn-light"
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  return (
    <div className={"App" + bg}>
      <div className={darkMode ? "Light" : "Dark"} >
        <Header onHandleClick={handleClick} darkMode={darkMode} className={bt} />
        <Characters />
      </div>
    </div>
  );
}

export default App;
