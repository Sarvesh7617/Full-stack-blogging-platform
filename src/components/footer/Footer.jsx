import React from "react";
import Logo from '../../assets/logo.webp'
import {Link} from 'react-router-dom';

const Footer=()=>{
    return(
        <section className="relative py-10 bg-gray-300 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div>
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4">
                                <img src={Logo} alt="logo" className="w-15"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2025. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px text-xs font-semibold mb-8 uppercase text-gray-500">
                                Company
                            </h3>
                            <ul className="flex-col space-y-2 font-semibold">
                                <li>
                                    <Link to='/'>
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div>
                            <h3 className="tracking-px text-xs font-semibold mb-8 uppercase text-gray-500">
                                Support
                            </h3>
                            <ul className="flex-col space-y-2 font-semibold">
                                <li>
                                    <Link to='/'>
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Help
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div>
                            <h3 className="tracking-px text-xs font-semibold mb-8 uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul className="flex-col space-y-2 font-semibold">
                                <li>
                                    <Link to='/'>
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Footer;