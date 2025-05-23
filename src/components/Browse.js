import React from 'react'
import Header from './Header'
import useFetchLiveMovies from '../hooks/useFetchLiveMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useFetchPopularMovies from '../hooks/useFetchPopularMovies'
import useFetchTrendingMovies from '../hooks/useFetchTrendingMovies'
import useFetchUpComingMovies from '../hooks/useFetchUpComingMovies'


const Browse = () => {
  useFetchLiveMovies()
  useFetchPopularMovies()
  useFetchTrendingMovies()
  useFetchUpComingMovies()
  return (
    <div>
      <Header/>
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse