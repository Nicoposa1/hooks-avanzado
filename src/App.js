import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  let bt = darkMode ? "btn-light" : "btn-dark"
  return (
    <div className={"App "+ bg}>
      <Header onHandleClick={handleClick} darkMode={darkMode} className={bt} />
      <Characters />
    </div>
  );
}

export default App;
