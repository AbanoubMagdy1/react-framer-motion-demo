import React from 'react';
import { Link } from 'react-router-dom';
import HoveredLi from './HoveredLi';
import RouteAnimated from './RouteAnimated';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <RouteAnimated id="base">
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
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}

    </div>
    </RouteAnimated>
  )
}

export default Base;