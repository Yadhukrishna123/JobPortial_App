import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data: []
}

const jobSlice = createSlice({
    name:"JobSlice",
    initialState,
    reducers:{
        getJobs:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {getJobs} = jobSlice.actions

export default jobSlice.reducer