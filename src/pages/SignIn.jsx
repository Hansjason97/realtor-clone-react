import React, { useState } from 'react' ;
import image0 from '../images/doorKey.jpg';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const {email, password} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src={image0} alt="key" 
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="" >
            <input type="email" className='w-full mb-6 px-2 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' id="email" 
            value={email} onChange={onChange} placeholder="Email address"/>
            <div className='relative mb-6'>
            <input type={showPassword ? 'text' : 'password'} className='w-full px-2 py-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
             id="password" value={password} onChange={onChange} placeholder="Password"/>
            {showPassword ? (
              <AiFillEyeInvisible className='absolute right-3 top-5 text-xl cursor-pointer' 
              onClick={()=>setShowPassword((prevState)=>!prevState)}/>
            ) : ( <AiFillEye className='absolute right-3 top-5 text-xl cursor-pointer' 
            onClick={()=>setShowPassword((prevState)=>!prevState)}/> )}
            </div>
            <div className='flex justify-between text-sm sm:text-lg'>
              <p className='text-gray-600'>Need an account ?
                <Link to="/sign-up" className='underline ml-1 text-purple-500 hover:text-purple-800'>Register</Link>
              </p>
              <p><Link to="/forgot-password" className='italic text-pink-500 hover:text-pink-800'>Forgot your password ?</Link></p>
            </div>
            <button type='submit' className='w-full bg-purple-600 text-white 
            px-7 py-3 text-sm font-medium uppercase rounded 
            hover:bg-purple-700 transition ease-in-out active:bg-purple-800'>Sign in</button>
          <div className='my-4 flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center uppercase text-sm mx-4'>
              or
            </p>
          </div>
          <OAuth />
          </form>
          
        </div>
      </div>
    </section>
  )
}
