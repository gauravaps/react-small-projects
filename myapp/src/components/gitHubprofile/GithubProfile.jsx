import React, { useState } from 'react'

const GithubProfile = () => {
    const[search,setsearch]=useState('gauravaps')
    const[logindata,setlogindata]=useState('')
    
    const handelsearch=async()=>{
        const data=await fetch(`https://api.github.com/users/${search}`)

        const res=await data.json()
        console.log(res);
        setlogindata(res)
        setsearch('')
    }



  return (
    <div> 
        <h1>this is your github profile..</h1>

        <input type="text" placeholder='search your profile..' value={search} onChange={(e)=>setsearch(e.target.value)}/>

        <button onClick={handelsearch}>search</button>

        <div>
            <p>{logindata.login}</p>
            <p>{logindata.id}</p>
            <p>{logindata.company}</p>
            <p>{logindata.followers}</p>
            <img src={logindata.avatar_url} alt="no image"  
             style={{alignItems:'center' ,textAlign:'center', height:'300px'}}/>
            <a href={logindata.html_url}>Go to Github</a> 

        </div>

        







    </div>
  )
}

export default GithubProfile