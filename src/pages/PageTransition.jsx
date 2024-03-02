import { motion } from "framer-motion";

export default function PageTransition(){
    return (
        <div style={{pointerEvents: "none"}} className="fixed w-[100vw] flex z-[999] h-[100vh]">
            <motion.div initial={{y: "-100vh"}} animate={{y: "100vh"}} transition={{duration: 1, delay: 0.2}}
                        className="absolute w-[100%] h-[100%] bg-[#eee]"></motion.div>
            <motion.div initial={{y: "0"}} animate={{y: "100vh"}} transition={{duration: 1, delay: 0.3}}
                        className="absolute w-[100%] h-[100%] bg-[#000]"></motion.div>
        </div>
    )
}
