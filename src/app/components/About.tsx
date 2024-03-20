import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col'>
    <section className="flex flex-col items-center justify-center">
      <div className="text-blue-700 font-bold text-5xl text-center">
        Secure Cloud <br /> Application Hosting
      </div>
      <h1 className='mt-4'>Lorem ipsum dolor sit amet consectetur.<strong> Volutpat nulla lorem vitae dolor</strong>   enim viverra orci.</h1>
    </section>
    <div className='flex flex-row'>
    <section className='w-1/2'>
          <div className="flex justify-end items-end mr-40 mt-9">
            <Image src="/shield.png" alt="Image Description" width={400} height={300} />
          </div>
        </section>
        <section className='w-1/2'>
        <h1 className='text-slate-600 text-base mt-28 ml-12'>Lorem ipsum dolor sit amet consectetur. Lacinia risus <strong> quam 
            <br />morbi donec netus accumsan elementum.</strong> Viverra amet 
            <br />phasellus tellus laoreet fringilla. Lorem urna suspendisse sit ac 
            <br />convallis eget lacus non.
        </h1>
        <div className="flex items-center ml-12 mt-7">
            <button className="bg-blue-600 w-40 h-10 text-white font-normal flex items-center justify-center rounded-md">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-4">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    </button>
            </div>
      </section>
    </div>
  </div>
  )
}

export default About