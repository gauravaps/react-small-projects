import React, { useEffect, useState } from 'react'
import './index.css'

const Slider = () => {

    const [images, setImages] = useState([]);
    const[loading,setloading]=useState(true)
    const [currrentIndex,setcurrrentIndex]=useState(0)


  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const url = 'https://picsum.photos/v2/list?page=2&limit=4';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setImages(data); // Update state with fetched data
          setloading(false)
          
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);

      }
    };


fetchData();

  },[images]); 

  // const gotoPrevious = () => {
  //   setcurrrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  // const gotoNext = () => {
  //   setcurrrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // by self tried..
  const gotoPrevious=()=>{
    setcurrrentIndex((previous)=>(previous===0?images.length-1:previous-1))
  }

  const gotoNext=()=>{
    setcurrrentIndex((previous)=>(previous===images.length-1?0:previous+1))
  }



  return (
    
    <div className='slide' >
        <h3>photo sliding...</h3>
        
        {loading?<p>loading..</p>:
            <div> 
                <button onClick={gotoPrevious}>previous</button>
                            
                <img key={images.id}
               // src={image.download_url} 
                //alt={`Image ${image.id}`}
                src={images[currrentIndex].download_url}

                alt={`Image ${images[currrentIndex].id}`}


                 style={{height:'150px', width:'150px'}} /> 
                

                <button onClick={gotoNext}>next</button>


            </div>
            
            
        
    
        }
        


        </div>
  )
}

// <img key={image.id}
// src={image.download_url} 
// alt={`Image ${image.id}`}
//  style={{height:'150px', width:'150px'}} /> 

export default Slider