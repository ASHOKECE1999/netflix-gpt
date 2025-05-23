import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({movies}) => {
    // console.log(movies,"huhuhuasok")
    // const image=movies[0]
    // console.log(`${IMG_CDN}${movies.poster_path}`)
  return (
    <div className='bg-black mr-4 rounded-md'>
        <img alt="movieCard" src={`${IMG_CDN}${movies.poster_path}`} className='min-h-48 min-w-48 rounded-lg'/>
    </div>
  )
}

export default MovieCard