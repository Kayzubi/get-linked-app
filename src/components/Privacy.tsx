import React from 'react'
import privacy from '../assets/privacy man.png'
import { motion, AnimatePresence } from 'framer-motion'
import tick from '../assets/list terms.svg'
import { images } from '../assets'
import icon from '../assets/privacy icon.svg'

const Privacy = () => {
  return (
    <AnimatePresence>
      <section
        id='policy'
        className=' min-h-screen py-20 flex items-center px-5 border-b border-b-white-10  overflow-hidden'>
        <div className=' max-w-7xl h-full mx-auto lg:grid grid-cols-2 w-full gap-10 '>
          <div className=' pt-5 flex flex-col justify-start gap-9  text-white-100 text-center lg:text-left relative'>
            <img
              src={images.flare}
              alt=''
              className=' absolute bottom-0 left-[-50px] lg:bottom-[-250px] lg:left-[-200px] opacity-[0.25] z-10'
            />
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className='text-2xl lg:text-4xl font-bold font-clash z-20'>
              Privacy Policy and <br />{' '}
              <span className=' text-secondary-500'>Terms</span>{' '}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className=' z-20'>
              Last updated on September 12, 2023
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className=' z-20'>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className=' border border-secondary-500 py-20 mb-10 px-5 z-20'>
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <ul className=' flex flex-col gap-5 mt-10 text-left mb-14 '>
                <h3 className=' font-bold text-secondary-500'>
                  Licensing Policy
                </h3>
                <li className=' flex items-start gap-2 '>
                  <span className=' w-[30px] pt-2'>
                    <img src={tick} alt='' />
                  </span>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </li>
                <li className=' flex items-start gap-2 '>
                  <span className=' w-[30px] pt-2'>
                    <img src={tick} alt='' />
                  </span>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className=' mx-auto flex bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2  px-5 rounded-sm outline-none w-36 text-white-100 text-lg '>
                Read more
              </motion.button>
            </motion.div>
          </div>
          <div className=' flex items-end pt-10 relative'>
            <img
              src={icon}
              alt=''
              className=' absolute min-h-[50%] w-2/3 top-0 left-1/2 translate-x-[-50%]'
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={privacy}
              alt=''
            />
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Privacy
