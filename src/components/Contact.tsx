import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github, FaWhatsapp as Whatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 w-full bg-surface-container-lowest relative border-t border-surface-bright overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <div className="inline-block mb-10 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-[0_0_20px_rgba(var(--primary-color-rgb),0.15)] hover:shadow-[0_0_30px_rgba(var(--primary-color-rgb),0.3)] transition-all cursor-default">
            <span className="font-mono text-primary text-sm uppercase tracking-widest font-bold flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              System Ready For Connections
            </span>
          </div>
          
          {/* Friendly 'Let's Connect' using rounded sans and bold */}
          <h2 className="font-sans font-black text-6xl md:text-[90px] text-on-surface mb-8 tracking-tighter leading-tight drop-shadow-2xl">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#a855f7] drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] glow-hover">Connect</span>
          </h2>
          
          <p className="font-sans text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Looking for a sharp mind to tackle complex systems? My inbox is always open. Whether you have a question or just want to collaborate, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.a 
              href="mailto:yusufshehabi0611@gmail.com"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-on-surface text-background px-14 py-6 rounded-full font-sans text-2xl font-bold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail size={28} />
              Email Me
            </motion.a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <motion.a
              href="https://wa.me/201553372983"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-sans text-lg font-bold rounded-full transition-all hover:bg-[#25D366] hover:text-white shadow-lg hover:shadow-[#25D366]/30 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-[#25D366] transition-all duration-300 ease-out group-hover:w-full z-0" />
              <div className="relative z-10 flex items-center gap-3">
                <Whatsapp size={24} className="group-hover:animate-bounce" />
                WhatsApp
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/yousuf-abd-el-hady-a8709318b/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#0A66C2]/10 border border-[#0A66C2]/40 text-[#0A66C2] font-sans text-lg font-bold rounded-full transition-all hover:bg-[#0A66C2] hover:text-white shadow-lg hover:shadow-[#0A66C2]/30 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-[#0A66C2] transition-all duration-300 ease-out group-hover:w-full z-0" />
              <div className="relative z-10 flex items-center gap-3">
                <Linkedin size={24} className="group-hover:animate-bounce" />
                LinkedIn
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/Yousuf0101"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#333]/30 border border-[#333] text-on-surface font-sans text-lg font-bold rounded-full transition-all hover:bg-white hover:text-black shadow-lg hover:shadow-white/20 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0" />
              <div className="relative z-10 flex items-center gap-3">
                <Github size={24} className="group-hover:animate-spin" />
                GitHub
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
