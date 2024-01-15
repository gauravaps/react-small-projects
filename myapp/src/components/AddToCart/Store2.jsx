import {configureStore} from '@reduxjs/toolkit'
import CartSlice2 from './CartSlice2'

const Store2=configureStore({

    reducer:{
        cart:CartSlice2 

    }
})

export default Store2;