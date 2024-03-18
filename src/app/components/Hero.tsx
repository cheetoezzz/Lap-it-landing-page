import Image from "next/image"

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-black'>
        <div>
            <div className="ml-12">
                <h1 className="text-4xl font-extrabold text-white">Empower your Experience width
                    <br />
                    Our Feature-Rich Platform
                </h1>
                <div className="mt-4">
                <a href="/login/signup">
                <button className="bg-blue-600 w-32 h-10 text-white rounded flex items-center justify-center">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero

