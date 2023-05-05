import { createSlice } from "@reduxjs/toolkit";

const initialCart = { cartOpen: false, items: []};
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
    }

  },
});
export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartSlice;
