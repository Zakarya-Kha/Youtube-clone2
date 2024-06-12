import React from 'react'
import Sidebar from './Main/Sidebar'

import Feed from './Main/Feed'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      {/* <Sidebar/> */}
      <Outlet/>
    </div>
  )
}

export default Main
