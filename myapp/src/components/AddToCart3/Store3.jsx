import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import CartSlice3 from './CartSlice3';

const Store3 =configureStore({
  reducer:{
    cart:CartSlice3
    
  }
}) 

export default Store3;