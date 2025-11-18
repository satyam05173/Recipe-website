import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Signup = () => {
    const navigate=useNavigate();
const handleSignUp = (e) => {
  e.preventDefault();
  // Simulate success
 // toast.success('Registered successfully!');
  navigate('/login');
};
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8'>
<form  onSubmit={handleSignUp} className='flex items-center flex-col gap-4 border shadow-lg bg-white w-full max-w-sm p-6 rounded-lg' >
    
<h1 className='text-3xl sm:text-4xl font-bold text-red-400 mb-2'>Sign up</h1>
    <div className='w-full'>
        <label htmlFor="name" className='flex flex-col items-start gap-1.5 font-medium text-gray-700'>Username:</label>
        <input className='w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500' type="text" id="name" placeholder='Enter your name' />
    </div>
    <div className='w-full'>
        <label htmlFor="email" className='flex flex-col items-start gap-1.5 font-medium text-gray-700'>Email:</label>
        <input className='w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500' type="email" id="email" placeholder='Enter your email' />
    </div>
    <div className='w-full'>
        <label htmlFor="password" className='flex flex-col items-start gap-1.5 font-medium text-gray-700'>Password:</label>
        <input className='w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500' type="password" id="password" placeholder='Enter your password' />
    </div>
    <div className='w-full flex gap-2'>
        <button type="submit" className='flex-1 bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition'>Register</button>
    </div>

</form>
        
    </div>
  )
}

export default Signup