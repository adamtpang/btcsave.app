import { Link } from "react-router-dom";
import { ArrowLeft, Check, Bitcoin, CreditCard, Wallet, RefreshCw } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

const PRICE = [
  ["No annual fee", "The card is free to hold. We make money on the credit, not on tricks."],
  ["~6% to 16% APR, shown upfront", "Rate by grade (around 10% typical), always lower than unsecured credit, and you see the exact number before you borrow."],
  ["Up to 50% LTV, 60% at the top grade", "Conservative by default, with no surprise liquidations on the premium tier."],
  ["No credit check", "Your bitcoin is the qualification. No FICO, no passport test, no rejection."],
  ["Transparent all-in cost", "One clear number for trade plus FX. No hidden spread, the Wise way."],
  ["Pause or repay anytime", "It revolves like a card. Your bitcoin and its upside stay yours."],
];

const STEPS = [
  [Bitcoin, "Deposit bitcoin", "Locked in a wallet only you control."],
  [CreditCard, "Get your line", "An instant USDT credit line against it."],
  [Wallet, "Spend anywhere", "Tap the Visa card, anywhere it is accepted."],
  [RefreshCw, "Repay, revolve", "Pay back on your schedule. Your stack stays."],
];

const H2 = ({ children }) => {
  const { C } = useTheme();
  return <h2 className="mono" style={{ fontSize: 12, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 16px" }}>{children}</h2>;
};

export default function Pricing() {
  const { C } = useTheme();
  const navRight = (
    <Link to="/" className="flex items-center" style={{ gap: 6, color: C.mut, fontSize: 13.5, fontWeight: 500 }}>
      <ArrowLeft size={14} /> Home
    </Link>
  );

  return (
    <div>
      <style>{`@media(min-width:820px){.price-2{grid-template-columns:repeat(2,1fr) !important;}.price-4{grid-template-columns:repeat(4,1fr) !important;}.price-hero{grid-template-columns:1fr .9fr !important;align-items:center;}}`}</style>
      <Nav right={navRight} />
      <article style={{ maxWidth: 920, margin: "0 auto", padding: "16px 20px 60px" }}>
        {/* Hero */}
        <div className="grid price-hero" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30, paddingBottom: 28, borderBottom: `1px solid ${C.line}`, marginBottom: 32 }}>
          <div>
            <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }}>Pricing</div>
            <h1 className="disp" style={{ fontSize: "clamp(34px,5.5vw,54px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-.02em", margin: "0 0 14px", color: C.ink }}>Simple, and honest.</h1>
            <p className="body" style={{ fontSize: 16.5, lineHeight: 1.55, color: C.mut, maxWidth: 520, margin: 0 }}>
              The card industry makes its money when you lose track: penalty fees, minimum payments, a rate you never quite see. We make ours one way, on the interest you agreed to, at a number shown before you borrow a cent. Illustrative at launch.
            </p>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <IronCard width={340} holder="YOUR NAME" last4="0021" />
          </div>
        </div>

        {/* The numbers */}
        <section style={{ marginBottom: 36 }}>
          <H2>What it costs</H2>
          <div className="grid price-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {PRICE.map(([t, d], i) => (
              <div key={i} className="flex" style={{ gap: 12, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16, alignItems: "flex-start" }}>
                <Check size={18} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="disp" style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{t}</div>
                  <div style={{ color: C.mut, fontSize: 13.5, lineHeight: 1.5 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{ marginBottom: 36 }}>
          <H2>How it works</H2>
          <div className="grid price-4" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {STEPS.map(([Icon, t, d], i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: C.accentSoft, display: "grid", placeItems: "center" }}><Icon size={17} color={C.amber} /></div>
                  <span className="disp tnum" style={{ fontSize: 22, fontWeight: 800, color: C.line }}>{i + 1}</span>
                </div>
                <div className="disp" style={{ fontSize: 14.5, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{t}</div>
                <div style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.45 }}>{d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: `linear-gradient(150deg, ${C.accentSoft}, ${C.panel})`, border: `1px solid ${C.line}`, borderRadius: 20, padding: "30px 24px", textAlign: "center" }}>
          <div className="disp" style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, color: C.ink, marginBottom: 8 }}>Get the Iron card</div>
          <p className="body" style={{ color: C.mut, fontSize: 15, marginBottom: 20 }}>Join the early-access list. Keep your bitcoin, spend dollars.</p>
          <div className="flex" style={{ justifyContent: "center" }}><WaitlistForm C={C} /></div>
        </div>
      </article>
    </div>
  );
}
