import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const containerVariants = {
    hidden: {x: '-100vw'},
    visible: {x: 0, transition: {type: 'spring', stiffness: 40}},
}

export default function AnimatedNextButton({path, text = "Next"}) {
  return (
    <motion.div 
        className="next"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <Link to={path}>
            <motion.button
                whileHover={{scale: 1.1, boxShadow: '0px 0px 8px rgb(255,255,255)'}}
            >
                {text}
            </motion.button>
        </Link>
    </motion.div>  )
}
