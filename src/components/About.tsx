import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Zap, Handshake } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-charcoal/30">
      <div className="max-w-7xl mx-auto">
        {/* Narrative Section */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[1px] w-12 bg-brand-cyan" />
              <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-[10px]">Strategic Narrative</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-10 tracking-tight leading-[0.9]">
              Digital Evolution <br />
              <span className="text-white/20 italic">at scale.</span>
            </h2>
            <div className="space-y-8 text-gray-400 text-xl font-light leading-relaxed">
              <p>
                In an era defined by velocity, traditional business models face obsolescence. 
                We engineer the bridge to digital maturity.
              </p>
              <p className="border-l-2 border-brand-teal pl-8 py-3 italic text-white/70 bg-brand-teal/5 rounded-r-xl">
                "We don't just architect interfaces; we construct market dominance through 
                mathematically optimized digital solutions."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <TrendingUp className="w-8 h-8 text-brand-teal" />,
              title: "Performance Led",
              desc: "Engineered for high-retention and measurable asset growth.",
            },
            {
              icon: <Zap className="w-8 h-8 text-brand-cyan" />,
              title: "Velocity First",
              desc: "Rapid deployment cycles without compromising integrity.",
            },
            {
              icon: <Sparkles className="w-8 h-8 text-white" />,
              title: "Signature Design",
              desc: "Bespoke visual languages that define market presence.",
            },
            {
              icon: <Handshake className="w-8 h-8 text-brand-cyan" />,
              title: "Trust-First Pricing",
              subtitle: "50% Lower Market Rates",
              desc: "We intentionally charge 50% less than traditional agencies because our mission is to build lasting trust and prove our value through your growth.",
              badge: "For New Clients"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col items-start bg-white/[0.01] relative"
            >
              {item.badge && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-[9px] font-black uppercase tracking-widest animate-pulse">
                  {item.badge}
                </div>
              )}
              <div className="mb-8 p-3 rounded-2xl bg-white/[0.03] border border-white/5">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{item.title}</h3>
              {item.subtitle && (
                <p className="text-brand-cyan text-xs font-black uppercase tracking-widest mb-4">
                  {item.subtitle}
                </p>
              )}
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
