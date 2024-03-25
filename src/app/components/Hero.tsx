const Hero = () => {
  return (
    <div className="select-none">
      <section
        className="max-container padding-container flex flex-col gap-20 py-10 pb-32 xl:flex-row bg-cover bg-center"
        style={{ backgroundImage: "url('/tao1.png')", height: "400px" }}
      >
        <div>
          <div className="ml-12">
            <h1 className="text-4xl font-bold text-white">
              Empower your Experience width
              <br />
              Our Feature-Rich Platform
            </h1>
            <div className="mt-4">
              <a href="/login/signup">
                <button className="bg-blue-600 w-40 h-10 text-white rounded hover:bg-blue-800 transition-all flex items-center justify-center">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="h-64">
          <div className="flex flex-col items-center mt-14">
            <div className="bg-blue-600 w-3/6 h-40 rounded-sm flex items-center justify-between drop-shadow-2xl">
              <div className="text-white text-lg font-semibold ml-9 mb-6">
                Unlock the Services
                <br />
                Tailored Just for You!
                <br />
                <a className="underline"  href="">
                  Go to Pricing
                </a>
              </div>
              <div className="flex items-center h-full">
                <img src="/tao.png" alt="icon" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
