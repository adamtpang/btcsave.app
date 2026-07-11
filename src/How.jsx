import { Link } from "react-router-dom";
import { Bitcoin, CreditCard, Wallet, RotateCcw, ShieldCheck, Bell, Lock, Eye, Check, ArrowRight } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

// Plain-language steps, in the user's own voice.
const STEPS = [
  {
    icon: Bitcoin,
    title: "You deposit bitcoin",
    do: "Send bitcoin into collaborative custody, a vault that needs your key to move.",
    see: "You see your bitcoin sitting safely, and the dollar credit line it unlocks. We cannot touch it, sell it, or lend it out.",
  },
  {
    icon: CreditCard,
    title: "You get a dollar credit line",
    do: "Instantly. No credit check, no income proof, no waiting. Your bitcoin is the only qualification.",
    see: "A line of up to half your bitcoin's value, ready to spend. Borrow as much or as little of it as you want.",
  },
  {
    icon: Wallet,
    title: "You spend, anywhere",
    do: "Tap your Iron Visa card in any shop, or send the dollars (USDT) to your own wallet or bank.",
    see: "Normal card spending. The shop sees dollars. Your bitcoin never moved, so there is no sale and no tax event.",
  },
  {
    icon: RotateCcw,
    title: "You repay, on your terms",
    do: "Pay back whenever you like, instant and low-fee over Lightning. There is no fixed due date and no penalty for paying early.",
    see: "Your balance drops, interest stops on what you repay, and the moment you are clear you can pull your full bitcoin back out, upside intact.",
  },
];

// LTV health bands, shown honestly.
const BANDS = [
  ["Healthy", "Below 50%", "Business as usual. Spend, repay, relax.", "green"],
  ["Heads up", "50 to 65%", "We send a friendly notice. Nothing is required yet.", "amber"],
  ["Top up", "65 to 85%", "Add a little bitcoin or repay a little. We tell you exactly how much.", "amber"],
  ["Last resort", "85%+", "Only if you ignore every warning, we sell the smallest slice needed to make you safe again. Never more.", "mut"],
];

const H2 = ({ children }) => {
  const { C } = useTheme();
  return <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 14px" }}>{children}</h2>;
};

export default function How() {
  const { C } = useTheme();

  const navRight = (
    <>
      <Link to="/pricing" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>Pricing</Link>
      <a href="#waitlist" style={{ padding: "8px 14px", borderRadius: 10, background: C.amber, color: C.accentInk, fontSize: 13, fontWeight: 700 }}>Get started</a>
    </>
  );

  const bandColor = (k) => (k === "green" ? C.green : k === "amber" ? C.amber : C.mut);

  return (
    <div>
      <style>{`
        @media(min-width:820px){
          .how-2{grid-template-columns:1fr 1fr !important;}
          .how-hero{grid-template-columns:1.1fr .9fr !important;}
        }
        @media(max-width:560px){ .nav-link{display:none;} }
      `}</style>

      <Nav right={navRight} />

      <article style={{ maxWidth: 920, margin: "0 auto", padding: "16px 20px 60px" }}>
        {/* Hero */}
        <div className="grid how-hero" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30, paddingBottom: 28, borderBottom: `1px solid ${C.line}`, marginBottom: 30, alignItems: "center" }}>
          <div>
            <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }}>How it works</div>
            <h1 className="disp" style={{ fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 16px", color: C.ink }}>
              Spend your bitcoin's value<br />without selling it.
            </h1>
            <p className="body" style={{ fontSize: 16.5, lineHeight: 1.55, color: C.mut, maxWidth: 520, margin: 0 }}>
              Four steps, no jargon. You keep your bitcoin the whole time. Here is exactly what happens, what it costs, and what we do if the price drops.
            </p>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <IronCard width={340} holder="YOUR NAME" last4="0021" />
          </div>
        </div>

        {/* The four steps */}
        <section style={{ marginBottom: 30 }}>
          <H2>The four steps</H2>
          <div style={{ display: "grid", gap: 12 }}>
            {STEPS.map(({ icon: Icon, title, do: act, see }, i) => (
              <div key={i} className="flex" style={{ gap: 16, alignItems: "flex-start", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
                <div style={{ flexShrink: 0, display: "grid", placeItems: "center", gap: 8 }}>
                  <span className="disp tnum" style={{ fontSize: 26, fontWeight: 800, color: C.amber, lineHeight: 1 }}>{i + 1}</span>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentSoft, display: "grid", placeItems: "center" }}>
                    <Icon size={18} color={C.amber} />
                  </div>
                </div>
                <div>
                  <div className="disp" style={{ fontSize: 18, fontWeight: 700, color: C.ink, marginBottom: 5 }}>{title}</div>
                  <div style={{ color: C.ink, fontSize: 14.5, lineHeight: 1.5, marginBottom: 6 }}>{act}</div>
                  <div className="flex" style={{ gap: 8, alignItems: "flex-start", color: C.mut, fontSize: 13.5, lineHeight: 1.5 }}>
                    <Eye size={15} color={C.mut} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{see}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Worked example */}
        <section style={{ marginBottom: 30 }}>
          <H2>A real example</H2>
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
            {[
              ["You deposit", "0.1 BTC", "worth about $10,000"],
              ["Your credit line", "up to $5,000", "50% of your bitcoin's value"],
              ["You spend", "$3,000", "groceries, flights, rent, anything Visa takes"],
              ["You pay in interest", "about $25 / month", "roughly 10% a year, only on what you borrowed"],
              ["You sold", "$0 of bitcoin", "no tax event, you keep all the upside"],
              ["When you repay", "0.1 BTC back", "the same coins, now possibly worth more"],
            ].map(([label, big, note], i) => (
              <div key={i} className="flex items-center justify-between" style={{ padding: "13px 16px", borderTop: i ? `1px solid ${C.line}` : "none", gap: 12 }}>
                <span style={{ color: C.mut, fontSize: 13.5, flex: "1 1 auto" }}>{label}</span>
                <span style={{ textAlign: "right", flexShrink: 0 }}>
                  <span className="disp tnum" style={{ color: C.ink, fontSize: 16, fontWeight: 700 }}>{big}</span>
                  <span style={{ display: "block", color: C.mut, fontSize: 11.5 }}>{note}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="body" style={{ fontSize: 12.5, color: C.mut, margin: "10px 2px 0", lineHeight: 1.5 }}>
            Illustrative numbers at a bitcoin price of about $100,000. Your real line and rate are shown live before you borrow a cent.
          </p>
        </section>

        {/* What if bitcoin drops */}
        <section style={{ marginBottom: 30 }}>
          <H2>What if bitcoin drops?</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.6, color: C.ink, margin: "0 0 16px" }}>
            The honest answer most lenders bury. Because you only borrow up to half your bitcoin's value, the price would have to fall more than 40% before anything happens, and we warn you at every step long before it does. You are always in control.
          </p>
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
            {BANDS.map(([name, range, body, k], i) => (
              <div key={i} className="flex" style={{ gap: 14, alignItems: "flex-start", padding: "14px 16px", borderTop: i ? `1px solid ${C.line}` : "none" }}>
                <span style={{ flexShrink: 0, width: 10, height: 10, borderRadius: 99, background: bandColor(k), marginTop: 5 }} />
                <div style={{ flex: 1 }}>
                  <div className="flex items-center" style={{ gap: 10, marginBottom: 3, flexWrap: "wrap" }}>
                    <span className="disp" style={{ fontSize: 15.5, fontWeight: 700, color: C.ink }}>{name}</span>
                    <span className="mono" style={{ fontSize: 12, color: C.mut }}>loan-to-value {range}</span>
                  </div>
                  <div style={{ color: C.mut, fontSize: 13.5, lineHeight: 1.5 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="how-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginTop: 12 }}>
            {[
              [Bell, "We warn you first", "Email, text, and in-app, with the exact amount to top up. No silent surprises."],
              [Lock, "We never rehypothecate", "Your coins are never lent out or reused. The exact thing that killed Celsius and BlockFi, we do not do."],
            ].map(([Icon, t, b], i) => (
              <div key={i} className="flex" style={{ gap: 12, alignItems: "flex-start", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <Icon size={18} color={C.amber} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="disp" style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{t}</div>
                  <div style={{ color: C.mut, fontSize: 13, lineHeight: 1.45 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What it costs */}
        <section style={{ marginBottom: 30 }}>
          <H2>What it costs, in plain language</H2>
          <div className="how-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {[
              ["No annual fee", "Holding the card costs nothing."],
              ["From ~6% to ~16% a year", "Interest by grade, around 10% typical, charged only on what you actually borrow. Borrow $1,000 for a month at 10%, pay roughly $8."],
              ["No credit check", "We never pull your credit or ask for payslips."],
              ["No exit penalty", "Repay early, leave anytime, take your bitcoin and go."],
            ].map(([t, b], i) => (
              <div key={i} className="flex" style={{ gap: 12, alignItems: "flex-start", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <Check size={18} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="disp" style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{t}</div>
                  <div style={{ color: C.mut, fontSize: 13, lineHeight: 1.45 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14 }}>
            <Link to="/pricing" className="flex items-center" style={{ gap: 7, color: C.amber, fontSize: 14, fontWeight: 600 }}>
              See full pricing <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section id="waitlist" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 24 }}>
          <div className="flex items-center" style={{ gap: 8, marginBottom: 8 }}>
            <ShieldCheck size={18} color={C.green} />
            <span className="disp" style={{ fontSize: 20, fontWeight: 800, color: C.ink }}>Ready when you are</span>
          </div>
          <p className="body" style={{ fontSize: 15, lineHeight: 1.55, color: C.mut, margin: "0 0 16px", maxWidth: 520 }}>
            Join the waitlist and we will walk you through your first deposit personally. No pressure, no jargon.
          </p>
          <WaitlistForm C={C} big cta="Join the waitlist" />
        </section>
      </article>
    </div>
  );
}
