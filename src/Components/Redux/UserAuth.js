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
     
    },
    userLogout:(state)=>{
      state.isAuthenticated = false
      state.user = null
      state.token = ''
    }
  }
})

export const {userAuthSuccess, userLogout} =userAuthSlice.actions 

export default userAuthSlice.reducer