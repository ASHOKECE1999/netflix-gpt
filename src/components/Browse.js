import React from 'react'
import Header from './Header'
import useFetchLiveMovies from '../hooks/useFetchLiveMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  useFetchLiveMovies()
  return (
    <div>
      <Header/>
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse