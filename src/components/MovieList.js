import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies, title, "hereErrro");
  return (
    <div className="text-white p-4">
        <h1 className="py-4 font-bold text-2xl">{title}</h1>
      <div className="flex items-center overflow-x-scroll"> 
        <div className="flex items-center">
          {movies?.map((item) => (
            <MovieCard key={item.id} movies={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
