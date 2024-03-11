import {useDispatch,useSelector} from 'react-redux'
import { increament,decreament,increamentBYvalue } from './Cartslice'

import React from 'react'

const Counter = () => {

    const count=useSelector((state)=>state.counter.value) 
    const dispatch=useDispatch()
    console.log(count);
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>dispatch(increament())}>increment</button>
        <button onClick={()=>dispatch(decreament())}>decreament</button>
        <button onClick={()=>dispatch( increamentBYvalue(10))}>increamentByValue</button>
    </div>
  )
}

export default Counter ;