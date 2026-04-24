import { motion } from "framer-motion";
import { Check, Cpu, Globe, Rocket } from "lucide-react";
import { TiltCard } from "./Hero";
import { handleWhatsAppClick } from "../utils/whatsapp";

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Elite Solutions
          </motion.h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Choose the tier of dominance your business deserves. 
            No average work, only premium results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Service */}
          <TiltCard className="relative group">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-brand-teal to-brand-cyan opacity-10 blur-xl group-hover:opacity-30 transition-opacity" />
            <div className="glass-card relative h-full flex flex-col bg-midnight/60">
              <div className="flex justify-between items-start mb-16">
                <div>
                  <h3 className="text-4xl font-extrabold tracking-tight mb-3">Premium Web Dev</h3>
                  <p className="text-brand-cyan font-bold tracking-[0.2em] text-[10px] uppercase">Agency Signature Tier</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-extrabold">₹10,000</div>
                  <div className="text-white/20 text-[10px] font-bold uppercase mt-2 tracking-widest">Fixed Fee</div>
                </div>
              </div>

              <ul className="space-y-5 mb-14 flex-grow">
                {[
                  { text: "Ultra-Fast Edge Delivery" },
                  { text: "Semantic SEO Architecture" },
                  { text: "High-End Glassmorphism UI" },
                  { text: "Dynamic Responsive Motion" },
                  { text: "Conversion-Led UX Logic" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-gray-400 group/item">
                    <div className="w-6 h-6 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover/item:bg-brand-cyan group-hover/item:text-midnight transition-colors">
                      <Check className="w-3.5 h-3.5 stroke-[4px]" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">{item.text}</span>
                  </li>
                ))}
              </ul>

              <button onClick={handleWhatsAppClick} className="btn-primary text-center py-5">
                Initiate Project
              </button>
            </div>
          </TiltCard>

          {/* Secondary Service Waitlist */}
          <div className="relative">
            <div className="glass-card h-full flex flex-col items-center justify-center border-dashed border-white/5 group overflow-hidden bg-white/[0.01]">
              <div className="absolute inset-0 bg-brand-teal/5 -z-10 group-hover:bg-brand-teal/10 transition-colors" />
              
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-10 w-28 h-28 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 shadow-[0_0_50px_rgba(0,128,128,0.2)]"
              >
                <Cpu className="w-12 h-12 text-brand-teal" />
              </motion.div>

              <div className="text-center">
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 inline-block">
                  Development Pipeline
                </span>
                <h3 className="text-3xl font-extrabold mb-5">Mobile App Suite</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto mb-10 leading-relaxed">
                  Engineered for seamless shop management and high-retention customer systems.
                </p>
                <button 
                  disabled
                  className="px-10 py-4 rounded-full border border-white/5 text-gray-700 cursor-not-allowed uppercase text-[10px] font-black tracking-widest bg-midnight"
                >
                  Registration Paused
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
