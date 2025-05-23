import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularVideos } from "../utils/movieSlice";

const useFetchPopularMovies = () => {
 const dispatch=useDispatch()
  
   useEffect(()=>{
    getNowPlayingMovies()
  },[])

  const getNowPlayingMovies=async()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
  .then(res => res.json())
  .then(res => dispatch(addPopularVideos(res.results)))
  .catch(err => console.error(err))
  }
};
export default useFetchPopularMovies;
