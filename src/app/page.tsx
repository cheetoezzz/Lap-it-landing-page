import React from 'react'
import Navbar from './components/navbar'
import Home from './landingpage/Home'
import Features from './landingpage/Features'
import Thirdsection from './landingpage/Thirdsec'
import Fourthsec from './landingpage/Fourthsec'
import Fifthesec from './landingpage/Fifthesec'
import Servicessec from './landingpage/Servicessec'
import Testimonysec from './landingpage/Testimonysec'
import Contact from './landingpage/Contact'


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
    </div>
  )
}

export default Page

