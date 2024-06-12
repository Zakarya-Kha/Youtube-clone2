import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Watch from './Pages/Watch'
import Home from './Pages/Home'
import Main from './Components/Main'
import Navbar from './Components/Navbar'




function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path:'/',
          element: <Home/>,
        },
        {
          path: '/watch',
          element: <Watch/>,
        }
      ],
    },
  ])

  return (
    <>
    <Navbar/>
     <RouterProvider router={router} />
    </>
  )
}

export default App
