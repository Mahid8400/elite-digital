import { motion } from "framer-motion";
import { FileText, Shield, Scale, Info, Globe, Layout } from "lucide-react";

export function Terms() {
  return (
    <section id="terms" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card border-white/5 bg-white/[0.01] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none">
            <Scale className="w-80 h-80" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 pb-8 border-b border-white/5">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/5 flex items-center justify-center border border-brand-cyan/10">
                <FileText className="text-brand-cyan w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Service Agreement</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mt-1">Version 2.0 • Agency Protocol</p>
              </div>
            </div>
            <div className="px-4 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-[9px] font-black tracking-widest uppercase">
              Authenticated Document
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-3">
                <Shield className="w-4 h-4 text-brand-cyan" /> 01. Capital Commitment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                All strategic placements require a <span className="text-white/80 font-medium">50% upfront retainer</span> to initiate high-velocity development. 
                The remaining balance is due upon visual validation and protocol clearance, prior to asset deployment.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-3">
                <Globe className="w-4 h-4 text-brand-cyan" /> 02. Domain & Hosting Policy
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light italic">
                The fixed fee of ₹10,000 covers premium design, development, and deployment.
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Custom domain extensions (e.g., .com, .in) and hosting subscriptions are liquidated separately.",
                  "Clients will be charged based on current market valuations at time of registration.",
                  "Full DNS configuration and technical mapping is included in the base agreement."
                ].map((item, i) => (
                  <li key={i} className="text-[11px] text-gray-600 flex gap-2">
                    <span className="text-brand-teal">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-3">
                <Layout className="w-4 h-4 text-brand-cyan" /> 03. Tactical Scope
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Our Elite Tier architecture includes a Bespoke UI package, local SEO optimization, and high-performance edge delivery. 
                Post-deployment maintenance is guaranteed for <span className="text-white/80 font-medium">30 days</span>, followed by optional support retainer.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-3">
                <Info className="w-4 h-4 text-brand-cyan" /> 04. Asset Sovereignty
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Upon fulfillment of the financial agreement, the client assumes full sovereignty over the digital environment. 
                Elite Digital Solutions retains intellectual credit for the underlying technical architecture and design patterns.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-[9px] text-gray-700 uppercase tracking-[0.4em] font-black text-center">
            MAHID.DEV AGENT PROTOCOL • 2026 INDIA HQ
          </div>
        </motion.div>
      </div>
    </section>
  );
}
