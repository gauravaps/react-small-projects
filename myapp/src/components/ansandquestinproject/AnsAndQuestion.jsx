import React, { useState } from 'react'
import data from './data'

const AnsAndQuestion = () => {
    const [select,setselect]=useState([])
    const clickme=(itemId)=>{
        setselect(itemId===select ? null :itemId)
        
        console.log(itemId);
        console.log(select);
        

    }
  return (
    <div>
        <h1>this is answers and questions project..</h1>
        {
            data.map((item)=>{
                return<>
                <h1>{item.question}</h1>

                <div>{select===item.id?<h3>{item.answer}</h3>:'no answer available'}</div>
                
                
                <button onClick={()=>clickme(item.id)}>get Ans</button>
                
                
                </>
            })
        }
        

    </div>
  )
}

export default AnsAndQuestion