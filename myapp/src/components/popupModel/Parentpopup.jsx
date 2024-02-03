import React, { useState } from 'react'
import Childpopup from './Childpopup'

const Parentpopup = () => {
    const [popup,setpopup]=useState(false)

    const showpopup=()=>{
        setpopup(!popup)
    }
  return (
    <div>
        <button onClick={showpopup}>click and watch child popup.</button>
        {popup && < Childpopup/>}
    </div>
  )
}

export default Parentpopup