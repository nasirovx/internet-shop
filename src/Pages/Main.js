import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Card from "./Card";
import Products from "../Components/Products/Products";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Card/>} />
        <Route path='/product/:product' element={<Products/>} />
      </Routes>
    </div>
  )
}

export default Main
