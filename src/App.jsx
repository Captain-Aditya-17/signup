import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import Profile from './components/Profile'
import Register from './components/Register'

function App() {

  return (
   <div>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<Register/>}/>
    </Routes>
   </div>
  )
}

export default App
