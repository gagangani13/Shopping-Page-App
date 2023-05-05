import {createSlice} from '@reduxjs/toolkit'
const initialCart={cartOpen:false}
const cartSlice=createSlice({
    name:'Cart',
    initialState:initialCart,
    reducers:{
        setCartOpen(state){
            state.cartOpen=!state.cartOpen
        }
    }
})
export const cartAction=cartSlice.actions
export const cartReducer=cartSlice.reducer
export default cartSlice
