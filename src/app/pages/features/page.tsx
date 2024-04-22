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
      <div className=" text-gray-950 sm:text-red-600 md:text-blue-500 lg:text-orange-600 xl:text-green-600">
        BOGO
      </div>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/>
      <Footer/>
    </div>
  )
}

export default Page
