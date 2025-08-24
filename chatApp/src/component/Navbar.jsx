import { SunMoon } from 'lucide-react';
import {motion} from 'motion/react'

function Navbar() {
    return (
        <>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" />
        <div className=" flex w-full h-20 justify-between bg-black text-white py-5 sm:py-5 px-5 sm:px-30 font-mono">
            <div className="logo">
                <h1 className="flex text-2xl text-white font-bold cursor-pointer ">ChatApp</h1>
            </div>
            <div>
                <ul className="flex space-x-4 items-center">
                    <li className="nav-btn hidden lg:block text-white hover:bg-[#FF3F17]  p-2 rounded-2xl cursor-pointer text-lg">Home</li>
                    <li className="nav-btn hidden lg:block text-white hover:bg-[#FF3F17]   p-2 rounded-2xl cursor-pointer text-lg">About</li>
                    <li className="nav-btn hidden lg:block text-white hover:bg-[#FF3F17]   p-2 rounded-2xl cursor-pointer text-lg">Login</li>
                    <li className="nav-btn hidden lg:block text-white hover:bg-[#FF3F17]  p-2 rounded-2xl cursor-pointer text-lg">Sign up</li>
                    <div className='p-2 rounded-full hover:bg-[#FF3F17] cursor-pointer '>
                        <SunMoon color='white' size={25} />
                    </div>
                    <li className='flex justify-center items-center lg:hidden cursor-pointer'>
                        <i class="ri-menu-line  text-2xl "></i>
                    </li>
                </ul>
            </div>

        </div>
        </>
     );
}

export default Navbar;