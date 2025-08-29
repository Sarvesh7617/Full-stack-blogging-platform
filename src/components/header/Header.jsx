import React from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
import {Container,LogOut} from "../index";
import {useSelector} from 'react-redux'
import Logo from '../../assets/logo.webp'


const Header=()=>{

    const authStatus=useSelector((state)=>state.auth.status)
    // const navigate=useNavigate()

    const navItem=[
        {
            name: 'Home',
            slug: "/",
            active: true
        }, 
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        }
    ]
    return(
        <header className="bg-gray-500 shadow py-3 rounded-md">
            <Container>
                <nav className="flex justify-between">
                    <div>
                        <Link to='/'>
                            <img src={Logo} alt='logo' className="w-15"/>
                        </Link>
                    </div>
                    <ul className="flex gap-x-10 items-center">
                        {navItem.map((item)=>
                        item.active? (
                            <li key={item.name}>
                                <NavLink
                                    to={item.slug}
                                    className={({isActive})=>`px-3 py-2 rounded-full font-bold ${isActive? 'bg-blue-100':""}`}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ):null)}
                        {authStatus && (
                            <li className="px-3 py-2 text-center duration-200 hover:bg-blue-100 rounded-full font-bold">
                                <LogOut/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>   
    )
}



export default Header;