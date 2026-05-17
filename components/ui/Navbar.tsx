"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_ITEMS } from "@/constants";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = NAV_ITEMS.map(n => n.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="nav-wrap"
      >
        <div className={`nav-inner${scrolled ? " scrolled" : ""}`}>
          {/* Logo */}
          <button className="nav-logo" onClick={() => go("#hero")}>
            <div className="nav-logo-icon"><Code2 size={16} color="white" /></div>
            <span className="font-display" style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>
              <span className="gradient-text">Abdullah</span>Adel
            </span>
          </button>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_ITEMS.map(item => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <button key={id} className={`nav-link${isActive ? " active" : ""}`} onClick={() => go(item.href)}>
                  {isActive && <motion.div layoutId="nav-pill" className="nav-active-bg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                  <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button className="btn-primary nav-hire" style={{ padding: "8px 20px", fontSize: "0.85rem" }} onClick={() => go("#contact")}>
              Hire Me
            </button>
            <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.22 }}>
            {NAV_ITEMS.map((item, i) => (
              <motion.button key={item.href} className={`mobile-nav-link${active === item.href.replace("#", "") ? " active" : ""}`}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                onClick={() => go(item.href)}>
                {item.label}
              </motion.button>
            ))}
            <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <button className="btn-primary w-full" style={{ width: "100%", justifyContent: "center", padding: 12 }} onClick={() => go("#contact")}>
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
