import React from 'react'
import AnsAndQuestion from './components/ansandquestinproject/AnsAndQuestion'
import RadomColor from './components/project2/RadomColor'
import Rating from './components/ratingProject/Rating'

const App = () => {
  return (
    <div>
      {/* <AnsAndQuestion/> */}
      {/* <RadomColor/> */}
      <Rating stars={10}/>
    </div>
  )
}

export default App