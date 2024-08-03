import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Frontend from './Frontend'
import TodosPage from './Todos/TodosPage'
import UsersPage from './Users/UsersPage'
import AddTodos from './Todos/AddTodos'
import UpdatePassword from './Auth/UpdatePassword'
import ForgetPassword from './Auth/ForgetPassword'


export default function Index() {
  return (
    <Routes>
     <Route path='/' element = {<Register/>}/>
     <Route path='/login' element = {<Login/>}/>
     <Route path='/frontend' element={<Frontend/>}/>
     <Route path='/todos' element={<TodosPage/>}/>
     <Route path='/users' element={<UsersPage/>}/>
     <Route path='/addTodos' element={<AddTodos/>}/>
     <Route path='/updatePassword' element={<UpdatePassword/>}/>
     <Route path='/forgetPassword' element={<ForgetPassword/>}/>
    </Routes>
  )
}
