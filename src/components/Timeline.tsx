import React from 'react'
import thinking from '../assets/man thinking.png'
import { motion, AnimatePresence } from 'framer-motion'
import Accordian from './MainComponents/Accordian'
import { questions, timeline } from '../data'
import TimellineItem from './TimellineItem'

const Timeline = () => {
  return (
    <AnimatePresence>
      <section className=' min-h-screen py-20 flex items-center flex-col justify-start px-5 border-b border-b-white-10  overflow-hidden  text-white-100'>
        <div className=' max-w-7xl h-full mx-auto w-full '>
          <h1 className=' font-bold text-2xl mb-5 font-clash text-center'>
            Timeline
          </h1>
          <p className=' mb-20 mx-auto lg:text-lg leading-8 text-center '>
            Here is the breakdown of the time we anticipate <br /> using for the
            upcoming event.
          </p>
          {timeline.map((item) => (
            <TimellineItem data={item} key={item.index} />
          ))}
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Timeline
