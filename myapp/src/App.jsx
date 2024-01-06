import React from 'react'
import AnsAndQuestion from './components/ansandquestinproject/AnsAndQuestion'
import RadomColor from './components/project2/RadomColor'
import Rating from './components/ratingProject/Rating'
import Slider from './components/sliderpic/Slider'
import LoadImage from './components/load-More-Image/LoadImage'
import TreeView from './components/tree-view/TreeView'
import menus from './components/tree-view/data'
import Testtree from './components/tree-view/Testtree'



const App = () => {
  
  return (
    <div>
      {/* <AnsAndQuestion/> */}
      {/* <RadomColor/> */}
      {/* <Rating stars={10}/> */}
      {/* <Slider/> */}
      {/* <LoadImage/> */}
      {/* <TreeView menus={menus}/>  */}
      <Testtree/>
      
      
    </div>
  )
}
  
export default App