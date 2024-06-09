import { useState } from 'react'
import Navbar from './components/Navbar'
import Sign from './components/Sign'
import { Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title="SignIn"/>
      <Sign/>
    </>
  )
}

export default App
