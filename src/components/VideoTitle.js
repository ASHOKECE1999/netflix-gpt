import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-60 px-36 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 w-2/4'>{overview}</p>
        <div className='py-5'>
            <button className='bg-white text-black font-bold p-2 rounded-md px-4 mr-2 shadow-lg'>▶️Play</button>
            <button className='bg-gray-400 text-white font-bold p-2 rounded-md px-4 opacity-80 '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle