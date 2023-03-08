import {configureStore} from "@reduxjs/toolkit"
import CatReducer from "./slice/catslice"



export const store = configureStore({
    reducer:{
        catclicker:CatReducer,
    }
})
