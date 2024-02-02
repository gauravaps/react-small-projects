import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useSelector,useDispatch } from 'react-redux';
import { addToCart } from './CartSlice3';



const Home3 = () => {
  const [product,setproduct]=useState([])
  const [loading,setloading]=useState(true)
  const dispatch=useDispatch()
  
  const count=useSelector((state)=>state.cart)
  console.log(count);

  useEffect(()=>{
    const fetchproduct=async()=>{
      try {
        const response=await axios.get('https://fakestoreapi.com/products')
        
        setproduct(response.data)
      
        setloading(false) 


      } catch (error) {
        console.log('Error fetching product',error);
        
      }
    
    }
    fetchproduct()

  },[])

  const handelcart=(items)=>{
    dispatch(addToCart(items))

  }

  return (
    <div>
      {loading?<p>please wait loading...</p>:product.map((items)=>{
        return(<>
        <div className='card'> 
        <img src={items.image} alt="img" />
        <h4>{items.title}</h4>
        <h5>{items.price}</h5>
        <button className='btn' onClick={()=>handelcart(items)}>Add To cart</button>

        </div>
        
        </>)
      })}
    </div>
  )
}

export default Home3 ;