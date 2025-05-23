import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        userPrefredLanguage:"en"

    }
    ,reducers:{
        changeLanguage:(state,action)=>{
            state.userPrefredLanguage=action.payload
        }
    }
})
export const {changeLanguage}=configSlice.actions
export default configSlice.reducer