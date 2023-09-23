import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'

const navLinks = [
  {
    name: 'Timeline',
    route: 'timeline',
  },
  {
    name: 'Overview',
    route: 'overview',
  },
  {
    name: 'FAQs',
    route: 'faqs',
  },
  {
    name: 'Contact',
    route: 'contact',
  },
]

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false)

  return (
    <div className=' py-6 border-b border-b-white-10 z-50 absolute left-0 w-full top-0 bg-background-950'>
      <div className=' max-w-7xl px-5 mx-auto flex justify-between items-center text-white-100 '>
        <Link to='/'>
          <h1 className=' text-2xl font-bold font-clash'>
            get <span className=' text-secondary-500'>Linked</span>
          </h1>
        </Link>
        <ul className=' hidden md:flex items-center gap-10 font-semibold'>
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? ' bg-clip-text text-transparent bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 font-semibold'
                    : ''
                }
                to={item.route}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to='/register'
          type='button'
          className=' hidden md:block bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2 text-white px-5 rounded-sm outline-none '>
          Register
        </Link>
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
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    onClick={() => setnavOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? ' bg-clip-text text-transparent bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 font-semibold'
                        : ''
                    }
                    to={item.route}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to='/register'
              type='button'
              onClick={() => setnavOpen(false)}
              className=' bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-5 text-white text-center px-5 rounded-sm outline-none w-32  '>
              Register
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
