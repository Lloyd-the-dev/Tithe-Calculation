import './App.css'
import Home from './components/home'
import Start from './components/start'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route element={<Home/>} path="/home"></Route>
           <Route element={<Start/>} path='/start'></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
