import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";

const IronMark = ({ size = 40, color }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Iron" style={{ color }}>
    <path fill="currentColor" d="M11 9h42v10.5H39.5v25H53V55H11V44.5h13.5v-25H11V9Z" />
  </svg>
);

const H2 = ({ children }) => {
  const { C } = useTheme();
  return <h2 className="mono" style={{ fontSize: 12, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 16px" }}>{children}</h2>;
};

export default function Design() {
  const { C, theme } = useTheme();

  const colors = [
    ["bg", C.bg], ["panel", C.panel], ["panel2", C.panel2], ["line", C.line],
    ["ink", C.ink], ["muted", C.mut], ["accent", C.amber], ["accent ink", C.accentInk], ["safe", C.green],
  ];
  const typeScale = [
    ["Display / Bodoni Moda", "disp", "clamp(34px,5vw,56px)", 800],
    ["Heading / Bodoni Moda", "disp", 28, 700],
    ["Body / Hanken Grotesk", "body", 16, 400],
    ["Small / Hanken Grotesk", "body", 13, 500],
    ["Data / IBM Plex Mono", "mono", 15, 500],
  ];

  const navRight = (
    <Link to="/" className="flex items-center" style={{ gap: 6, color: C.mut, fontSize: 13.5, fontWeight: 500 }}>
      <ArrowLeft size={14} /> Home
    </Link>
  );

  return (
    <div>
      <Nav right={navRight} />
      <article style={{ maxWidth: 960, margin: "0 auto", padding: "16px 20px 60px" }}>
        <div style={{ paddingBottom: 24, borderBottom: `1px solid ${C.line}`, marginBottom: 34 }}>
          <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }}>Brand and design system</div>
          <h1 className="disp" style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-.02em", margin: "0 0 14px", color: C.ink }}>Iron</h1>
          <p className="body" style={{ fontSize: 17, lineHeight: 1.55, color: C.mut, maxWidth: 600, margin: 0 }}>
            A private bank experience built on bitcoin. Monochrome by design: cool iron-grey, near-black, and platinum. Premium, old-money, the opposite of a casino.
          </p>
        </div>

        {/* Brand mark */}
        <section style={{ marginBottom: 40 }}>
          <H2>The mark</H2>
          <div className="flex" style={{ gap: 16, flexWrap: "wrap" }}>
            {[["On surface", C.panel, C.ink], ["Accent", C.amber, C.accentInk], ["Inset", C.panel2, C.ink]].map(([label, bg, fg], i) => (
              <div key={i} style={{ background: bg, border: `1px solid ${C.line}`, borderRadius: 16, padding: 28, display: "grid", placeItems: "center", minWidth: 130 }}>
                <IronMark size={44} color={fg} />
                <div className="mono" style={{ fontSize: 11, color: C.mut, marginTop: 12, textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Color */}
        <section style={{ marginBottom: 40 }}>
          <H2>Color</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 12 }}>
            {colors.map(([name, val]) => (
              <div key={name} style={{ border: `1px solid ${C.line}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ height: 56, background: val, borderBottom: `1px solid ${C.line}` }} />
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{name}</div>
                  <div className="mono" style={{ fontSize: 10.5, color: C.mut, marginTop: 2 }}>{String(val).startsWith("rgba") ? "soft" : val}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginBottom: 40 }}>
          <H2>Typography</H2>
          <div style={{ display: "grid", gap: 14 }}>
            {typeScale.map(([label, cls, size, weight], i) => (
              <div key={i} style={{ borderBottom: `1px solid ${C.line}`, paddingBottom: 14 }}>
                <div className="mono" style={{ fontSize: 11, color: C.mut, marginBottom: 6, textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</div>
                <div className={cls} style={{ fontSize: size, fontWeight: weight, color: C.ink, lineHeight: 1.1 }}>Keep your bitcoin. Spend dollars.</div>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section style={{ marginBottom: 40 }}>
          <H2>Components</H2>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr" }}>
            <div className="flex items-center" style={{ gap: 12, flexWrap: "wrap" }}>
              <button style={{ padding: "11px 18px", borderRadius: 11, border: "none", background: C.amber, color: C.accentInk, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Primary</button>
              <button style={{ padding: "11px 18px", borderRadius: 11, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Secondary</button>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.amber, border: `1px solid ${C.amber}`, borderRadius: 999, padding: "4px 10px" }}>Badge</span>
              <span className="flex items-center" style={{ gap: 6, fontSize: 13, color: C.green }}><ShieldCheck size={14} /> Safe</span>
            </div>
            <div className="flex" style={{ gap: 14, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 220px", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
                <div className="mono" style={{ fontSize: 11, color: C.mut, textTransform: "uppercase", letterSpacing: ".06em" }}>Credit line</div>
                <div className="disp tnum" style={{ fontSize: 30, fontWeight: 800, color: C.ink, marginTop: 4 }}>$5,000</div>
                <div className="tnum" style={{ fontSize: 12.5, color: C.green, marginTop: 2 }}>LTV 38% · healthy</div>
              </div>
              <div style={{ flex: "1 1 220px", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
                <div className="mono" style={{ fontSize: 11, color: C.mut, textTransform: "uppercase", letterSpacing: ".06em" }}>Collateral</div>
                <div className="disp tnum" style={{ fontSize: 30, fontWeight: 800, color: C.ink, marginTop: 4 }}>0.18 BTC</div>
                <div style={{ height: 6, borderRadius: 99, background: C.panel2, marginTop: 10, overflow: "hidden", border: `1px solid ${C.line}` }}>
                  <div style={{ width: "38%", height: "100%", background: C.green }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ paddingTop: 20, borderTop: `1px solid ${C.line}`, color: C.mut, fontSize: 13 }}>
          Full token set, components, and UI kits live in <span className="mono">/design-system</span> in the repo. Currently in {theme} mode. Edit the tokens there and the whole brand updates.
        </div>
      </article>
    </div>
  );
}
