import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  user:null,
  isAuthenticated:false,
  token:'',
}

const userAuthSlice = createSlice({
  name:"userAuthSlice",
  initialState,
  reducers:{
    userAuthSuccess:(state,action)=>{
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
     
    }
  }
})

export const {userAuthSuccess} =userAuthSlice.actions 

export default userAuthSlice.reducer