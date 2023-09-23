import React from 'react'
import prizes from '../assets/Rewards.png'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '../assets'
import cup from '../assets/cup.png'

const Prizes = () => {
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
          <div className=' pt-5 flex flex-col justify-center gap-9   text-center lg:text-left'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={cup}
              alt=''
            />
          </div>
          <div className=' text-white-100 pt-10'>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='text-2xl lg:text-4xl font-bold font-clash mb-5'>
              Prizes and <br />{' '}
              <span className=' text-secondary-500'>Rewards</span>{' '}
            </motion.h1>
            <motion.p
              className=' leading-8 mb-20'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}>
              Highlight of the prizes or rewards for winners and <br /> for
              participants.
            </motion.p>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={prizes}
              alt=''
            />
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Prizes
