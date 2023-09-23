import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false)

  return (
    <div className=' py-6 border-b border-b-white-10 z-50 absolute left-0 w-full top-0 bg-background-950'>
      <div className=' max-w-7xl px-5 mx-auto flex justify-between items-center text-white-100 '>
        <h1 className=' text-2xl font-bold font-clash'>
          get <span className=' text-secondary-500'>Linked</span>
        </h1>
        <ul className=' hidden md:flex items-center gap-10 text-sm'>
          <li>
            <Link to='#'>Timeline</Link>
          </li>
          <li>
            <Link to='#'>Overview</Link>
          </li>
          <li>
            <Link to='#'>FAQs</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
        <button
          type='button'
          className=' hidden md:block bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2 text-white px-5 rounded-sm outline-none '>
          Register
        </button>
        <button
          className=' p-4 rounded-sm outline-none bg-transparent md:hidden'
          onClick={() => setnavOpen(true)}>
          <img src={hamburger} alt='' />
        </button>
      </div>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.2 }}
            className=' h-screen bg-background-950 w-screen fixed flex flex-col justify-center items-start gap-10 left-0 top-0 px-10  text-white-100 md:hidden'>
            <button
              onClick={() => setnavOpen(false)}
              className=' w-9 h-9 p-0 flex items-center justify-center absolute top-10 right-10 rounded-full bg-gradient-to-t from-primary-500 to-secondary-500'>
              <span className=' w-full h-full bg-background-950 rounded-full flex justify-center items-center'>
                <img src={close} alt='' />
              </span>
            </button>
            <ul className=' flex flex-col gap-10 text-2xl w-full'>
              <li>
                <Link to='#'>Timeline</Link>
              </li>
              <li>
                <Link to='#'>Overview</Link>
              </li>
              <li>
                <Link to='#'>FAQs</Link>
              </li>
              <li>
                <Link to='#'>Contact</Link>
              </li>
            </ul>
            <button
              type='button'
              className=' bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-5 text-white px-5 rounded-sm outline-none w-52  '>
              Register
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
