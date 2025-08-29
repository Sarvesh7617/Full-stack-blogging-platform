import { configureStore } from "@reduxjs/toolkit";
import AuthReducer  from "./authSlice";

const Store=configureStore({
    reducer:{
        auth:AuthReducer
    }
})


export default Store;