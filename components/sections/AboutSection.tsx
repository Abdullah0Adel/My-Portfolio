"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const stats = [
  { label: "Years Experience", value: "1+", icon: Award },
  { label: "Projects Completed", value: "4+", icon: Layers },
  { label: "Technologies", value: "12+", icon: Code2 },
  { label: "Client Satisfaction", value: "100%", icon: Zap },
];
const techStack = ["React.js","Next.js","Redux Toolkit","TypeScript","Tailwind CSS","Strapi"];

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div className="cx">
        <SectionHeader label="01 — About Me" title="Passionate about" highlight="great software" subtitle="I build scalable, beautiful web experiences that users love." />

        <div className="grid-2col-lg">
          {/* Left */}
          <FadeIn direction="left">
            <div className="glass p-8" style={{ padding:32 }}>
              <div style={{ display:"flex", gap:8, marginBottom:20 }}>
                {["#ef4444","#f59e0b","#22c55e"].map(c => <div key={c} style={{ width:12,height:12,borderRadius:"50%",background:c }} />)}
              </div>
              <p className="body text-muted" style={{ marginBottom:20 }}>
                I&apos;m a <span style={{ color:"#06b6d4", fontWeight:600 }}>Frontend Developer</span> with a deep passion for crafting modern, scalable, and responsive web applications. I thrive at the intersection of design and engineering — turning complex ideas into clean, intuitive user interfaces.
              </p>
              <p className="body text-muted" style={{ marginBottom:20 }}>
                My expertise spans the full frontend ecosystem — from architecting component libraries in{" "}
                <span style={{ color:"#3b82f6", fontWeight:600 }}>React.js</span> and <span style={{ color:"#3b82f6", fontWeight:600 }}>Next.js</span>, to managing complex state with <span style={{ color:"#8b5cf6", fontWeight:600 }}>Redux Toolkit</span>, to integrating headless CMS solutions with <span style={{ color:"#06b6d4", fontWeight:600 }}>Strapi</span>.
              </p>
              <p className="body text-muted" style={{ marginBottom:24 }}>
                I care deeply about performance, accessibility, and developer experience — writing clean, maintainable code that scales with teams and products.
              </p>
              <p className="label-sm" style={{ marginBottom:12 }}>Core Stack</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {techStack.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn direction="right">
            <StaggerContainer className="grid-2col" style={{ marginBottom:16 }}>
              {stats.map(({ label, value, icon:Icon }) => (
                <StaggerItem key={label}>
                  <div className="glass glass-hover stat-card">
                    <div className="stat-icon"><Icon size={22} color="#06b6d4" /></div>
                    <div className="stat-value">{value}</div>
                    <p className="xs text-muted" style={{ textAlign:"center" }}>{label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.5, duration:0.6 }}
              className="glass" style={{ padding:24, borderLeft:"3px solid #06b6d4" }}>
              <p className="body text-muted" style={{ fontStyle:"italic" }}>
                &ldquo;Clean code is not written by following a set of rules. You know you are working on clean code when each routine you read is pretty much what you expected.&rdquo;
              </p>
              <p className="xs font-mono" style={{ color:"#06b6d4", marginTop:10, fontWeight:600 }}>— Robert C. Martin</p>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
