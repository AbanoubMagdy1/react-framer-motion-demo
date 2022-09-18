import { motion } from 'framer-motion'
import React from 'react'

const variant = {
  hidden: {x: '100vw', opacity: 0} ,
  visible: {
    x: 0, 
    opacity: 1,
    transition: {
      duration: .5,
      type: 'spring',
      stiffness: 40,
      mass: .3,
      damping: 7,
      when: "beforeChildren",
      staggerChildren: .5
    },
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: {duration: .5}
  }
}

export default function RouteAnimated({children}) {
  return (
        <motion.div  
            variants={variant}
            animate="visible"
            initial="hidden"
            exit="exit"
        >
            {children}
        </motion.div>
  )
}
