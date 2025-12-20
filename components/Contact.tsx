import React, { useRef, useState } from 'react';
import { Mail, Send, Linkedin, Github, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // --- REPLACE THESE 3 VALUES FROM YOUR EMAILJS DASHBOARD ---
    // --- REPLACE THESE 3 VALUES ---
    const SERVICE_ID = 'service_rwwhxju';       // ✅ UPDATED: Use this new ID from your screenshot
    const TEMPLATE_ID = 'template_xgyziho';     // Keep this (assuming it matches your template)
    const PUBLIC_KEY = 'XXOE_SqdObtgJ1COG'; // Keep this (assuming it matches your account)
    // ---------------------------------------------------------
    // ---------------------------------------------------------

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current?.reset(); // Clear form on success
          // Reset status after 3 seconds
          setTimeout(() => setStatus('idle'), 3000);
        }, (error) => {
          console.log(error.text);
          setStatus('error');
        });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
              <Mail className={isDark ? 'text-purple-500' : 'text-indigo-600'} />
              Let's Connect
            </h2>
            <p className={`mb-12 text-lg transition-theme ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Open for collaboration on AI research, data engineering projects, or speaking opportunities. Feel free to drop a line!
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'thinkgood24hrs@gmail.com', // Updated to your personal email if you want it displayed
                  link: 'mailto:thinkgood24hrs@gmail.com'
                },
                {
                  icon: Linkedin,
                  label: 'Professional',
                  value: 'linkedin.com/in/dhuneshwaran',
                  link: 'https://www.linkedin.com/in/dhuneshwaran-v-741935344'
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Saveetha University, Chennai, India',
                  link: '#'
                }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group cursor-pointer"
                >
                  <div className={`w-12 h-12 glass flex items-center justify-center rounded-xl transition-all group-hover:scale-110 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className={`text-xs uppercase mono transition-theme ${isDark ? 'text-slate-500' : 'text-slate-400 font-bold'}`}>{item.label}</div>
                    <div className="text-lg font-medium break-all sm:break-normal">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Functional Form */}
          <div className={`glass p-8 sm:p-10 rounded-3xl border transition-all ${isDark ? 'border-white/10 glow-purple shadow-[0_0_40px_rgba(168,85,247,0.1)]' : 'border-slate-200 shadow-xl'}`}>
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm mono mb-2 transition-theme ${isDark ? 'text-slate-500' : 'text-slate-400 font-bold'}`}>Identifier_Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${isDark ? 'bg-slate-950/50 border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20 text-white' : 'bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm mono mb-2 transition-theme ${isDark ? 'text-slate-500' : 'text-slate-400 font-bold'}`}>Source_Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${isDark ? 'bg-slate-950/50 border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20 text-white' : 'bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900'}`}
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm mono mb-2 transition-theme ${isDark ? 'text-slate-500' : 'text-slate-400 font-bold'}`}>Project_Brief</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your data challenge..."
                  className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all resize-none ${isDark ? 'bg-slate-950/50 border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20 text-white' : 'bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900'}`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg hover:-translate-y-1 
                  ${status === 'success' ? 'bg-green-500 text-white' :
                    status === 'error' ? 'bg-red-500 text-white' :
                      isDark ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-900' : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
              >
                {status === 'sending' ? (
                  <span>Transmitting...</span>
                ) : status === 'success' ? (
                  <><span>Transmission Received</span> <CheckCircle size={18} /></>
                ) : status === 'error' ? (
                  <><span>Transmission Failed</span> <AlertCircle size={18} /></>
                ) : (
                  <><span>Initialize Transmission</span> <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;