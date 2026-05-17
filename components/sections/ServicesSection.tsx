"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SERVICES } from "@/constants";

const borders = ["rgba(6,182,212,0.3)","rgba(59,130,246,0.3)","rgba(139,92,246,0.3)","rgba(16,185,129,0.3)","rgba(249,115,22,0.3)"];
const glows  = ["rgba(6,182,212,0.05)","rgba(59,130,246,0.05)","rgba(139,92,246,0.05)","rgba(16,185,129,0.05)","rgba(249,115,22,0.05)"];

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div style={{ position:"absolute", right:0, bottom:0, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div className="cx">
        <SectionHeader label="03 — Services" title="What I" highlight="Build" subtitle="From concept to deployment — end-to-end frontend solutions." />

        <StaggerContainer className="grid-3col">
          {SERVICES.map((svc, i) => (
            <StaggerItem key={svc.id}>
              <motion.div whileHover={{ y:-6 }} className="glass" style={{ padding:28, height:"100%", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", transition:"border-color 0.3s, box-shadow 0.3s", position:"relative", overflow:"hidden", cursor:"default", borderRadius:16 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=borders[i%5]; e.currentTarget.style.boxShadow=`0 0 40px ${glows[i%5]}, 0 20px 50px rgba(0,0,0,0.3)`; (e.currentTarget.querySelector(".svc-glow") as HTMLElement|null)?.style && ((e.currentTarget.querySelector(".svc-glow") as HTMLElement).style.opacity="1"); }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.06)"; e.currentTarget.style.boxShadow="none"; (e.currentTarget.querySelector(".svc-glow") as HTMLElement|null)?.style && ((e.currentTarget.querySelector(".svc-glow") as HTMLElement).style.opacity="0"); }}>
                <div className="svc-glow text-center" style={{ position:"absolute", inset:0, background:`radial-gradient(circle at 30% 0%, ${glows[i%5]}, transparent 70%)`, opacity:0, transition:"opacity 0.4s", pointerEvents:"none" }} />
                <div className="service-icon text-center" style={{ position:"relative", zIndex:1 }}>  <svc.icon size={32} /></div>
                
                <h3 className="h3 text-center" style={{ marginBottom:12, position:"relative", zIndex:1 }}>{svc.title}</h3>
                
                <p className="body text-muted text-center" style={{ marginBottom:24, flex:1, position:"relative", zIndex:1 }}>{svc.description}</p>

                <div style={{ position:"relative", zIndex:1 }}>
                  {svc.features.map(f => (
                    <div key={f} className="check-item"><CheckCircle2 size={13} color="#06b6d4" style={{ flexShrink:0 }} />{f}</div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
