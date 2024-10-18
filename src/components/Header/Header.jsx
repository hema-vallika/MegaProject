import React, { useState } from 'react'
import {Logo,Logout,Container} from '../index' 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [open,setOpen] = useState(false)
  const handleClick = function(){
    setOpen(!open)

  }

  const navItems = [
    {
      name:'Home',
      slug:"/",
      active:true
    },
    {
      name:'Login',
      slug:"/login",
      active: !authStatus,
    },
    {
      name:'Signup',
      slug:"/signup",
      active: !authStatus,
    },
    {
      name:'All Posts',
      slug:"/all-posts",
      active: authStatus
    },
    {
      name:'Add Post',
      slug:"/add-post",
      active: authStatus
    },                
  ]

  return (
    <header className=' shadow bg-blue-500 border-b-2 border-orange-500 text-white md:text-xl font-bold rounded-md'>
      <Container>
        <nav className='flex justify-between items-center relative'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo width='50px'/>
            
            </Link>
          </div>
          <IoMenu className='sm:hidden text-2xl  ' onClick={handleClick}/>
          <ul className={`${open ?'block':'hidden'} sm:flex ml-auto absolute py-4 top-14 -right-4 bg-blue-500 rounded-lg z-20 shadow-md sm:shadow-none sm:relative sm:top-0 sm:right-0`} >
            
            {navItems.map((item) => 
            item.active?(
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-block text-gray-100 px-6 py-2 duration-200 hover:bg-orange-500 rounded-full'>{item.name}</button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li >
              <Logout/>
            </li>
          )}

          </ul>
        </nav>
      </Container>
    </header>
  )
}


export default Header