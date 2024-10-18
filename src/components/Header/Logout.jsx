import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appWrite/auth'
import {logout} from '../../store/authSlice'

function Logout() {
    const dispatch = useDispatch()
    
    const logoutHandler= () => {
        authService.logout().then(() =>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-orange-500 rounded-full'
           onClick={logoutHandler}>Logout</button>
  )
}

export default Logout