import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import authService from "../appwrite/auth";
import {login as authLogin} from '../store/authSlice'
import {Logo,Input,Button} from './index'


const Login=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {register,handleSubmit,formState: { errors }}=useForm();
    const [error,setError]=useState("");

    
    const loginSubmit=async(data)=>{
        setError("")
        try {
            const session=await authService.login(data)
            if(session)
            {
                const userData=await authService.getCurrentUser()
                if (userData)
                {
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return(
        <div className="flex items-center justify-center">
            <div className={`max-w-lg w-full border border-black/10 bg-gray-100 rounded-xl p-5 m-5`}>
                <div className="flex justify-center mb-1">
                    <img src={Logo} alt='Logo' className="w-15"/>
                </div>
                <h2 className="text-center font-bold text-2xl leading-tight">Sign in to your account</h2>
                <p className="text-center text-md p-2 leading-tight">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="text-blue-500 font-semibold underline">
                        Sign Up
                    </Link>
                </p>                                                   {/*&apos;-> ' and &nbsp;-> for space*/}
                {error && <p className="text-red-600 m-3 text-center">{error}</p>}
                <form onSubmit={handleSubmit(loginSubmit)}>
                    <div className="space-y-5">
                        <Input
                            label='Email: '
                            type="email"
                            placeholder="Enter your email"
                            {...register("email",{
                                required:"Please enter email",
                                validate:{
                                    matchPatern:(value)=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value)||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        {errors.email && (<p className="text-red-500 text-sm -mt-4">{errors.email.message}</p>)}
                        <Input
                            label='Password: '
                            type='password'
                            placeholder="Enter your Password"
                            {...register('password',{
                                required:"Please enter password"
                            })}
                        />
                        {errors.password && (<p className="text-red-500 text-sm -mt-4">{errors.password.message}</p>)}
                        <Button
                            type="submit"
                            className="w-full p-2 rounded-md transition-transform hover:bg-blue-700 hover:scale-102 duration-300"
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Login;