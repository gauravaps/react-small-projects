import React, { useEffect, useState } from 'react'

const Next = () => {
    const [isdarkcolor,setisdarkcolor]=useState(false)

    const Changecolor=()=>{
        const newcolor=!isdarkcolor;
       setisdarkcolor(newcolor)
        localStorage.setItem('theme',newcolor?'dark':'light')


        
    }
    useEffect(()=>{
         const getheme=localStorage.getItem('theme')
      setisdarkcolor(getheme==='dark')

      


    },[])

  return (
    <div style={{ background: isdarkcolor ? '#000' : '#fff',height: '100vh',color:isdarkcolor?'#fff':'#000',
     textAlign: 'center' }}>
        <h1 >color change theme</h1>
       
        <button onClick={Changecolor}>change color</button>
    </div>
  )
}

export default Next;