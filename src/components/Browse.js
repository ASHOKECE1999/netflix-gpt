import React from "react";
import Header from "./Header";
import useFetchLiveMovies from "../hooks/useFetchLiveMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchTrendingMovies from "../hooks/useFetchTrendingMovies";
import useFetchUpComingMovies from "../hooks/useFetchUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((state) => state.gptSearch);
  console.log(gptSearch.isGptSearchEnable, "gptSearch");
  useFetchLiveMovies();
  useFetchPopularMovies();
  useFetchTrendingMovies();
  useFetchUpComingMovies();
  return (
    <div>
      <Header />
      {gptSearch.isGptSearchEnable ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
