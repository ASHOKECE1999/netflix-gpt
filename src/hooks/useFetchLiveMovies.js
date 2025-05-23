import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useFetchLiveMovies = () => {
 const dispatch=useDispatch()
  
   useEffect(()=>{
    getNowPlayingMovies()
  },[])

  const getNowPlayingMovies=async()=>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  .then(res => res.json())
  .then(res => dispatch(addNowPlayingMovies(res.results)))
  .catch(err => console.error(err))
  }
};
export default useFetchLiveMovies;
