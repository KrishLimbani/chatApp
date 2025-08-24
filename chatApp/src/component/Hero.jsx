import { Globe, MoveRight } from 'lucide-react';
import { motion } from "motion/react"
function Hero() {


    return (
        <div className="h-[90vh] flex bg-black font-mono">
            <div className="h-full w-[50vw]  px-40 realtive">
                <h1 className="text-6xl text-white font-bold absolute top-[37%] w-100">Welcome to <span className="text-[#FF3F17]">ChatApp</span></h1>
                <motion.div id="btn"
                whileHover={{
                    scale: 1.1,
                    gap: "8px",
                    width: "215px"
                }} 
                whileTap={{
                    scale: 0.95
                }} 
                className="bg-[#151515] border-white w-52 h-16 cursor-pointer rounded-full flex items-center pl-2.5  absolute top-[55%]">
                    <div className='flex justify-center items-center  bg-[#FF3F17] rounded-full px-2 '>
                        <Globe color='white' />
                        <button className=" text-white p-2 cursor-pointer font-semibold">Get Started</button>
                    </div>
                        <MoveRight color='gray' className='ml-2' />
                </motion.div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Hero;