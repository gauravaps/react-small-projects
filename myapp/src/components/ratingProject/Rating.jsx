import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import './index.css';




const Rating = ({stars=5}) => {
    const [hover,sethover]=useState(0)
    const [rating,setrating]=useState(0)

    const handelclik=(getIndexId)=>{
        setrating(getIndexId)
        console.log(getIndexId);


    }
    const handelMove=(getIndexId)=>{
        sethover(getIndexId)
    

    }

    const handelLeave=()=>{
        sethover(rating)
        



    }

   // let stars=10; 
  return (
    <div className='star'>
        <h1>Select your rating...</h1> 
        {
         [...Array(stars)].map((_,index)=>{

           let starvalu=index+1

           // we can write with index+=1

                return(
                    <>
                    <div key={index}> 
                  <FaStar 
                  className={starvalu <=(hover || rating)? 'active':'inactive'}
                  onClick={()=>handelclik(starvalu)}
                  onMouseMove={()=>handelMove(starvalu)}
                 onMouseLeave={()=>{handelLeave()}}
                 size={40}
                 
                  
                  
                  /> 
                  
                    </div>
                    </>
                )
            })
        }


    </div>
  )
}

export default Rating