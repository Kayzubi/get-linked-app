import React from 'react'
import manAndWoman from '../assets/man and woman talking.png'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '../assets'
import { useNavigate } from 'react-router-dom'

const Attributes = () => {
  const navigate = useNavigate()
  return (
    <AnimatePresence>
      <section className=' min-h-screen py-20 flex items-center px-5 border-b border-b-white-10 relative overflow-hidden'>
        <img
          src={images.flare}
          alt=''
          className=' absolute  bottom-[-20%] right-[-30%] opacity-[0.25]'
        />
        <div className=' max-w-7xl h-full mx-auto lg:grid grid-cols-2 w-full'>
          <div className=' relative flex items-center'>
            <img
              src={images.flare}
              alt=''
              className=' absolute bottom-[-100px] left-0 opacity-[0.25]'
            />
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              src={manAndWoman}
              alt=''
            />
          </div>
          <div className=' pt-5 flex flex-col justify-center gap-9  text-white-100 text-center lg:text-left'>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className='text-2xl lg:text-4xl font-bold font-clash'>
              Judging Criteria <br />{' '}
              <span className=' text-secondary-500'> Key attributes</span>{' '}
            </motion.h1>
            <motion.div
              className=' leading-8 flex flex-col gap-5'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}>
              <p>
                <span className=' text-tertiary-500 font-bold'>
                  Innovation and Creativity:{' '}
                </span>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p>
                <span className=' text-tertiary-500 font-bold'>
                  Functionality:{' '}
                </span>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
              <p>
                <span className=' text-tertiary-500 font-bold'>
                  Impact and Relevance:{' '}
                </span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p>
                <span className=' text-tertiary-500 font-bold'>
                  Technical Complexity:{' '}
                </span>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p>
                <span className=' text-tertiary-500 font-bold'>
                  Adherence to Hackathon Rules:{' '}
                </span>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                onClick={() => navigate('/register')}
                className=' mx-auto lg:mx-0 bg-gradient-to-r from-tertiary-500  to-primary-500 via-secondary-500 py-2 md:py-2 px-2 rounded-sm outline-none w-28 text-white-100 text-lg '>
                Register
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Attributes
