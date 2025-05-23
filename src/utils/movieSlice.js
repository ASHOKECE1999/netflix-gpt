import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularVideos:null,
        trendingVideos:null,
        upComingVideos:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailderVIdeo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularVideos:(state,action)=>{
             state.popularVideos=action.payload
        },
        addTrendingVideos:(state,action)=>{
            state.trendingVideos=action.payload
        }
        ,
        addUpComingVideos:(state,action)=>{
            state.upComingVideos=action.payload
        }
    }
})


export const {addNowPlayingMovies,addTrailderVIdeo,addPopularVideos,addTrendingVideos,addUpComingVideos}= movieSlice.actions
export default movieSlice.reducer