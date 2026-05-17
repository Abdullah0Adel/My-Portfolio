"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link2 as Linkedin, Mail, Send, MapPin, Clock, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const info = [
  { icon:Mail, label:"Email", value:"hello@alexmorgan.dev", href:"mailto:hello@alexmorgan.dev" },
  { icon:MapPin, label:"Location", value:"San Francisco, CA", href:"#" },
  { icon:Clock, label:"Response Time", value:"Within 24 hours", href:"#" },
];
const socials = [
  { icon:GitBranch, label:"GitHub",   href:"https://github.com",   color:"#f0f6ff" },
  { icon:Linkedin,  label:"LinkedIn", href:"https://linkedin.com", color:"#0ea5e9" },
  { icon:Mail,      label:"Email",    href:"mailto:hello@alexmorgan.dev", color:"#06b6d4" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name:"", email:"", subject:"", message:"" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="section">
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div className="cx">
        <SectionHeader label="06 — Contact" title="Let's Build Something" highlight="Together" subtitle="Open to new opportunities, freelance projects, and collaborations. Let's talk!" />

        <div className="grid-contact">
          {/* Left */}
          <FadeIn direction="left">
            <div style={{ display:"flex", flexDirection:"column", gap:16, height:"100%" }}>
              {/* Availability */}
              <div className="glass" style={{ padding:24, borderLeft:"3px solid #22c55e" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                  <div style={{ width:10, height:10, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e" }} className="animate-pulse-dot" />
                  <span style={{ color:"#22c55e", fontWeight:600, fontSize:"0.88rem" }}>Available for Work</span>
                </div>
                <p className="small text-muted">Currently accepting new freelance projects and full-time opportunities.</p>
              </div>

              {/* Contact info */}
              <div className="glass" style={{ padding:24, display:"flex", flexDirection:"column", gap:20 }}>
                {info.map(({ icon:Icon, label, value, href }) => (
                  <a key={label} href={href} className="contact-info-row">
                    <div className="contact-icon"><Icon size={16} color="#06b6d4" /></div>
                    <div>
                      <p className="label-sm" style={{ marginBottom:2 }}>{label}</p>
                      <p className="small" style={{ color:"rgba(240,246,255,0.8)", fontWeight:500 }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="glass" style={{ padding:24, flex:1 }}>
                <p className="label-sm" style={{ marginBottom:14 }}>Follow Me</p>
                <div style={{ display:"flex", gap:10 }}>
                  {socials.map(({ icon:Icon, label, href, color }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      aria-label={label} className="icon-btn"
                      whileHover={{ scale:1.1, y:-3 }} whileTap={{ scale:0.95 }}
                      onMouseEnter={e => { e.currentTarget.style.color=color; e.currentTarget.style.borderColor=`${color}40`; e.currentTarget.style.background=`${color}10`; }}
                      onMouseLeave={e => { e.currentTarget.style.color="rgba(240,246,255,0.6)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}>
                      <Icon size={18} strokeWidth={1.5} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right">
            <div className="glass" style={{ padding:32 }}>
              <h3 className="h3" style={{ marginBottom:24 }}>Send me a message</h3>
              <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:18 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 }}>
                  <div>
                    <p className="label-sm" style={{ marginBottom:8 }}>Your Name *</p>
                    <input type="text" required placeholder="John Doe" value={form.name}
                      onChange={e => setForm({...form, name:e.target.value})} className="input" />
                  </div>
                  <div>
                    <p className="label-sm" style={{ marginBottom:8 }}>Email Address *</p>
                    <input type="email" required placeholder="john@company.com" value={form.email}
                      onChange={e => setForm({...form, email:e.target.value})} className="input" />
                  </div>
                </div>
                <div>
                  <p className="label-sm" style={{ marginBottom:8 }}>Subject *</p>
                  <input type="text" required placeholder="Project Inquiry / Collaboration" value={form.subject}
                    onChange={e => setForm({...form, subject:e.target.value})} className="input" />
                </div>
                <div>
                  <p className="label-sm" style={{ marginBottom:8 }}>Message *</p>
                  <textarea required rows={5} placeholder="Tell me about your project, timeline, and budget..." value={form.message}
                    onChange={e => setForm({...form, message:e.target.value})} className="input" style={{ resize:"none" }} />
                </div>
                <motion.button type="submit" whileHover={{ scale:1.02, y:-2 }} whileTap={{ scale:0.98 }}
                  disabled={status==="sending"||status==="sent"}
                  style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:10, padding:"16px", borderRadius:12, fontWeight:600, fontSize:"0.95rem", cursor:status==="sending"?"wait":"pointer", border:"none", background:status==="sent" ? "linear-gradient(135deg,#22c55e,#16a34a)" : "linear-gradient(135deg,#06b6d4,#3b82f6)", color:"#fff", boxShadow:status==="sent" ? "0 0 28px rgba(34,197,94,0.3)" : "0 0 28px rgba(6,182,212,0.25)", transition:"all 0.3s ease" }}>
                  {status==="idle" && <><Send size={16} />Send Message<ArrowRight size={16} /></>}
                  {status==="sending" && <><div className="animate-spin" style={{ width:16, height:16, border:"2px solid #fff", borderTopColor:"transparent", borderRadius:"50%" }} />Sending...</>}
                  {status==="sent" && "✓ Message Sent Successfully!"}
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
