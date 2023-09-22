import React from 'react'
import woman from '../assets/woman sitting.png'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '../assets'

const RulesAndGudelines = () => {
  return (
    <AnimatePresence>
      <section className=' min-h-[500px] py-20 flex items-center px-5 border-b border-b-white-10 relative overflow-hidden'>
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
        <div className=' max-w-7xl h-full mx-auto lg:grid grid-cols-2 w-full'>
          <div className=' pt-5 flex flex-col justify-center gap-9  text-white-100 text-center lg:text-left'>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className='text-2xl lg:text-4xl font-bold font-clash'>
              Rules and <br />{' '}
              <span className=' text-secondary-500'>Guidelines</span>{' '}
            </motion.h1>
            <motion.p
              className=' leading-8'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </motion.p>
          </div>
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              src={woman}
              alt=''
            />
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default RulesAndGudelines
