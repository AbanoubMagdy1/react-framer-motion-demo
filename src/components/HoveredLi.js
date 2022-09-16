import React from 'react'
import { motion } from 'framer-motion'

export default function HoveredLi(props) {
  return (
    <motion.li 
    {...props} 
    whileHover={{color: "#eb9b34", x: -5, scale: 1.3}}
    transition={{duration: .3, type: "spring", stiffness: 200}}
    >
        {props.children}
    </motion.li>
  )
}
