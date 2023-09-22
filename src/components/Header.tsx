import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { images } from '../assets'

export const calculateTimeRemaining = (endTime: number) => {
  const total = Math.max(0, endTime)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((total % (1000 * 60)) / 1000)
  return { total, days, hours, minutes, seconds }
}

interface RemainingTimeType {
  [key: string]: number
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Header = () => {
  const [isTyping, setisTyping] = useState(true)

  const targetDate = new Date('2023-09-26T00:00:00').getTime()
  const [timeRemaining, setTimeRemaining] = useState<RemainingTimeType>(
    calculateTimeRemaining(targetDate)
  )

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime()
      const timeRemaining = calculateTimeRemaining(targetDate - currentTime)
      setTimeRemaining(timeRemaining)

      if (timeRemaining.total <= 0) {
        clearInterval(timerInterval)
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate])

  return (
    <header className='h-screen flex flex-col px-5  overflow-hidden'>
      <Navbar />
      <div className=' mx-auto pt-10 flex-auto flex flex-col relative'>
        <div className=' flex justify-center md:justify-end '>
          {isTyping ? (
            <TypeAnimation
              sequence={[
                'Igniting a Revolution in HR Innovation',
                () => setisTyping(false),
              ]}
              cursor={false}
              className=' text-lg md:text-2xl text-white-100 font-bold italic'
            />
          ) : (
            <h1 className=' text-lg text-center md:text-2xl text-white-100 font-bold italic'>
              Igniting a Revolution in{' '}
              <span className=' relative'>
                HR Innovation{' '}
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={images.mark}
                  className=' absolute right-0 bottom-[-15px]'
                  alt=''
                />
              </span>
            </h1>
          )}
        </div>
        <div className=' md:grid grid-cols-2 flex-auto'>
          <div className=' text-center md:text-left h-1/2 pt-10 md:h-full md:pt-20 z-20'>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className=' text-white-100 font-clash w-max relative mx-auto md:mx-0 font-extrabold text-4xl md:text-6xl mb-4'>
              <img
                src={images.creative}
                alt=''
                className=' w-6 md:w-9 absolute top-[-30px] right-[75px]  md:top-[-40px] md:right-[145px]'
              />
              getlinked Tech <br />
              Hackathon <span className=' text-secondary-500'> 1.0</span>
              <img
                className=' inline w-9 md:w-12'
                src={images.chain}
                alt=''
              />{' '}
              <img className=' inline w-9 md:w-12' src={images.blast} alt='' />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className=' text-white-100 text-lg mb-8 md:w-2/3 '>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              className='  bg-gradient-to-r from-secondary-500 to-primary-500 py-2 md:py-5 px-5 rounded-sm outline-none w-52 text-white-100 text-lg '>
              Register
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              className=' flex justify-center items-center gap-6 mt-10 md:mt-20 md:justify-start'>
              <h2 className=' font-unica text-4xl md:text-5xl text-white-100'>
                {timeRemaining.days >= 10
                  ? timeRemaining.days
                  : `0${timeRemaining.days}`}
                <span className=' text-sm'>D</span>
              </h2>
              <h2 className=' font-unica text-4xl md:text-5xl text-white-100'>
                {timeRemaining.hours >= 10
                  ? timeRemaining.hours
                  : `0${timeRemaining.hours}`}
                <span className=' text-sm'>H</span>
              </h2>
              <h2 className=' font-unica text-4xl md:text-5xl text-white-100'>
                {timeRemaining.minutes >= 10
                  ? timeRemaining.minutes
                  : `0${timeRemaining.minutes}`}{' '}
                <span className=' text-sm'>M</span>
              </h2>{' '}
              <h2 className=' font-unica text-4xl md:text-5xl text-white-100'>
                {timeRemaining.seconds >= 10
                  ? timeRemaining.seconds
                  : `0${timeRemaining.seconds}`}{' '}
                <span className=' text-sm'>S</span>
              </h2>
            </motion.div>
          </div>
          <img
            src={images.flare}
            alt=''
            className=' absolute top-[-100px] left-[-50px] opacity-[0.45]'
          />
          <img
            src={images.flare}
            alt=''
            className=' absolute hidden md:block bottom-0 right-[-200px] z-10 bg-blend-hard-light opacity-[0.45]'
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 3 }}
            className='  h-1/2 pt-5 md:h-full md:pt-16 relative'>
            <div className=' absolute bottom-0 right-0 h-full w-full'>
              <img
                src={images.man}
                alt=''
                className=' absolute bottom-0 right-0 h-full w-full object-contain grayscale'
              />
              <img
                src={images.matric}
                alt=''
                className=' absolute right-0 bottom-0  h-full w-full object-contain'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Header
