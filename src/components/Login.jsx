import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from './Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')
    const [url, seturl] = useState('')
    const handleRegister = async (e) => {
        e.preventDefault();
        
        try {
          await createUserWithEmailAndPassword(auth,email,password)
          const user = auth.currentUser;
          if(user){
            await setDoc(doc(db,"Users",user.uid),{
              email: user.email,
              username: username,
              profile: url
            })
          }
          navigate('/profile')
          toast.success('user logged succesfully',{position: 'top-center'})
        } catch (error) {
            console.error(error);
            toast.error(error.message, { position: 'bottom-center' });
        }
    };
    
  return (
    <>
    <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 shadow-2xl shadow-black">
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
          <div className="w-full flex-1 mt-8">
         
            <form onSubmit={handleRegister} className="mx-auto max-w-xs">
              <input
              value={url}
              onChange={(e)=>{
                seturl(e.target.value)
              }}
                className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Profile picture url"
              />
              <input
              value={username}
              onChange={(e)=>{
                setusername(e.target.value)
              }}
                className="w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Username"
              />
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
                alerady have a account <Link to='/login' className='font-bold'>Login</Link>
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
  </>
  )
}

export default Login