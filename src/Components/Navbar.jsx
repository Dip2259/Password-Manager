import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
      <h1 className="text-2xl font-bold">
        <span className="text-green-500">&lt;</span>
        Pass<span className='text-green-500'>OP/&gt;</span>
      </h1>
      <ul className="navs flex justify-around items-center w-1/3 font-semibold text-xm">
        <li className="menu cursor-pointer hover:text-green-500">Home</li>
        <li className="menu cursor-pointer hover:text-green-500">About</li>
        <li className="menu cursor-pointer hover:text-green-500">Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
