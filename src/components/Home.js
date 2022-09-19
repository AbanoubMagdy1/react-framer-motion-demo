import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RouteAnimated from './RouteAnimated';
import Loader from './Loader';

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {yoyo: Infinity, duration: .4}
  }
}

const Home = () => {
  return (
    <RouteAnimated>
      <div className="home container">
        <motion.h2 animate={{}}>
          Welcome to Pizza Joint
        </motion.h2>
        <Link to="/base">
          <motion.button variants={buttonVariant} whileHover="hover">
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader/>
      </div>
    </RouteAnimated>
    
  )
}

export default Home;