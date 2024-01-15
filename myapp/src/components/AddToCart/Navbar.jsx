import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import './Index.css'

const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontWeight:"bolder"}}>Redux - toolKit</span>
        
        <div>
            <Link style={{fontWeight:"bolder"}} className='navLink' to={"/"}>Home</Link>
            <Link style={{marginRight:"7px",fontWeight:"bolder"}} className='navLink' to={'/cart'}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>Items:{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar