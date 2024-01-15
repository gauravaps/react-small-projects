import {createSlice} from '@reduxjs/toolkit'
const CartSlice2=createSlice({

    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)

        },
        removetocart:(state,action)=>{
           return state.filter((items)=>items.id!==action.payload)
            

        }
    }
})
export const {addtocart,removetocart}=CartSlice2.actions;
export default CartSlice2.reducer