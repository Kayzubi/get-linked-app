import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

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
    <header className=' pt-20 mx-auto min-h-screen flex flex-col px-5 md:px-20 overflow-x-hidden'>
      <div className='  max-w-7xl mx-auto pt-10 flex-auto flex flex-col relative'>
        <div className=' flex justify-center md:justify-end '>
          {isTyping ? (
            <TypeAnimation
              sequence={[
                'Igniting a Revolution in HR Innovation',
                () => setisTyping(false),
              ]}
              cursor={false}
              className=' text-center md:text-2xl text-white-100 font-bold italic'
            />
          ) : (
            <h1 className=' text-center md:text-2xl text-white-100 font-bold italic'>
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
        <div className=' lg:grid grid-cols-2 flex-auto'>
          <div className=' text-center md:text-left h-1/2 pt-10 md:h-full md:pt-28 z-20'>
            <div className=' relative'>
              <span className='star after:bg-white-100 before:bg-white-100 top-[-15px] lg:top-[-40px] left-[50px] duration-100'></span>
              <span className='star-sm after:bg-white-10 before:bg-white-10 top-[-20px] right-[50px]'></span>
              <span className='star-sm after:bg-white-10 before:bg-white-10 bottom-20 right-10 lg:right-[200px]'></span>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className=' text-white-100 font-clash w-max relative mx-auto md:mx-0 font-extrabold text-4xl md:text-6xl mb-4 lg:text-7xl'>
                <img
                  src={images.creative}
                  alt=''
                  className=' w-4 md:w-9 absolute top-[-10px] right-[75px]  md:top-[-40px] md:right-[145px] lg:right-[180px]'
                />
                getlinked Tech <br />
                Hackathon <span className=' text-secondary-500'> 1.0</span>
                <img
                  className=' inline w-9 md:w-12 lg:w-14'
                  src={images.chain}
                  alt=''
                />{' '}
                <img
                  className=' inline w-9 md:w-12 lg:w-14'
                  src={images.blast}
                  alt=''
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=' text-white-100 md:text-lg mb-8 md:w-2/3 '>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => navigate('/register')}
                transition={{ delay: 0.5 }}
                className='  bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2 md:py-5 px-5 rounded-sm outline-none w-40 text-white-100 text-lg '>
                Register
              </motion.button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
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
          </div>
          <img
            src={images.flare}
            alt=''
            className=' absolute top-[-50px] lg:top-[-250px] left-[-50px] lg:left-[-150px] opacity-[0.35]'
          />
          <img
            src={images.flare}
            alt=''
            className=' absolute hidden md:block bottom-0 right-[-200px] z-10 bg-blend-hard-light opacity-[0.35]'
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='  h-1/2 pt-5 md:h-full md:pt-16'>
            <div className=' h-1/2 pt-5 md:h-full md:pt-16'>
              <img
                src={images.man}
                alt=''
                className=' lg:absolute bottom-0 right-0 object-contain grayscale'
              />
              <img
                src={images.matric}
                alt=''
                className=' absolute right-0 bottom-0 object-contain'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Header
