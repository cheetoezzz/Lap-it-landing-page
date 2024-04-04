import NavBar from '@/app/components/navbar'
import React from 'react'
import Firstsection from './components/firstsec'
import Secondsection from './components/secondsec'
import Thirdsection from './components/thridsec'
import Forthsection from './components/forthsec'

const Page = () => {
  return (
    <div>
      <NavBar/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/>
    </div>
  )
}

export default Page
