import React, { useEffect } from "react";
import { addTrailderVIdeo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieVideo = (videoId) => {
  const dispatch = useDispatch();
  const getVideData = (async) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results.filter((items) => items.type === "Trailer");
        const filteredData = trailer.length ? trailer[0] : res.results[0];
        dispatch(addTrailderVIdeo(filteredData));
        console.log(filteredData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getVideData();
  }, []);
  
};

export default useMovieVideo;
