import React from 'react'
import Avatar from 'react-avatar'

const MessageChat = ({item}) => {
  return (
    <div>
      <div className='flex  items-center gap-2 m-2'>
      <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJfQpO3v4NSrlVvMpFYWw7YjijzAKTbuXHg&s"
          className="rounded-full cursor-pointer "
          size="34px"
        />
        <div className='flex gap-2 '>
          <h1 className='font-bold text-sm'>{item.name}</h1>
          <p className='text-sm '>{item.message}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageChat
