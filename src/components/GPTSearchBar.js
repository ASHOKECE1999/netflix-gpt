import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/LanguageConstants'

const GPTSearchBar = () => {
    
    const userPreferedLanguage=useSelector(state=>state.userLanguageConfig.userPrefredLanguage)
  return (
    <div className='pt-[15%]  flex justify-center'>
        <form className='bg-black grid grid-cols-12 w-[70%] p-2'>
            <input placeholder={lang[userPreferedLanguage].gptSearchPlaceholder} type="text"  className='px-3 py-3 p-2  col-span-9 rounded-sm' />
            <button className='bg-violet-500 px-3 py-3 col-span-3 text-white font-bold rounded-xl ml-3'>{lang[userPreferedLanguage].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar