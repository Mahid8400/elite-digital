import { motion } from "framer-motion";

export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-midnight">
      <motion.div
        animate={{
          x: [-200, 100, -200],
          y: [-300, -100, -300],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-glow top-[-300px] left-[-200px] opacity-40"
      />
      <motion.div
        animate={{
          x: [200, -100, 200],
          y: [200, 400, 200],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, rgba(0, 242, 254, 0) 70%)"
        }}
        className="bg-glow bottom-[-300px] right-[-200px] opacity-30"
      />
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(0, 128, 128, 0.12) 0%, rgba(0, 128, 128, 0) 80%)"
        }}
        className="absolute top-1/4 left-1/3 w-[1000px] h-[1000px] rounded-full blur-[120px] -z-10 opacity-20"
      />
    </div>
  );
}
