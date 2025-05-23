import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="p-4 bg-black w-screen relative">
      <div className="-mt-[450px] relative z-40 pl-4">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated List"} movies={movies.trendingVideos} />
        <MovieList title={"Popular"} movies={movies.popularVideos} />
        <MovieList title={"Up Coming"} movies={movies.upComingVideos} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
