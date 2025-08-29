import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";


const LogOut=()=>{

    const dispatch=useDispatch()
    const logoutHander=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return(
        <button onClick={logoutHander} >
            Log Out
        </button>
    )
}



export default LogOut;