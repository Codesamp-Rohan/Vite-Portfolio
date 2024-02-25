import { motion } from "framer-motion";

export function LoadPage() {
  return (
    <div className="flex z-[999]">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1,
          delay: 4.6,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-[100vw] h-[100vh] fixed z-[99] bg-[#97ee81]"></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1,
          delay: 4.4,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-[100vw] h-[100vh] fixed z-[99]  bg-[#6e40c9]"></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1,
          delay: 4,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-[100vw] h-[100vh] fixed z-[100] bg-[#000]">
        <div className="flex items-center justify-center z-[999]">
          <span className="ball1 w-[200px] h-[200px] drop-shadow-2xl absolute rounded-full bg-transparent border-[10px] border-[#6e40c9]"></span>
          <span className="ball2 w-[150px] h-[150px] drop-shadow-2xl absolute rounded-full bg-transparent border-[10px] border-[#97ee81]"></span>
          <span className="ball3 w-[100px] h-[100px] drop-shadow-2xl absolute rounded-full bg-transparent border-[10px] border-[#ececec]"></span>
        </div>
      </motion.div>
    </div>
  );
}
