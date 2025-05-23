import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addUpComingVideos } from "../utils/movieSlice";

const useFetchUpComingMovies = () => {
 const dispatch=useDispatch()
  
   useEffect(()=>{
    getNowPlayingMovies()
  },[])

  const getNowPlayingMovies=async()=>{
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
  .then(res => res.json())
  .then(res => dispatch(addUpComingVideos(res.results)))
  .catch(err => console.error(err))
  }
};
export default useFetchUpComingMovies;
