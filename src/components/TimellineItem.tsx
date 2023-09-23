import React, { FC } from 'react'
import { Timeline } from '../data'
import { motion, AnimatePresence } from 'framer-motion'

interface Prop {
  data: Timeline
}

const TimellineItem: FC<Prop> = ({ data }) => {
  const { index, sub, title, date } = data
  return (
    <AnimatePresence>
      <div className=' relative flex justify-end flex-col lg:grid grid-cols-2 h-[150px] lg:gap-28 ps-10 lg:ps-0 mb-5'>
        <div
          className={`${
            index % 2 === 0 ? ' lg:text-left' : ' lg:text-right'
          } flex flex-col justify-end gap-2 text-left`}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=' text-secondary-500 font-bold lg:text-lg'>
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}>
            {sub}
          </motion.p>
        </div>
        <span className=' absolute left-2 lg:left-1/2 bottom-0 h-full w-[2px] bg-secondary-500'></span>
        <span className=' absolute left-2  lg:left-1/2 ml-[-17px] flex items-center justify-center font-bold bottom-0 w-[35px] h-[35px] rounded-full bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500'>
          {index}
        </span>
        <div
          className={`${
            index % 2 === 0
              ? ' lg:order-first lg:text-right'
              : 'lg:order-last lg:text-left'
          } flex flex-col justify-end gap-2`}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=' text-secondary-500 font-bold lg:text-lg'>
            {date}
          </motion.h1>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TimellineItem
