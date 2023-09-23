import React from 'react'
import Header from '../components/Header'
import IntroSection from '../components/IntroSection'
import RulesAndGudelines from '../components/RulesAndGuidelines'
import Attributes from '../components/Attributes'
import FAQs from '../components/FAQs'
import Timeline from '../components/Timeline'
import Prizes from '../components/Prizes'
import Sponsors from '../components/Sponsors'
import Privacy from '../components/Privacy'

const Home = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <RulesAndGudelines />
      <Attributes />
      <FAQs />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
    </>
  )
}

export default Home
