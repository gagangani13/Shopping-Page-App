import { createSlice } from "@reduxjs/toolkit";

const initialCart = { cartOpen: false, items: [],notification:null};
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCart,
  reducers: {
    setCartOpen(state) {
      state.cartOpen = !state.cartOpen;
    },
    addItems(state,action){
        state.items.unshift(action.payload)
    },
    updateItem(state,action){
        state.items=action.payload
    },
    setNotification(state,action){
        state.notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message
        }
    }

  },
});
export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartSlice;
//this function returns action
export const sendCartDataThunk=(cart)=>{
    return async function (dispatch) {
        dispatch(cartAction.setNotification({status:'pending',message:'Sending cart data',title:'Sending...'}))
        
        const sendRequest=async()=>{
            const response=await fetch(`https://shopping-page-app-4a7ac-default-rtdb.firebaseio.com/Cart.json`,
            {
            method:'PUT',
            body:JSON.stringify(cart)
        })
        if(!response.ok){
            throw new Error()
          }  
        }
        try {
             await sendRequest()
             dispatch(cartAction.setNotification({status:'success',message:'Sent cart data successfully!!',title:'Success'}))
        } catch (error) {
            dispatch(cartAction.setNotification({status:'error',message:'Sending cart data failed!!',title:'Error'}))
        }
      
    }
}
export const loadCartThunk=()=>{
    return async function (dispatch) {
      const response=await fetch(`https://shopping-page-app-4a7ac-default-rtdb.firebaseio.com/Cart.json`)
      const data= await response.json()
      try {
        if(response.ok){
          dispatch(cartAction.updateItem(data))
        }else{
          throw new Error()
        }
      } catch (error) {
        console.log('No data')
      }
    }
}

