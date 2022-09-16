import React from 'react';
import { Link } from 'react-router-dom';
import HoveredLi from './HoveredLi';
import RouteAnimated from './RouteAnimated';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <RouteAnimated id="toppings">
      <div className="toppings container">
        
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map(topping => {
            let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
            return (
              <HoveredLi key={topping} onClick={() => addTopping(topping)}>
                <span className={spanClass}>{ topping }</span>
              </HoveredLi>
            )
          })}
        </ul>

        <Link to="/order">
          <button>
            Order
          </button>
        </Link>

      </div>
    </RouteAnimated>
  )
}

export default Toppings;