import {configureStore} from "@reduxjs/toolkit"
import jobSlice from "./JobSlice"
import UserAuth from "./UserAuth"


const store = configureStore({
    reducer:{
        jobs:jobSlice,
        user:UserAuth
        
    }
})

export default store