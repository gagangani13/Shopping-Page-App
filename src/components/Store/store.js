import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
const store=configureStore({
    reducer:{cartReducer:cartReducer}
})
export default store