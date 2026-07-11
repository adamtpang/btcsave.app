import { useState } from "react";
import { Snowflake, Copy, Eye, EyeOff, Check, Lock } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

const MOCK = { full: "4929 4100 7321 0021", masked: "•••• •••• •••• 0021", expiry: "08/29", cvv: "114" };

const Row = ({ C, label, value, copyVal, copied, copy }) => (
  <div className="flex items-center justify-between" style={{ padding: "12px 0", borderTop: `1px solid ${C.line}` }}>
    <span style={{ color: C.mut, fontSize: 13 }}>{label}</span>
    <span className="flex items-center" style={{ gap: 10 }}>
      <span className="mono" style={{ color: C.ink, fontSize: 14, letterSpacing: ".02em" }}>{value}</span>
      {copyVal && (
        <button onClick={() => copy(label, copyVal)} title="Copy" style={{ background: "none", border: "none", cursor: "pointer", color: copied === label ? C.green : C.mut, display: "grid", placeItems: "center" }}>
          {copied === label ? <Check size={15} /> : <Copy size={15} />}
        </button>
      )}
    </span>
  </div>
);

export default function CardView() {
  const { C } = useTheme();
  const [reveal, setReveal] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [copied, setCopied] = useState("");
  const [wallet, setWallet] = useState(false);

  const copy = (label, val) => {
    try { navigator.clipboard.writeText(val); setCopied(label); setTimeout(() => setCopied(""), 1400); } catch { /* clipboard unavailable */ }
  };

  const card = { background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 };

  const navRight = (
    <a href="#waitlist" style={{ padding: "8px 14px", borderRadius: 10, background: C.amber, color: C.accentInk, fontSize: 13, fontWeight: 700 }}>Get started</a>
  );

  return (
    <div>
      <style>{`@media(min-width:820px){.card-2{grid-template-columns:.95fr 1.05fr !important;}}`}</style>
      <Nav right={navRight} />
      <article style={{ maxWidth: 920, margin: "0 auto", padding: "16px 20px 60px" }}>
        <div style={{ marginBottom: 24 }}>
          <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 10 }}>Your Iron card</div>
          <h1 className="disp" style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 12px", color: C.ink }}>
            A virtual card, the instant you are approved.
          </h1>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.55, color: C.mut, maxWidth: 560, margin: 0 }}>
            Lock bitcoin, get a credit line, and a virtual Iron Visa appears in your wallet right away, like Wise. Add it to Apple Pay and tap to spend. The physical card follows in the mail.
          </p>
        </div>

        <div className="card-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, alignItems: "start" }}>
          {/* Left: card + actions */}
          <div>
            <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
              <div style={{ filter: frozen ? "grayscale(1) brightness(.7)" : "none", transition: "filter .25s" }}>
                <IronCard width={340} holder="YOUR NAME" last4="0021" />
              </div>
              {frozen && (
                <div className="flex items-center" style={{ position: "absolute", gap: 8, padding: "8px 14px", borderRadius: 99, background: C.bg, border: `1px solid ${C.line}`, color: C.ink, fontSize: 13, fontWeight: 700 }}>
                  <Snowflake size={15} /> Frozen
                </div>
              )}
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
              <button onClick={() => setWallet(true)} className="flex items-center justify-center" style={{ gap: 9, width: "100%", padding: "13px", borderRadius: 12, border: "none", background: C.ink, color: C.bg, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                Add to Apple Wallet
              </button>
              {wallet && <div style={{ fontSize: 12.5, color: C.mut, textAlign: "center" }}>Available at launch. <a href="#waitlist" style={{ color: C.amber, fontWeight: 600 }}>Join the waitlist</a> to be first.</div>}
              <button onClick={() => setFrozen((f) => !f)} className="flex items-center justify-center" style={{ gap: 9, width: "100%", padding: "13px", borderRadius: 12, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                <Snowflake size={16} color={frozen ? C.amber : C.mut} /> {frozen ? "Unfreeze card" : "Freeze card"}
              </button>
            </div>
          </div>

          {/* Right: details + credit */}
          <div style={{ display: "grid", gap: 16 }}>
            <div style={card}>
              <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Card details</span>
                <button onClick={() => setReveal((r) => !r)} className="flex items-center" style={{ gap: 6, background: "none", border: "none", cursor: "pointer", color: C.mut, fontSize: 12.5 }}>
                  {reveal ? <EyeOff size={14} /> : <Eye size={14} />} {reveal ? "Hide" : "Reveal"}
                </button>
              </div>
              <Row C={C} copied={copied} copy={copy} label="Card number" value={reveal ? MOCK.full : MOCK.masked} copyVal={reveal ? MOCK.full.replace(/\s/g, "") : null} />
              <Row C={C} copied={copied} copy={copy} label="Expiry" value={reveal ? MOCK.expiry : "••/••"} />
              <Row C={C} copied={copied} copy={copy} label="CVV" value={reveal ? MOCK.cvv : "•••"} />
            </div>

            <div style={card}>
              <span style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Your credit line</span>
              <div style={{ display: "grid", gap: 9, marginTop: 10 }}>
                {[["Available to spend", "$5,000"], ["Current balance", "$0"], ["Interest rate", "~10% APR"], ["Backed by", "0.1 BTC"]].map(([k, v], i) => (
                  <div key={i} className="flex items-center justify-between" style={{ padding: "9px 0", borderTop: i ? `1px solid ${C.line}` : "none" }}>
                    <span style={{ color: C.mut, fontSize: 13 }}>{k}</span>
                    <span className="disp tnum" style={{ color: C.ink, fontSize: 16, fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex" style={{ gap: 9, alignItems: "flex-start", color: C.mut, fontSize: 12.5, lineHeight: 1.5 }}>
              <Lock size={14} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>Preview of the Iron app. Card details are illustrative. Real issuance is via our Visa principal-member partner after you join and verify, and your bitcoin stays in collaborative custody the whole time.</span>
            </div>
          </div>
        </div>

        <section id="waitlist" style={{ marginTop: 26, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 22 }}>
          <div className="disp" style={{ fontSize: 19, fontWeight: 800, color: C.ink, marginBottom: 8 }}>Get your card</div>
          <p className="body" style={{ fontSize: 14.5, lineHeight: 1.55, color: C.mut, margin: "0 0 14px", maxWidth: 520 }}>Join the waitlist and we will issue your virtual Iron card the moment you are approved.</p>
          <WaitlistForm C={C} big cta="Join the waitlist" />
        </section>
      </article>
    </div>
  );
}
