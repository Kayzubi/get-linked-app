import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/MainComponents/Navbar'
import Home from './views/Home'
import Footer from './components/MainComponents/Footer'
import Contact from './views/Contact'
import Register from './views/Register'

function App() {
  return (
    <BrowserRouter>
      <div className='font-montserrat bg-background-950 text-sm'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
