import React from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'

const Home = () => {
    document.title = "LegacyFlix | Homepage"
  return (
    <>
    <Sidenav />
    <div className='w-[80%] h-screen'>
      <Topnav />
    </div>
    </>
  )
}

export default Home