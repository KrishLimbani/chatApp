// import { Globe, MoveRight } from 'lucide-react';
// import { motion } from "motion/react"
// function Hero() {


//     return (
//         <div className="h-[90vh] flex bg-black font-mono">
//             <div className="h-full w-[50vw]  px-40 realtive">
//                 <h1 className="text-6xl text-white font-bold absolute top-[37%] w-100">Welcome to <span className="text-[#FF3F17]">ChatApp</span></h1>
//                 <motion.div id="btn"
//                 whileHover={{
//                     scale: 1.1,
//                     gap: "8px",
//                     width: "215px"
//                 }} 
//                 whileTap={{
//                     scale: 0.95
//                 }} 
//                 className="bg-[#151515] border-white w-52 h-16 cursor-pointer rounded-full flex items-center pl-2.5  absolute top-[55%]">
//                     <div className='flex justify-center items-center  bg-[#FF3F17] rounded-full px-2 '>
//                         <Globe color='white' />
//                         <button className=" text-white p-2 cursor-pointer font-semibold">Get Started</button>
//                     </div>
//                         <MoveRight color='gray' className='ml-2' />
//                 </motion.div>
//             </div>
//             <div>

//             </div>
//         </div>
//     );
// }

// export default Hero;
import { useState, useEffect } from "react";
import { Globe, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    const texts = ["Welcome to ChatApp", "Chat. Connect. Collaborate."];
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < texts[index].length) {
            const typingInterval = setInterval(() => {
                setDisplayText((prev) => prev + texts[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);

            return () => clearInterval(typingInterval);
        } else {
            const pauseTimeout = setTimeout(() => {
                setDisplayText("");
                setCharIndex(0);
                setIndex((prev) => (prev + 1) % texts.length);
            }, 1500);

            return () => clearTimeout(pauseTimeout);
        }
    }, [charIndex, index, texts]);

    return (
        <div className="h-[90vh] flex bg-black font-mono">
            <div className="h-full w-[50vw] px-40 relative">
                <motion.h1
                    className="text-5xl font-bold text-white absolute top-[37%] w-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {displayText}
                    <motion.span
                        className="border-r-4 border-blue-500 ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                </motion.h1>

                <motion.div
                    whileHover={{ scale: 1.1, gap: "8px", width: "215px" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#151515] border-white w-52 h-16 cursor-pointer rounded-full flex items-center pl-2.5 absolute top-[55%]"
                >
                    <div className="flex justify-center items-center bg-[#FF3F17] rounded-full px-2">
                        <Globe color="white" />
                        <button className="text-white p-2 cursor-pointer font-semibold">
                            Get Started
                        </button>
                    </div>
                    <MoveRight color="gray" className="ml-2" />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
