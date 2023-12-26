import React, { useState } from 'react'

let RadomColor = () => {
  const [typeofcolor,settypeofcolor]=useState('hex')
  const [color,setcolor]=useState('#000000')
  
  function createRandomHexcolor(){

    function randomcolor(length){
      return Math.floor(Math.random()*length)
      
    }


    let hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexcolor='#'

    for(let i=0;i<6;i++){

      hexcolor += hex[randomcolor(hex.length)]
    }
    setcolor(hexcolor)
    console.log(hexcolor);

  }
  function rgbcolorcreate(){
    

  

  }

  return (
    <div style={{
      width:'100vw',
      height:'100vh',
      background:color,
    }}>

      <button onClick={()=>settypeofcolor('hex')}>create Hex color</button>

      <button onClick={()=>settypeofcolor('rgb')}>create Rgb color</button>

      <button onClick={typeofcolor==='hex'? createRandomHexcolor:rgbcolorcreate}>generate random color</button>
      <h1>{typeofcolor==='rgb'?'rbg color':'hex color'} chane clour</h1>
      
    </div>
  )
}

export default RadomColor