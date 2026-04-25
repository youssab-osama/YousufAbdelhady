import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin as Linkedin, FaGithub as Github } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 w-full bg-surface-container-lowest relative border-t border-surface-bright overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-primary/30 bg-primary/10">
            <span className="font-mono text-primary text-xs uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              System Ready For Connections
            </span>
          </div>
          <h2 className="font-display font-bold text-6xl md:text-[80px] text-on-surface mb-8 tracking-tighter">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">HANDSHAKE</span>
          </h2>
          <p className="font-sans text-xl text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed">
            Looking for a sharp mind to tackle complex systems? Let's connect and build something extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Native mailto for Email me */}
            <motion.a 
              href="mailto:yusufshehabi0611@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-on-surface text-background px-12 py-5 rounded-lg font-display text-xl font-bold uppercase tracking-wide hover:shadow-[0_0_25px_#e2e2e2] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail size={24} />
              EMAIL ME
            </motion.a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/yousuf-abd-el-hady-a8709318b/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-[#0A66C2] font-mono text-sm uppercase tracking-widest rounded-lg transition-all hover:bg-[#0A66C2] hover:text-white shadow-lg hover:shadow-[#0A66C2]/30"
            >
              <Linkedin size={20} className="group-hover:animate-bounce" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/Yousuf0101"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.05 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#333]/30 border border-[#333] text-on-surface font-mono text-sm uppercase tracking-widest rounded-lg transition-all hover:bg-white hover:text-black shadow-lg hover:shadow-white/20"
            >
              <Github size={20} className="group-hover:animate-pulse" />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
