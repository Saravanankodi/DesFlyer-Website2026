import { motion } from "framer-motion";

export default function FloatingLogo() {
  return (
    <div className="hidden lg:flex items-center justify-center w-full h-screen">
      <motion.img
        src="/images/portfolio/logo.png"
        alt="DESFlyer Logo"
        animate={{
          y: [-15, 15, -15],
          rotate: [-3, 3, -3],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[500px] xl:w-[650px] 2xl:w-[750px] h-auto object-contain
                   drop-shadow-[0_0_60px_rgba(34,211,238,0.35)]"
      />
    </div>
  );
}