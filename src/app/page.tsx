import React from 'react'
import Navbar from './components/navbar'
import Home from './landingpage/Home'
import Features from './landingpage/Features'
import Thirdsection from './landingpage/Thirdsec'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <Thirdsection/>
    </div>
  )
}

export default Page

