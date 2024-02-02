import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { removeItem } from './CartSlice3';

const Cart3 = () => {
  const cartItems=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const removerfromCart=(items)=>{
    dispatch(removeItem(items))
  }
  
  return (
    <div>
      {
        cartItems.map((items)=>{
          return(<>
          <div className='cart'> 
          
         
        <img src={items.image} alt="img" />
        <h4>{items.title}</h4>
        <h5>{items.price}</h5>
        <button onClick={()=>removerfromCart(items.id)} className='btn'>remove item</button>
        </div>
          
          </>)

        })
      }



      </div>
  )
}

export default Cart3;