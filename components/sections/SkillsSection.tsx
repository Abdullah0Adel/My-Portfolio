"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SKILLS } from "@/constants";

const catColor: Record<string, string> = { frontend:"#06b6d4", backend:"#8b5cf6", tools:"#3b82f6" };
const catLabel: Record<string, string> = { frontend:"Frontend", backend:"Backend & CMS", tools:"Tools" };

export default function SkillsSection() {
  return (
    <section id="skills" className="section section--alt">
      <div style={{ position:"absolute", left:0, top:"50%", transform:"translateY(-50%)", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div className="cx">
        <SectionHeader label="02 — Skills" title="My Technical" highlight="Expertise" subtitle="Technologies I use to build world-class digital products." />

        {(["frontend","backend","tools"] as const).map(cat => {
          const skills = SKILLS.filter(s => s.category === cat);
          if (!skills.length) return null;
          return (
            <div key={cat} style={{ marginBottom:52 }}>
              <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
                <div style={{ width:5, height:24, borderRadius:100, background:catColor[cat] }} />
                <span className="xs font-mono" style={{ color:catColor[cat], fontWeight:600, textTransform:"uppercase", letterSpacing:"0.18em" }}>{catLabel[cat]}</span>
              </motion.div>

              <StaggerContainer className="grid-skills">
                {skills.map(skill => (
                  <StaggerItem key={skill.name}>
                    <motion.div whileHover={{ y:-6, scale:1.03 }} className="glass glass-hover skill-card"
                      onMouseEnter={e => { e.currentTarget.style.borderColor=`${catColor[cat]}50`; e.currentTarget.style.boxShadow=`0 0 28px ${catColor[cat]}12`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.06)"; e.currentTarget.style.boxShadow="none"; }}>
                      {/* glow overlay */}
                      <div style={{ position:"absolute", inset:0, background:`radial-gradient(circle at 50% 0%, ${catColor[cat]}07, transparent 70%)`, opacity:0, transition:"opacity 0.3s" }} className="skill-glow" />
                      <span style={{ fontSize:"2rem", position:"relative", zIndex:1 }}> <skill.icon size={32} /> </span>
                      <p className="xs" style={{ color:"rgba(240,246,255,0.8)", textAlign:"center", lineHeight:1.3, position:"relative", zIndex:1 }}>{skill.name}</p>
                      <div className="skill-bar-track" style={{ position:"relative", zIndex:1 }}>
                        <motion.div className="skill-bar-fill" style={{ background:catColor[cat] }}
                          initial={{ width:0 }} whileInView={{ width:`${skill.level}%` }} viewport={{ once:true }} transition={{ duration:1, delay:0.2, ease:"easeOut" }} />
                      </div>
                      <span className="xs font-mono" style={{ color:catColor[cat], fontWeight:600, position:"relative", zIndex:1 }}>{skill.level}%</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
}
