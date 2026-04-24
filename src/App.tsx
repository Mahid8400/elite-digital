import { motion, useScroll, useSpring } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { BackgroundGradient } from "./components/BackgroundGradient";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Terms } from "./components/Terms";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-brand-blue selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      <BackgroundGradient />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Terms />
        <ContactForm />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
