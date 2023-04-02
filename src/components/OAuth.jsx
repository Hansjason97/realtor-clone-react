import React from 'react'
import { FcGoogle } from 'react-icons/fc';

export default function OAuth() {
  return (
    <button className='w-full 
    bg-red-600 
    text-white px-7 py-3 text-sm font-medium uppercase rounded 
    hover:bg-red-700 transition ease-in-out active:bg-red-800
    flex justify-center items-center'> <FcGoogle className='mr-2 text-2xl bg-white rounded-full'/> Continue with Google</button>
  )
}
