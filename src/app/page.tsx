import React from 'react'
import { useState } from 'react'
import Navbar from './components/navbar'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-green-500 sm:text-red-500 md:text-black xl:text-blue-600'>RESPONSIVE</h1>
    </div>
  )
}

export default Page

