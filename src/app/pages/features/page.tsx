import NavBar from '@/app/components/navbar'
import React from 'react'
import Firstsection from './components/firstsec'
import Secondsection from './components/secondsec'

const Page = () => {
  return (
    <div>
      <NavBar/>
      <Firstsection/>
      <Secondsection/>
    </div>
  )
}

export default Page
