import React from 'react'

interface VideoCardTagProps{
    shares: number,
    offered: number,
    raised: number
}
const VideoCardTag:React.FC<VideoCardTagProps> = ({shares,offered,raised}) => {
  return (
    <div className='px-1 w-[85%] mx-auto rounded-xl text-white bg-white bg-opacity-20 backdrop-blur-2xl flex justify-around py-2'>
        <div className='flex flex-col items-center '>
            <p className='font-medium text-sm'>Shares</p>
            <p className='text-base'>{shares}</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='font-medium text-sm'>Offered</p>
            <p className='text-base'>{offered}%</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='font-medium text-sm'>Raised</p>
            <p className='text-base'>${raised}</p>
        </div>
    </div>
  )
}

export default VideoCardTag