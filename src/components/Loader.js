import React, { useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'

const loaderAnimations = {
    animationOne: {
        x: [0, 50],
        y: [0, -40],
        transition: {
            x: {yoyo: Infinity, duration: .5, ease: 'linear'},
            y: {yoyo: Infinity, duration: .25, ease: 'linear'}
        }
    },
    animationTwo: {
        x: 0,
        y: [0, 30],
        transition: {
            y: {yoyo: Infinity, duration: .25, ease: 'easeOut'}
        }
    }
}


export default function Loader() {
  const [animation, cycle] = useCycle('animationOne', 'animationTwo')

    useEffect(() => {
        let timeId = setInterval(cycle, 2000)
        return () => clearInterval(timeId)
    }, [cycle])

  return (
    <motion.div 
        className='loader'
        variants={loaderAnimations}
        animate={animation}
    ></motion.div>
  )
}
