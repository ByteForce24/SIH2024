import { useState } from 'react'
import './App.css'
import Navbar from './Components/UserComponent/Navbar'
import Sidebar from './Components/UserComponent/Sidebar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from './Pages/UserPages/LoginPage'
import Home from './Pages/UserPages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>
    <LoginPage/> */}
    <Router>
      <Routes>
        <Route path="/login"  element={<LoginPage />}/>
        <Route path="/home"  element={<Home />}/>
        <Route path="/admin/login"  element={<LoginPage />}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
