import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-midnight relative overflow-hidden">
      {/* Subtle glass overlay for the entire footer area if needed, but keeping it clean */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-[11px] tracking-wide">
        
        {/* Contact Details Group */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.a 
            href="mailto:mahid.dev01@gmail.com"
            className="group flex items-center gap-4 text-gray-500 hover:text-brand-cyan transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-700">Digital Correspondence</span>
              <span className="text-white group-hover:text-glow">mahid.dev01@gmail.com</span>
            </div>
          </motion.a>

          <motion.a 
            href="tel:9584705847"
            className="group flex items-center gap-4 text-gray-500 hover:text-brand-cyan transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-brand-cyan/30 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-700">Direct Protocol</span>
              <span className="text-white group-hover:text-glow">+91 9584705847</span>
            </div>
          </motion.a>
        </div>

        {/* Socials and Status */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex space-x-8 items-center text-gray-500 font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/mahid_qureshii/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
          
          <div className="flex items-center gap-4 px-5 py-2 rounded-full bg-white/[0.02] border border-white/5">
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_#00f2fe]" />
            <span className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Project Status: Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-700 uppercase tracking-[0.3em] font-black">
        <span>© 2026 MAHID.DEV AGENT PROTOCOL</span>
        <span className="mt-4 md:mt-0">Built for Enterprise Scale • India HQ</span>
      </div>
    </footer>
  );
}
