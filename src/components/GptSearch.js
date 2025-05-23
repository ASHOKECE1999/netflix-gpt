import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMG}
          alt="background"
        />
      </div>
      <GPTSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch