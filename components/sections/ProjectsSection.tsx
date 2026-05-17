"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { PROJECTS } from "@/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--alt">
      <div style={{ position:"absolute", left:"50%", top:0, transform:"translateX(-50%)", width:800, height:400, background:"radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div className="cx">
        <SectionHeader label="04 — Projects" title="Featured" highlight="Work" subtitle="A selection of projects that showcase my skills and passion." />
        <StaggerContainer className="grid-2col">
          {PROJECTS.map(p => (
            <StaggerItem key={p.id}>
              <motion.article whileHover={{ y:-5 }} className="glass"
                style={{ overflow:"hidden", display:"flex", flexDirection:"column", height:"100%", transition:"border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(6,182,212,0.3)"; e.currentTarget.style.boxShadow="0 0 40px rgba(6,182,212,0.07), 0 20px 50px rgba(0,0,0,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.06)"; e.currentTarget.style.boxShadow="none"; }}>

                {/* Image */}
                <div className="project-img-wrap">
                  <Image src={p.image} alt={p.title} fill style={{ objectFit:"cover", transition:"transform 0.7s ease" }}
                    sizes="(max-width:768px) 100vw, 50vw"
                    onMouseEnter={e => { (e.target as HTMLImageElement).style.transform="scale(1.08)"; }}
                    onMouseLeave={e => { (e.target as HTMLImageElement).style.transform="scale(1)"; }} />
                  <div className="project-img-overlay" />
                  {p.featured && (
                    <div style={{ position:"absolute", top:12, left:12, display:"flex", alignItems:"center", gap:5, padding:"4px 12px", borderRadius:100, background:"rgba(6,182,212,0.2)", border:"1px solid rgba(6,182,212,0.4)", color:"#06b6d4", fontSize:"0.72rem", fontWeight:600, backdropFilter:"blur(8px)" }}>
                      <Star size={10} fill="#06b6d4" />Featured
                    </div>
                  )}
                  <div className="project-actions">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding:"10px 20px", fontSize:"0.85rem" }} onClick={e=>e.stopPropagation()}>
                      <ExternalLink size={14} />Live Demo
                    </a>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 18px", borderRadius:8, background:"rgba(0,0,0,0.6)", border:"1px solid rgba(255,255,255,0.2)", color:"#fff", fontSize:"0.85rem", fontWeight:600, textDecoration:"none", backdropFilter:"blur(8px)" }} onClick={e=>e.stopPropagation()}>
                      <GitBranch size={14} />GitHub
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="project-body">
                  <h3 className="h3" style={{ marginBottom:10, transition:"color 0.3s" }}>{p.title}</h3>
                  <p className="body text-muted" style={{ marginBottom:16, flex:1 }}>{p.description}</p>
                  <div className="project-tags">
                    {p.technologies.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="project-footer">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-cyan"><ExternalLink size={13} />Live Demo</a>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline"><GitBranch size={13} />Source</a>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
