import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../providers/PizzaProvider';
import AnimatedNextButton from './AnimatedNextButton';
import HoveredLi from './HoveredLi';
import RouteAnimated from './RouteAnimated';

const Base = () => {
  const {pizza, addBase} = useContext(PizzaContext);

  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <RouteAnimated>
    <div className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <HoveredLi key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </HoveredLi>
          )
        })}
      </ul>

      {pizza.base && (
        <AnimatedNextButton path="/toppings"/>
      )}

    </div>
    </RouteAnimated>
  )
}

export default Base;