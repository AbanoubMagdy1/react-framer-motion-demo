import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../providers/PizzaProvider';
import AnimatedNextButton from './AnimatedNextButton';
import HoveredLi from './HoveredLi';
import RouteAnimated from './RouteAnimated';

const Toppings = () => {
  const {pizza, addTopping} = useContext(PizzaContext);

  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <RouteAnimated>
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

          {pizza.toppings.length > 0 && (
            <AnimatedNextButton path="/order" text="Order"/>
          )}

      </div>
    </RouteAnimated>
  )
}

export default Toppings;