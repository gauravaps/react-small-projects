
import { configureStore } from '@reduxjs/toolkit'
import Cartslice from './Cartslice'



const Store = configureStore({

    reducer:{
        counter:Cartslice,

    }
})

export default Store