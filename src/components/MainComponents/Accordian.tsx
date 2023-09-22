import React, { ReactNode, FC, useState } from 'react'
import useOnClickOut from '../../hooks/useOnClickOut'
import { motion, AnimatePresence } from 'framer-motion'
import { images } from '../../assets'

interface Props {
  text: string
  openComponent: ReactNode
}

const Accordian: FC<Props> = ({ text, openComponent }) => {
  const [open, setopen] = useState<boolean>(false)

  const accrodianRef = useOnClickOut(() => setopen(false))

  return (
    <div
      ref={accrodianRef}
      onClick={() => setopen(!open)}
      className=' border-b border-b-primary-500 py-2 text-left cursor-pointer'>
      <p className=' flex justify-between items-center'>
        {text}{' '}
        <motion.img src={images.plus} animate={{ rotate: open ? 45 : 0 }} />
      </p>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}>
            {openComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordian
