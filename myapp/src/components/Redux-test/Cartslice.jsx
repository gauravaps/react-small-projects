import {createSlice} from '@reduxjs/toolkit'
const initialState={value:0,}
export const Cartslice=createSlice({
    name:'count',
    initialState,
    reducers:{
        increament:(state)=>{
            state.value +=1
        },
        decreament:(state)=>{
         state.value -=1
        },
        increamentBYvalue:(state,action)=>{
            state.value +=action.payload
        }
    }
})

export const {increament,decreament,increamentBYvalue}=Cartslice.actions

export default Cartslice.reducer