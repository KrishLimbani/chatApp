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
import { Globe, MoveRight, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
    const texts = ["Welcome to ChatApp", "Chat. Connect. Collaborate.", "Chat in Real-Time"];
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
        <div className="h-[100vh] flex w-full bg-black font-mono"> {/* bg-gradient-to-r from-[#151515] via-[#3B82F6] to-[#FF3F17] animate-gradient */}
            <div className="h-full w-[50vw] px-5 sm:px-30 relative">
                <motion.div
                    className=" w-20 bg-white px-2 py-2 rounded-full shadow-lg absolute top-[25%] text-center text-black font-semibold"
                    animate={{ y: [0, -10, 0] }}
                    drag
                    transition={{ repeat: Infinity, duration: 2 }}
                    dragConstraints={{
                        top: -10,
                        bottom: 10,
                        left: -20,
                        right: 10,
                    }}
                >
                    Hey👋
                </motion.div>
                <motion.h1
                    className="text-3xl sm:text-5xl font-bold text-white absolute top-[37%] sm:w-100"
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
            <div className="flex-1 relative flex justify-center items-center mt-10 md:mt-0">
                {/* Animated 3D illustration */}
                {/* <motion.img
                    src='' 
                    className="w-80 md:w-96 relative z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                /> */}

                {/* Blurred gradient shapes */}
                <motion.div
                    className="absolute top-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-30 right-20 w-52 h-52 bg-pink-500/30 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
}

export default Hero;
