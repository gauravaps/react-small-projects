import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const CartSlice3 = createSlice({
  name:'add to cart',
  initialState:[],
  reducers:{
    addToCart:(state,action)=>{
      // state.push(action.payload)
      return [...state, action.payload];

    },
    removeItem:(state,action)=>{
     return state.filter((item)=>{
     return item.id!==action.payload
     })
    }
  }
}) 
 

export default CartSlice3.reducer
export const{addToCart,removeItem}=CartSlice3.actions