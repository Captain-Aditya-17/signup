import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Register = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handlelogin = async (e)=>{
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth,email,password)
            toast.success('user logged succesfully', {position: 'top-center'})
            navigate('/profile')
        } catch (error) {
            toast.error(error.message,{position: 'bottom-center'})
        }
    }
  return (
    <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-2xl shadow-black">
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-extrabold">login</h1>
        <div className="w-full flex-1 mt-8">
       
          <form onSubmit={handlelogin} className="mx-auto max-w-xs">
            <input
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
              className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
            />
            <input
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
            />
            <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Sign Up</span>
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
            don't have a account <Link to='/' className='font-bold'>register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>

    <div
      className="flex-1 bg-indigo-100 text-center hidden lg:flex"
      style={{ backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")' }}
    />
  </div>
  )
}

export default Register