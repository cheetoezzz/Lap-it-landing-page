'use client'

const SignInPage = () => {

return (
    <div className="relative h-screen">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/bgimage.svg')",
      filter: "blur(0px)", // Adjust the blur radius as needed
    }}
  />
  <main className="relative z-10 flex justify-center items-center h-full flex-col">
    <a href="/" className="absolute top-0 left-0 m-4 text-amber-50">Back to Home</a>
    <img src="/Lapwhitelogo.svg" alt="Logo" className="w-40 h-auto mt-8" />
    <div className="bg-white rounded-lg flex items-center mt-8">
      <div className="">
        <img src="/signupleftimage.svg" alt="Image" className="w-64 h-3/6" />
      </div>
      <div className="pt-5">
        <h1 className="text-3xl font-semibold mb-1 ml-60">Login</h1>
        <p className="text-lg mb-4 ml-32 mr-32">Welcome Back! Please enter your details</p>
        <form className="pb-20 pl-28 text-xs items-center">
          <div className="mb-4 w-9/12">
            <input type="text" placeholder="Username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4 w-9/12">
            <input type="password" placeholder="Password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 w-9/12">Register</button>
            <br />
            <br />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 w-9/12">Continue with Google</button>
          </div>
          <br />
          <h1 className="ml-24">Dont have an account? <a href="">Register Here</a></h1>
        </form>
      </div>
    </div>
  </main>
</div>
)
};

export default SignInPage;


