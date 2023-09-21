import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Utils/cartSlice"

const appStore = configureStore({           //appStore is our Redux store
    reducer : {
        cart : cartReducer, 
    }
});

export default appStore;