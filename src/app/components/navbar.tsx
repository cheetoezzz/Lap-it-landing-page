import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">LAP IT SOLUTIONS LOGO</div>
          <ul className="flex space-x-4">
            <li>
            <button className="text-white text-lg font-bold">HOME</button>
            </li>
            <li>
            <button className="text-white text-lg font-bold">ABOUT</button>
            </li>
            <li>
            <button className="text-white text-lg font-bold">LOGIN</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
