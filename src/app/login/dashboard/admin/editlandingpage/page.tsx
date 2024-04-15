import Footer from '@/app/components/constants/Footer'


import React from 'react'
import Navbar from './landingpage/components/navbar'
import Features from './landingpage/Features'
import Thirdsection from './landingpage/Thirdsec'
import Fourthsec from './landingpage/Fourthsec'
import Fifthesec from './landingpage/Fifthesec'
import Servicessec from './landingpage/Servicessec'
import Testimonysec from './landingpage/Testimonysec'
import Contact from './landingpage/Contact'
import Home from './landingpage/Home'


const Page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <Thirdsection/>
      <Fourthsec/>
      <Fifthesec/>
      <Servicessec/>
      <Testimonysec/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Page

