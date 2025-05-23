import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gptSlice",
    initialState:{
        isGptSearchEnable:false
    },
    reducers:{
        toggleSearch:(state)=>{
             state.isGptSearchEnable=!state.isGptSearchEnable
        }
    }
})
export const {toggleSearch}=gptSlice.actions
export default gptSlice.reducer