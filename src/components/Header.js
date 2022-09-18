import React from 'react';
import { motion } from 'framer-motion';

const logoVariant = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1, 
    transition: {
      delay: .5,
      when: 'beforeChildren',
      staggerChildren: 1,
    }
  }
}

const pathVariant = {
  hidden: {pathLength: 0},
  visible: {pathLength: 1, transition: {duration: 1, ease: "easeOut"}}
}

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg 
          className="pizza-svg" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100"
          variants={logoVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            variants={pathVariant}
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            fill="none"
            variants={pathVariant}
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div className="title" 
        initial={{y: -200}}
        animate={{y: 0}}
        transition={{type: "spring", stiffness: 90}}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;