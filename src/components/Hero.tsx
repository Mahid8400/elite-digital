import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Layout } from "lucide-react";
import React from "react";
import { handleWhatsAppClick } from "../utils/whatsapp";

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
// ... existing code ...
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(75px)" }}>{children}</div>
    </motion.div>
  );
};

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  return (
    <motion.div
      style={{ x: mouseXSpring, y: mouseYSpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 px-6 flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-1.5 px-5 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 w-fit"
      >
        <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse badge-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
          Elite Digital Consulting • Full Stack Expert
        </span>
      </motion.div>

      <motion.h1
        className="text-7xl md:text-[8rem] font-black leading-[0.9] tracking-tighter text-center max-w-6xl flex flex-col items-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white block"
        >
          Scale Your Vision.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-[4.5rem] font-extrabold mt-4 text-white/90 block"
        >
          Go Global.
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/20 mt-8 font-black"
        >
          Responsive Website Architecture
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 text-xl md:text-2xl text-gray-400 text-center max-w-3xl font-light leading-relaxed"
      >
        Empowering local brands and shop owners with elite digital solutions. 
        We bridge the gap between traditional shops and modern technology.
      </motion.p>

      <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
        <MagneticButton>
          <button onClick={handleWhatsAppClick} className="btn-primary flex items-center gap-2">
            Claim Your Free Audit <ArrowRight className="w-4 h-4" />
          </button>
        </MagneticButton>
        <a href="#services" className="text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
          View Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="mt-32 grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          { label: "Fixed Fee Dev", value: "10K", suffix: "+" },
          { label: "SEO Optimized", value: "99.9", suffix: "%" },
          { label: "Custom UI", value: "ELITE", suffix: "" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="glass-card flex flex-col p-8 bg-white/[0.01]"
          >
            <h3 className="text-4xl font-extrabold text-white tracking-tighter">
              {item.value}<span className="text-sm font-normal text-white/20 ml-1">{item.suffix}</span>
            </h3>
            <p className="text-[10px] uppercase text-gray-500 font-black tracking-[0.2em] mt-3">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export { TiltCard };
