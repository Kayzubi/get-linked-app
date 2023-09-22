import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '../assets'
import partners from '../assets/Partner and Sponsors.png'

const Sponsors = () => {
  return (
    <AnimatePresence>
      <section className=' lg:min-h-screen py-20 flex items-center flex-col text-white-100 px-5 border-b border-b-white-10 relative overflow-hidden'>
        <img
          src={images.flare}
          alt=''
          className=' absolute top-[-50px] left-0 opacity-[0.25]'
        />
        <img
          src={images.flare}
          alt=''
          className=' absolute hidden md:block bottom-[-20%] right-[-30%] opacity-[0.25]'
        />
        <h1 className=' font-bold text-2xl mb-5 font-clash text-center'>
          Partners and Sponsors
        </h1>
        <p className=' mb-20 mx-auto lg:text-lg leading-8 text-center '>
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
        <div className=' max-w-7xl h-full py-20 px-5 mx-auto flex justify-center items-center border border-secondary-500 w-full'>
          <img src={partners} alt='' />
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Sponsors