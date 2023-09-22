import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <div className='font-montserrat bg-background-950'>
        <Header />
      </div>
    </BrowserRouter>
  )
}

export default App
