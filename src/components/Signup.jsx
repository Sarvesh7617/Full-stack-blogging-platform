import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";


const SignUp=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [error,setError]=useState();
    const {register,handleSubmit,formState: { errors }}=useForm();

    const signupSubmit=async(data)=>{
        setError("")
        try {
            const session=await authService.createAccount(data)
            if (session)
            {
                const UserData=await authService.getCurrentUser()    
                if(UserData)
                {
                    dispatch(login(UserData))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return(
        <div className="flex items-center justify-center">
            <div className={`w-full max-w-lg bg-gray-100 rounded-xl p-5 border border-black/10 m-8`}>
                <div className="flex justify-center">
                    <span>
                        <img src={Logo} alt="signup logo" className="w-15"/>
                    </span>
                </div>
                <h2 className="text-center font-bold text-2xl leading-tight">Sign up to create account</h2>
                <p className="text-center text-md p-2 leading-tight">
                    Already have an account?&nbsp;
                    <Link to='/login' className="text-blue-500 font-semibold underline">
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-500 text-sm text-center mt-2 mb-2">{error}</p>}
                <form onSubmit={handleSubmit(signupSubmit)}>
                    <div className="space-y-5">
                        <Input
                            label='Full Name: '
                            type='text'
                            placeholder="Enter your full name"
                            {...register('name',{
                                required:"Please enter name"
                            })}
                        />
                        {errors.name && (<p className="text-red-500 text-sm -mt-4">{errors.name.message}</p>)}
                        <Input
                            label='Email: '
                            type='email'
                            placeholder="Enter your email"
                            {...register('email',{
                                required:"Please enter email",
                                validate:{
                                    matchPattern:(value)=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value)||
                                    "Email address must be a valid address"
                                }
                            })}
                        />
                        {errors.email && (<p className="text-red-500 text-sm -mt-4 -mt-4">{errors.email.message}</p>)}
                        <Input
                            label='Password: '
                            type='password'
                            placeholder="Enter your password"
                            {...register("password",{
                                required:"Please enter password"
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long"
                                  },
                                  maxLength: {
                                    value: 265,
                                    message: "Password must not exceed 265 characters"
                                  },
                                  validate: {
                                    notCommon: (value) => {
                                      const commonPasswords = ["password", "12345678", "qwerty", "11111111"];
                                      return !commonPasswords.includes(value) || "Please choose a stronger password";
                                    },
                                }
                            })}
                        />
                        {errors.password && (<p className={`text-red-500 text-sm -mt-4 ${errors.password.message?"":"-mt-4"}`}>{errors.password.message}</p>)}
                        <Button
                            type="submit"
                            className="w-full p-2 rounded-md transition-transform hover:bg-blue-700 hover:scale-102 duration-300"
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default SignUp;
