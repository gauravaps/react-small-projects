import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { removetocart } from './CartSlice2'


const Cart = () => {
  const cartItems=useSelector((state)=>state.cart)
  const dispatch=useDispatch() 

  const removeItem=(items)=>{
    dispatch(removetocart(items))
  }
  
  return (
    <div>
      {cartItems.map((items)=>{
        return(
          
          <div className='productsWrapper' > 
          <div className='card' key={items.id}>
                    <img src={items.image} alt="img" />
                    <h4>{items.title}</h4>
                    <h5>{items.price}</h5>
                    <button className='btn' onClick={()=>removeItem(items.id)}>remove Item</button>
                    </div>
                     </div>
          
        )
      })}
    </div>
  )
}

export default Cart