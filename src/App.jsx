import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Start from './components/start'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
           <Route element={<Home/>} path="/"></Route>
           <Route element={<Start/>} path='/start'></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
