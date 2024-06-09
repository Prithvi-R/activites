import React, { useState } from 'react'

const Navbar = (props) => {
  
  return (
    <div className='bg-gray-800 text-white flex items-center justify-between px-8'>
      <div>{props.title}</div>
      <div className='flex gap-4'>
        <div className='text-white rounded-md px-3 py-2 text-lg font-medium" hover:underline'>Home</div>
        <div className='text-white rounded-md px-3 py-2 text-lg font-medium" hover:underline'>About</div>
        <div className='text-white rounded-md px-3 py-2 text-lg font-medium" hover:underline'>Gallery</div>
        <div className='text-white rounded-md px-3 py-2 text-lg font-medium" hover:underline'>Contact</div>
      </div>
      <div>
        <button className='inline-block rounded-md border border-white  px-2 my-1 text-center font-medium text-white hover:border-none hover:bg-indigo-700'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
