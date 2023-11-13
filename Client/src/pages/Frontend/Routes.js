import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from './DailyTodos/Add'
import ShowTodos from './ShowTodos/ShowTodos'
import Navbar from '../../componen/Navbar'
import Login from './Users/Login/Login'
import SignUp from './Users/SignUp.jsx/SignUp'

export default function Index() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Add />} />
      <Route path='/todos' element={<ShowTodos />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
    </Routes>
    </>
  )
}
