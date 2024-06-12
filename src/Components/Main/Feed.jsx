import React from 'react'
import Sidebar from './Sidebar'
import Button from './Button'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'


const Feed = () => {
  const open = useSelector((state) => state.app.open);

  return (
    <div className='flex pt-[70px]'>
    <div className='border'>
      <Sidebar/>
    </div>
    <div className={` ${open ? 'w-[84%]' : 'w-full'}`}>
      <Button/>
      <VideoContainer/>
    </div>
    </div>
  )
}

export default Feed
