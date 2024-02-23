import { motion } from "framer-motion";

export function LoadPage() {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1,
          delay: 4.6,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-[100vw] h-[100vh] fixed z-[98] bg-[#424242]"></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1,
          delay: 4.4,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-[100vw] h-[100vh] fixed z-[99]  bg-[#202020]"></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 1,
          delay: 4,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-[100vw] h-[100vh] fixed z-[100] bg-[#101010]">
        <div className="flex items-center justify-center z-[999]">
          <span className="ball1 w-[200px] h-[200px] drop-shadow-2xl absolute rounded-full bg-[#ffffff]"></span>
          <span className="ball2 w-[150px] h-[150px] drop-shadow-2xl absolute rounded-full bg-[#f0f0f0]"></span>
          <span className="ball3 w-[100px] h-[100px] drop-shadow-2xl absolute rounded-full bg-[#ececec]"></span>
        </div>
      </motion.div>
    </>
  );
}
