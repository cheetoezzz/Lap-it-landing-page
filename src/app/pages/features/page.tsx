import NavBar from '@/app/components/navbar'
import React from 'react'
import Firstsection from './components/firstsec'
import Secondsection from './components/secondsec'
import Thirdsection from './components/thridsec'
import Forthsection from './components/forthsec'
import Footer from '@/app/components/constants/Footer'
import BottomOfFooter from '@/app/components/constants/BottomOfFooter'

const Page = () => {
  return (
    <div>
      <NavBar/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/>
      <Footer/>
    </div>
  )
}

export default Page
