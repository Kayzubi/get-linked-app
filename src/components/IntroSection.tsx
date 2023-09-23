import React from 'react'
import lightBuld from '../assets/The big idea.png'
import { motion, AnimatePresence } from 'framer-motion'

const IntroSection = () => {
  return (
    <AnimatePresence>
      <section className=' min-h-[500px] py-20 flex items-center px-5 border-b border-b-white-10'>
        <div className=' max-w-7xl h-full mx-auto lg:grid grid-cols-2 w-full'>
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={lightBuld}
              alt=''
            />
          </div>
          <div className=' pt-5 flex flex-col justify-center gap-9  text-white-100 text-center lg:text-left'>
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='text-2xl lg:text-4xl font-bold font-clash'>
              Introduction to getlinked <br />{' '}
              <span className=' text-secondary-500'>stechHackathon 1.0</span>{' '}
            </motion.h1>
            <motion.p
              className=' leading-8'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </motion.p>
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default IntroSection
