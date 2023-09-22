import React from 'react'
import thinking from '../assets/man thinking.png'
import { motion, AnimatePresence } from 'framer-motion'
import Accordian from './Accordian'
import { questions } from '../data'

const FAQs = () => {
  return (
    <AnimatePresence>
      <section className=' min-h-screen py-20 flex items-center px-5 border-b border-b-white-10  overflow-hidden'>
        <div className=' max-w-7xl h-full mx-auto lg:grid grid-cols-2 w-full'>
          <div className=' pt-5 flex flex-col justify-center gap-9  text-white-100 text-center lg:text-left'>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className='text-2xl lg:text-4xl font-bold font-clash'>
              Freaquently Asked <br />{' '}
              <span className=' text-secondary-500'>Questions</span>{' '}
            </motion.h1>
            <motion.div
              className=' leading-8 flex flex-col gap-5'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}>
              {questions.map((item, index) => (
                <Accordian
                  key={index}
                  text={item.question}
                  openComponent={
                    <p className=' text-white-20 px-2 py-3'>{item.answer}</p>
                  }
                />
              ))}
            </motion.div>
          </div>
          <div className=' flex items-center pt-10'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              src={thinking}
              alt=''
            />
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default FAQs
