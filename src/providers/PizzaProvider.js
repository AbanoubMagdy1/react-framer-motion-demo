import React, { createContext } from 'react'
import { useState } from 'react';

export const PizzaContext = createContext({})

export default function PizzaProvider({children}) {
    const [pizza, setPizza] = useState({ base: "", toppings: [] });

    function addBase (base) {
        setPizza({ ...pizza, base })
    }

    function addTopping (topping) {
        setPizza(
            { ...pizza,
                toppings: pizza.toppings.includes(topping) ?
            pizza.toppings.filter(item => item !== topping) :
            [...pizza.toppings, topping]}
        );
    }
  
    return (
        <PizzaContext.Provider value={{ pizza, addBase, addTopping }}>
            {children}
        </PizzaContext.Provider>
    )
}
