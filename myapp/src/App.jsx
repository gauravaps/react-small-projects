import React from 'react'
import AnsAndQuestion from './components/ansandquestinproject/AnsAndQuestion'
import RadomColor from './components/project2/RadomColor'
import Rating from './components/ratingProject/Rating'
import Slider from './components/sliderpic/Slider'
import LoadImage from './components/load-More-Image/LoadImage'
import TreeView from './components/tree-view/TreeView'
import menus from './components/tree-view/data'
import Testtree from './components/tree-view/Testtree'
import QRcode from './components/Qr_code/QRCOde'
import LIght_dark_theme from './components/light-dark-theme/LIght_dark_theme'
import ThemeSwitcher from './components/light-dark-theme/Secondlight'
import Counter from './components/Redux-test/Counter'
import {Routes,Route} from "react-router-dom"
import Home from './components/AddToCart/Home'
import Cart from './components/AddToCart/Cart'
import Navbar from './components/AddToCart/Navbar'





const App = () => {
  
  return (
    <div>
      {/* <AnsAndQuestion/> */}
      {/* <RadomColor/> */}
      {/* <Rating stars={10}/> */}
      {/* <Slider/> */}
      {/* <LoadImage/> */}
      {/* <TreeView menus={menus}/>  */}
      {/* <Testtree/> */}
      {/* <QRcode/> */}
      {/* <LIght_dark_theme/> */}
      {/* <ThemeSwitcher/> */} 
      {/* <Counter/> */}
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      
      
    </div>
  )
}
  
export default App