import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/base" element={
            <Base />
          }/>
          <Route path="/toppings" element={
            <Toppings />
          }/>
          <Route path="/order" element={
            <Order />
          }/>

          <Route path="/" element={
            <Home />
          }/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;