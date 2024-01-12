import React, { useEffect, useState } from 'react'
import './index.css'
//let rs=style={{background:isdark?'#000':'#fff',color:isdark?'#fff':'#000',docum}} 

const LIght_dark_theme = () => {
    const[isdark,setIsdark]=useState(false)

    const toggleChange=()=>{
        const newTheme=!isdark
        setIsdark(newTheme)
        localStorage.setItem('theme',newTheme?'dark':'light')
        document.body.style.backgroundColor=newTheme?'#000':'#fff'
        document.body.style.color=newTheme?'#fff':'#000'
    }

    useEffect(()=>{
        const getTheme=localStorage.getItem('theme')
       // setIsdark(getTheme==='dark')
        
    // Apply the initial theme to the body element
    document.body.style.backgroundColor = getTheme ? '#000' : '#fff';
    document.body.style.color = getTheme ? '#fff' : '#000';
  

    },[])
  return (
    <div >
        <h1>LIght_dark_theme ON</h1>
        <p>pellu</p>
        <button onClick={toggleChange}>change theme</button>
    </div>
  )
}

export default LIght_dark_theme