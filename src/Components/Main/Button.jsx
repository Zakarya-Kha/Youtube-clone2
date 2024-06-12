import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../utils/appSlice'


const Button = () => {
  const [active, setActive] = useState('All')

  const disptach = useDispatch()

  const videoByTag = (tag) => {
    if(active !== tag){
      disptach(setCategory(tag))
      setActive(tag)
    }
  }

  const btns = ['All','Html', 'Css', 'React', 'Javascript', 'songs', 'News', 'Movies', 'Pakistani Dramas', 'Funny', 'Sports', 'Trending','PTI','web Developement', 'React Native Development']


  return (
    <div className='p-4 border shadow-md px-6 flex overflow-x-scroll hide-scrollbar'>
      {
        btns.map((btn, index) => {
          return <button key={index}
           onClick={() => {videoByTag(btn)}}
           className={ `text-xl px-3 py-1 mr-4 ${active === btn ? 'bg-gray-900 text-white' : 'bg-gray-300'} whitespace-nowrap rounded-md `}>{btn}</button>
        })
      }
    </div>
  )
}

export default Button
