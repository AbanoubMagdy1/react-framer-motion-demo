import React from 'react';
import RouteAnimated from './RouteAnimated';

const Order = ({ pizza }) => {
  return (
    <RouteAnimated>
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
    </RouteAnimated>
  )
}

export default Order;