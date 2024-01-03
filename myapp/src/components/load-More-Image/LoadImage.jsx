import React, { useEffect, useState } from 'react'
import './index.css'
import data from '../ansandquestinproject/data'

const LoadImage = () => {
    const [product,setproduct]=useState([])
    const [loading,setloading]=useState(true)
    const [count,setcount]=useState(0)
    const [showhidden,setshohidden]=useState(false)


    const fetchProduct=async()=>{
        try {
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0 :count*20}`)
            if(response.ok){
                const data= await response.json()
                console.log(data);
                setproduct((prevData)=>[...prevData,...data.products])
                setloading(false)
            }
            
            if(product.length===100){
                setshohidden(true)
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
        useEffect(()=>{
            fetchProduct()
        },[count])
    
  return (
    <div className='container'>
        your image..
        <div className="product">
                {loading?<h1>loading image wait for a while...</h1>:product.map((item, index) => (
                    <img key={index} src={item.thumbnail} alt={item.title}  className='box'/>
                ))}
                
            </div>
            <div className='btn-container'>
                <button disabled={showhidden} onClick={()=>setcount(count+1)}>load more image</button>
                
                </div>
                {showhidden?<button>you have reached maximum limits</button>:null}
               
    </div>
  )
}

export default LoadImage