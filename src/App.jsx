import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(100)

  function handleClick(){
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <h1>Ini mirip siapa ya ?</h1>
     <img src="https://upload.wikimedia.org/wikipedia/en/f/fe/Glenn_Quagmire.png" alt="Glenn Quagmire" />
    </>
  )
}

export default App
