import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    client_name: "",
    client_phone: "",
    client_email: "",
    project_details: "Web Development Elite",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await emailjs.send(
        "service_ngcgri8",
        "template_7etgagb",
        {
          client_name: formData.client_name,
          client_phone: formData.client_phone,
          client_email: formData.client_email,
          project_details: formData.project_details,
          message: formData.message,
        },
        "34UawbUMhuzrE3rtp"
      );

      setSuccess(true);
      setFormData({
        client_name: "",
        client_phone: "",
        client_email: "",
        project_details: "Web Development Elite",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData({ ...formData, client_phone: value });
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic">Engage.</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Ready to scale your digital presence? Finalize the brief below 
            for instant consultation placement.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full max-w-3xl glass rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden bg-white/[0.01]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-teal" />

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-4">Full Name</label>
                    <input
                      required
                      name="client_name"
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl focus:outline-none focus:border-brand-teal focus:bg-white/[0.05] transition-all text-sm font-medium"
                      placeholder="e.g. Mahid S."
                      value={formData.client_name}
                      onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-4">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="client_phone"
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl focus:outline-none focus:border-brand-teal focus:bg-white/[0.05] transition-all text-sm font-medium"
                      placeholder="10 Digits"
                      value={formData.client_phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-4">Corporate Correspondence</label>
                    <input
                      required
                      type="email"
                      name="client_email"
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl focus:outline-none focus:border-brand-teal focus:bg-white/[0.05] transition-all text-sm font-medium"
                      placeholder="principal@firm.com"
                      value={formData.client_email}
                      onChange={(e) => setFormData({ ...formData, client_email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-4">Consultation Vector</label>
                    <select
                      name="project_details"
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl focus:outline-none focus:border-brand-teal focus:bg-white/[0.05] transition-all appearance-none text-white/70 text-sm font-medium"
                      value={formData.project_details}
                      onChange={(e) => setFormData({ ...formData, project_details: e.target.value })}
                    >
                      <option className="bg-midnight" value="Web Development Elite">Premium Web Development Package</option>
                      <option className="bg-midnight" value="App Waitlist">Mobile Ecosystem Waitlist</option>
                      <option className="bg-midnight" value="Enterprise Consultation">Architecture Audit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 ml-4">Project Parameters</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-3xl focus:outline-none focus:border-brand-teal focus:bg-white/[0.05] transition-all text-sm font-medium leading-relaxed"
                    placeholder="Provide a high-level overview of objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-6">
                  <button
                    disabled={loading}
                    className="btn-primary py-5 px-12 group"
                  >
                    {loading ? "INITIALIZING..." : (
                      <div className="flex items-center justify-center gap-4">
                        Confirm & Deploy <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    )}
                  </button>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[9px] text-gray-700 uppercase tracking-[0.25em] text-center italic">
                      Agency Protocol: Strategic placements require valid documentation. Deployment monitored by the Elite Infrastructure Team.
                    </p>
                  </div>
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm justify-center">
                    <AlertCircle className="w-4 h-4" /> Connection error. Try again.
                  </div>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-brand-cyan" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase">Message Sent Successfully!</h3>
                <p className="text-white/40 max-w-sm mx-auto">
                  We will contact you shortly. Dominance is on its way.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-brand-cyan text-sm font-bold uppercase tracking-widest hover:underline"
                >
                  Send Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
