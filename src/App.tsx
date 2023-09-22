import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/MainComponents/Navbar'
import Home from './views/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='font-montserrat bg-background-950 text-sm'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<h1>Contact us</h1>} />
          <Route path='/register' element={<h1>Sign Up</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
