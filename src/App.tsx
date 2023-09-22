import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import RulesAndGudelines from './components/RulesAndGuidelines'
import Attributes from './components/Attributes'
import FAQs from './components/FAQs'

function App() {
  return (
    <BrowserRouter>
      <div className='font-montserrat bg-background-950 text-sm'>
        <Header />
        <IntroSection />
        <RulesAndGudelines />
        <Attributes />
        <FAQs />
      </div>
    </BrowserRouter>
  )
}

export default App
