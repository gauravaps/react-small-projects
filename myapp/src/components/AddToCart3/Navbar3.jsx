import React from 'react'
import { Link } from 'react-router-dom'
import './index3.css'
import { UseSelector, useSelector } from 'react-redux'


const Navbar3 = () => {
  const item=useSelector((state)=>state.cart)
  return (
    <div>
        <h1>this is redux toolkit..!</h1>
        <div>
            <Link to={'/'} style={{fontWeight:"bolder"}} className='navLink'>Home</Link>
            <Link to={'/cart'} style={{fontWeight:"bolder"}}  className='navLink'>Cart</Link>
            <span> item:{item.length} </span>
        </div>


    </div>
  )
}

export default Navbar3