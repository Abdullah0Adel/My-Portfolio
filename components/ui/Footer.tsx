"use client";

import { Code2, Heart } from "lucide-react";

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="footer">
      <div className="footer-inner">
        <button className="nav-logo" onClick={() => go("hero")}>
          <div className="nav-logo-icon"><Code2 size={14} color="white" /></div>
          <span className="font-display" style={{ fontWeight:700, fontSize:"0.95rem", color:"var(--text-primary)" }}>
            Alex<span className="gradient-text">Morgan</span>
          </span>
        </button>

        <p className="xs" style={{ color:"rgba(240,246,255,0.3)", display:"flex", alignItems:"center", gap:5 }}>
          © {new Date().getFullYear()} Alex Morgan. Made with <Heart size={11} fill="#ef4444" color="#ef4444" /> using Next.js & TypeScript
        </p>

        <div style={{ display:"flex", gap:20 }}>
          {["Hero","About","Projects","Contact"].map(item => (
            <button key={item} className="xs" onClick={() => go(item.toLowerCase())}
              style={{ color:"rgba(240,246,255,0.35)", background:"none", border:"none", cursor:"pointer", transition:"color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color="#06b6d4"; }}
              onMouseLeave={e => { e.currentTarget.style.color="rgba(240,246,255,0.35)"; }}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
