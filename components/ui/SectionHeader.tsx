import FadeIn from "@/components/ui/FadeIn";

interface SectionHeaderProps { label: string; title: string; highlight: string; subtitle?: string; }

export default function SectionHeader({ label, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: 64 }}>
      <FadeIn>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span className="label">{label}</span>
        </div>
        <h2 className="h2" style={{ marginBottom: 16 }}>
          {title} <span className="gradient-text">{highlight}</span>
        </h2>
        {subtitle && <p className="body text-muted" style={{ maxWidth: 520, margin: "0 auto" }}>{subtitle}</p>}
      </FadeIn>
    </div>
  );
}
