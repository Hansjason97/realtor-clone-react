import React, { useState } from 'react' ;
import image0 from '../images/closedDoor.jpg';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  function onChange(e){
    setEmail(e.target.value) ;
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src={image0} alt="key" 
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <p className='mb-7 text-xl text-gray-600'>
            Forgot Forgot your password? No worries, happens to all of us! Please choose a new password below 
          </p>
          <form action="" >
            <input type="email" className='w-full mb-6 px-2 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' id="email" 
            value={email} onChange={onChange} placeholder="Email address"/>
            <div className='flex justify-between text-sm sm:text-lg'>
              <p className='text-gray-600'>Need an account ?
                <Link to="/sign-up" className='underline ml-1 text-purple-500 hover:text-purple-800'>Register</Link>
              </p>
              <p><Link to="/sign-in" className='italic text-pink-500 hover:text-pink-800'>Got an account ?</Link></p>
            </div>
            <button type='submit' className='w-full bg-purple-600 text-white 
            px-7 py-3 text-sm font-medium uppercase rounded 
            hover:bg-purple-700 transition ease-in-out active:bg-purple-800'>Send email</button>
          </form>
          
        </div>
      </div>
    </section>
  )
}

