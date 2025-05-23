import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularVideos, addTrendingVideos } from "../utils/movieSlice";

const useFetchTrendingMovies = () => {
 const dispatch=useDispatch()
  
   useEffect(()=>{
    getNowPlayingMovies()
  },[])

  const getNowPlayingMovies=async()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
  .then(res => res.json())
  .then(res => dispatch(addTrendingVideos(res.results)))
  .catch(err => console.error(err))
  }
};
export default useFetchTrendingMovies;
