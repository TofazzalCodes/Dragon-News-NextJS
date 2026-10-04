import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-6 '>
            <div></div>
            <ul className='flex items-center gap-3 text-gray-700 font-bold'>
                <li><Navlink href={"/"}>Home</Navlink></li>
                <li><Navlink href={"/about"}>About</Navlink></li>
                <li><Navlink href={"/career"}>Career</Navlink></li>
            </ul>
            <div className='flex items-center gap-2'>
                <Image src={userAvatar} alt='User Avatar' width={60} height={60} > 
                 </Image>
                <button className='btn rounded-xl bg-purple-500 text-white'>
                    <Navlink href={"/login"}>LogIn</Navlink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;