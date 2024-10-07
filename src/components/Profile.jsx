import React, { useEffect, useState } from 'react'
import { auth, db } from './Firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router'

const Profile = () => {
    const [gift, setgift] = useState(false)
    const navigate = useNavigate()
    const [userdetails, setuserdetails] = useState(null)
    const fetchuserData = ()=>{
        auth.onAuthStateChanged(async(user)=>{
            const docRef = doc(db,"Users",user.uid)
            const docsnap = await getDoc(docRef)
            if(docsnap.exists){
                setuserdetails(docsnap.data())
            }
        })
    }
    useEffect(()=>{
        fetchuserData()
    },[])
    const logout = async ()=>{
        auth.signOut()
        navigate('/')
    }
  return (
    <div className='w-full h-screen flex items-center justify-center '>
        {
            userdetails ?
            <div className='w-[25vw] h-[35vw] bg-gray-200 shadow-2xl shadow-black rounded-md flex flex-col items-center justify-center'>
                <div className='w-[8vw] h-[8vw] rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={userdetails.profile} alt="" />
                </div>
                <h1 className='text-2xl font-bold capitalize'>{userdetails.username}</h1>
                <h1 className='text-2xl font-bold capitalize'>{userdetails.email}</h1>
                <h1 onClick={logout} className='text-2xl font-bold bg-black py-2 w-[80%] rounded-full cursor-pointer text-white text-center mt-5'>Logout</h1>
                <h1 className='text-xl font-semibold mt-3'>A special gift unloacked</h1>
                {
                    gift ?
                    <h1 className='mt-2 font-2xl font-semibold text-center'>You recived a special thankyou by Aditya for visiting his project😁</h1>
                    :
                    <h1 onClick={()=> setgift(true)} className='text-xl font-bold bg-black py-2 w-[50%] rounded-full cursor-pointer text-white text-center mt-2'>unlock now</h1>
                }
            </div>
            :
            <h1>loading...</h1>
        }
    </div>
  )
}

export default Profile