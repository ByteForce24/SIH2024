import { useState } from 'react'
import './App.css'
import LoginPage from './Pages/UserPages/LoginPage'
import Navbar from './Components/UserComponent/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <LoginPage/>
    </>
  )
}

export default App
