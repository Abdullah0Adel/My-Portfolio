"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2 as Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  github: GitBranch,
  linkedin: Linkedin,
  mail: Mail,
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

export default function HeroSection() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {/* Background glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "35%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />
      </div>

      {/* Floating dots */}
      {[0,1,2,3,4,5].map(i => (
        <motion.div key={i}
          style={{ position: "absolute", width: i%2===0?3:2, height: i%2===0?3:2, borderRadius:"50%", background:"#06b6d4", left:`${12+i*14}%`, top:`${20+(i%3)*22}%`, boxShadow:"0 0 8px rgba(6,182,212,0.7)", pointerEvents:"none" }}
          animate={{ y:[0,-18,0], opacity:[0.3,0.9,0.3] }}
          transition={{ duration: 4+i*0.7, repeat:Infinity, ease:"easeInOut", delay:i*0.5 }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={item} style={{ display:"flex", justifyContent:"center", marginBottom:32 }}>
            <span className="label"><Sparkles size={12} />Available for freelance work</span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <h1 className="h1" style={{ marginBottom: 16 }}>
              Hi, I&apos;m{" "}
              <span className="gradient-text glow-text">Abdullah Adel</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={item}>
            <p style={{ fontSize: "1.3rem", fontWeight: 500, color: "rgba(240,246,255,0.55)", marginBottom: 20, letterSpacing:"0.04em" }}>
              <span style={{ color:"#06b6d4" }}>{"<"}</span>
              {" Frontend Developer "}
              <span style={{ color:"#06b6d4" }}>{"/>"}</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={item}>
            <p className="body-lg text-muted" style={{ maxWidth: 600, margin: "0 auto 40px" }}>
              I craft pixel-perfect, high-performance web applications with modern technologies. Specializing in{" "}
              <span style={{ color:"#06b6d4" }}>React.js</span>,{" "}
              <span style={{ color:"#3b82f6" }}>Next.js</span>, and{" "}
              <span style={{ color:"#8b5cf6" }}>TypeScript</span> — turning complex problems into elegant digital experiences.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:16, marginBottom:40 }}>
            <a href="/cv.pdf" download className="btn-primary"><Download size={16} />Download CV</a>
            <button className="btn-secondary" onClick={() => go("projects")}><span>View Projects</span><ArrowRight size={16} /></button>
          </motion.div>

          {/* Social */}
          <motion.div variants={item} style={{ display:"flex", justifyContent:"center", gap:12 }}>
            {SOCIAL_LINKS.map(link => {
              const Icon = link.icon;
              return (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  aria-label={link.label} className="icon-btn"
                  whileHover={{ scale:1.1, y:-3 }} whileTap={{ scale:0.95 }}>
                  {Icon && <Icon size={18} strokeWidth={1.5} />}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2, duration:1 }}
          style={{ position:"absolute", bottom:-80, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
          <span className="xs font-mono" style={{ color:"rgba(240,246,255,0.3)", letterSpacing:"0.2em", textTransform:"uppercase" }}>Scroll</span>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity, ease:"easeInOut" }}
            style={{ width:1, height:32, background:"linear-gradient(to bottom, rgba(6,182,212,0.6), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
