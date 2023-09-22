import React from 'react'
import Header from '../components/Header'
import IntroSection from '../components/IntroSection'
import RulesAndGudelines from '../components/RulesAndGuidelines'
import Attributes from '../components/Attributes'
import FAQs from '../components/FAQs'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <RulesAndGudelines />
      <Attributes />
      <FAQs />
      <Timeline />
    </>
  )
}

export default Home
