import { SunMoon } from 'lucide-react';
import {motion} from 'motion/react'

function Navbar() {
    return (
        <div className=" flex justify-between bg-black text-white py-5 px-40 font-mono">
            <div className="logo">
                <h1 className="text-2xl text-white font-bold">ChatApp</h1>
            </div>
            <div>
                <ul className="flex space-x-4 items-center">
                    <li className="nav-btn text-white hover:bg-[#FF3F17]  p-2 rounded-2xl cursor-pointer text-lg">Home</li>
                    <li className="nav-btn text-white hover:bg-[#FF3F17]   p-2 rounded-2xl cursor-pointer text-lg">About</li>
                    <li className="nav-btn text-white hover:bg-[#FF3F17]   p-2 rounded-2xl cursor-pointer text-lg">Login</li>
                    <li className="nav-btn text-white hover:bg-[#FF3F17]  p-2 rounded-2xl cursor-pointer text-lg">Sign up</li>
                    <div className='p-2 rounded-full hover:bg-[#FF3F17] cursor-pointer '>
                        <SunMoon color='white' size={25} />
                    </div>
                </ul>
            </div>

        </div>
     );
}

export default Navbar;