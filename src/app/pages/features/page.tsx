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
      <h1 className='text-green-500 sm:text-red-500 md:text-black xl:text-blue-600'>RESPONSIVE</h1>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/>
    </div>
  )
}

export default Page
