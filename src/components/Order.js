import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../providers/PizzaProvider';
import RouteAnimated from './RouteAnimated';
import { motion } from 'framer-motion';

const elementVariants = {hidden: {opacity: 0}, visible: {opacity: 1}}

const Order = () => {
  const { pizza } = useContext(PizzaContext);


  return (
    <RouteAnimated>
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <motion.p variants={elementVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={elementVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </div>
    </RouteAnimated>
  )
}

export default Order;