import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtocart} from './CartSlice2'

const Home = () => {

    const[products,setproducts]=useState([])
    const [loading,setloading]=useState(true)

    const dispatch=useDispatch()

    useEffect(()=>{
        const fetchproduct=async()=>{
            const res= await fetch('https://fakestoreapi.com/products')
            const data= await res.json()
            setproducts(data)
            setloading(false)
        }
        fetchproduct()
    },[])

    const handelproduct=(items)=>{
        dispatch(addtocart(items))

    }



  return (
    <div className='productsWrapper'>

        {
          loading?<h1 className='linecent'> loading please wait...</h1>:products.map((items)=>{
                return(
                    <div className='card' key={items.id}>
                    <img src={items.image} alt="img" />
                    <h4>{items.title}</h4>
                    <h5>{items.price}</h5>
                    <button onClick={()=>handelproduct(items)} className='btn'>Add to card</button>

                </div>
                )
            })
        

                
        }
    </div>
  )
}

export default Home