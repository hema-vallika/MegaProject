import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux' 
import authService from "../appWrite/auth"
import {useForm} from 'react-hook-form'
import { FiLoader } from "react-icons/fi";

function LoginComp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

    const login = async(data) =>{
        setError("")
        setLoading(true)
        try{
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
                
            } 
        }catch(error){
            setError(error.message)
        }
        setLoading(false)
    }


  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-orange-500 rounded-xl p-10 border border-blue-500 border-spacing-2`}>
        <div className='mb-2 flex justify-center'>
            <span className=' w-full  max-w-[100px]'>
                <Logo width='100%'/>

            </span>

        </div>
        <h2 className='text-center text-2xl font-bold text-white leading-tight'>
            Sign in to your accout
        </h2>
        <p className=' mt-2 text-center text-base text-gray-200'>
            Don&apos;t have any account? &nbsp;
            <Link to="/signup"
            className='font-medium text-primary transition-all duration-200 hover:underline'>
                Signup
            </Link>

        </p>
        {error && <p className=' text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8  '>
            <div className='space-y-5 flex flex-col w-full justify-center '>
                <Input 
                label="Email:"
                placeholder="Enter your email"
                type="email"
                {...register("email",{
                    required:true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }

                })}
                />
                <Input
                label="Password:"

                type="password"
                placeholder="Enter your Password"
                {...register("password",{
                    required:true,
                })}
                />
                <Button
                type="submit"
                className ='w-2/3  mx-auto text-white font-bold bg-blue-500 border border-cyan-900 '
                >
                    {loading ? <FiLoader className='mx-auto text-lg'/> : "Sign In " }
                </Button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default LoginComp