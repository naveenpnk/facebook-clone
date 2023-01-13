import React from 'react'
import HomeBody from './HomeBody/HomeBody'
import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <HomeBody/>
    </div>
  )
}

export default Home