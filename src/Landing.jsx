import { useState } from "react";
import { Link } from "react-router-dom";
import { Wallet, Repeat, ShieldCheck, ArrowRight, Bitcoin, TrendingUp, Check, Lock } from "lucide-react";
import { useTheme } from "./theme.jsx";
import { MARKETS } from "./lib.js";
import Nav from "./components/Nav.jsx";
import PhoneMock from "./components/PhoneMock.jsx";
import SavingsCalendar from "./components/SavingsCalendar.jsx";

function WaitlistForm({ C, big }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="flex items-center" style={{ gap: 9, color: C.green, fontSize: 14, fontWeight: 600 }}>
        <Check size={18} /> You are on the list. We will be in touch.
      </div>
    );
  }
  return (
    <form className="wl-form" onSubmit={(e) => { e.preventDefault(); if (email.trim()) setDone(true); }}
      style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: big ? 460 : 420 }}>
      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        style={{ flex: "1 1 200px", minWidth: 0, padding: "12px 14px", borderRadius: 11, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, fontSize: 14, outline: "none" }} />
      <button type="submit"
        style={{ padding: "12px 18px", borderRadius: 11, border: "none", background: C.amber, color: C.accentInk, fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
        Get early access
      </button>
    </form>
  );
}

export default function Landing() {
  const { C } = useTheme();
  const [market, setMarket] = useState("PH");
  const [weekly, setWeekly] = useState(25);

  const steps = [
    [Wallet, "Connect your e-wallet", "Link GCash, DANA, or MoMo in seconds. The money you already use, every day."],
    [Repeat, "Set your weekly amount", "Pick how much to stack each week. Start from $5. Change or pause it any time."],
    [ShieldCheck, "We buy, you own", "Every week we auto-buy bitcoin and send it to a wallet only you control."],
  ];

  const features = [
    [Repeat, "One job, done well", "No trading screens, no 200 coins, no charts to watch. Just a weekly bitcoin buy that runs itself."],
    [Wallet, "Your money's rails", "Funded straight from the e-wallets in your pocket. No bank wire, no card friction."],
    [Lock, "Your keys, always", "Non-custodial by default. Your bitcoin lands in a wallet only you control, never held hostage."],
    [TrendingUp, "Save in hard money", "Turn a small weekly habit into a long-term store of value, automatically."],
  ];

  const faqs = [
    ["Is my bitcoin safe?", "Yes. Your bitcoin lands in self-custody, a wallet only you control. Iron never takes custody of your funds, so there is no exchange that can freeze or lose them."],
    ["What does it cost?", "A small, transparent fee on each buy. No hidden spreads and no monthly subscription. You always see exactly what you pay."],
    ["What if I want to stop?", "Pause or cancel any time, instantly. It is your money and your schedule."],
    ["Do I need to know anything about crypto?", "No. If you can use GCash, you can use Iron. We handle the bitcoin part for you."],
    ["Which countries can use it?", "We are launching in the Philippines first, with Indonesia and Vietnam next. Join the list to hear when we reach you."],
  ];

  const navRight = (
    <>
      <a href="#how" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>How it works</a>
      <a href="#faq" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>FAQ</a>
      <a href="#get-started" style={{ padding: "8px 14px", borderRadius: 10, background: C.amber, color: C.accentInk, fontSize: 13, fontWeight: 700 }}>Get started</a>
    </>
  );

  return (
    <div>
      <style>{`
        @media(min-width:900px){
          .hero-grid{grid-template-columns:1.05fr .95fr !important; align-items:center;}
          .steps-grid{grid-template-columns:repeat(3,1fr) !important;}
          .feat-grid{grid-template-columns:repeat(2,1fr) !important;}
        }
        @media(min-width:760px){ .cal-grid{grid-template-columns:1.1fr .9fr !important;} }
        @media(max-width:620px){ .nav-link{display:none;} }
        .lift{transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;}
        .lift:hover{transform:translateY(-3px);}
      `}</style>

      <Nav right={navRight} />

      {/* HERO */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "26px 18px 8px" }}>
        <div className="grid hero-grid rise" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 34 }}>
          <div>
            <div className="flex items-center" style={{ gap: 8, border: `1px solid ${C.line}`, background: C.panel, borderRadius: 999, padding: "5px 12px", width: "fit-content", marginBottom: 18 }}>
              <span style={{ width: 7, height: 7, borderRadius: 99, background: C.amber, boxShadow: `0 0 10px ${C.amber}` }} />
              <span style={{ fontSize: 11.5, color: C.mut, letterSpacing: ".02em" }}>Bitcoin savings, on autopilot</span>
            </div>
            <h1 className="disp" style={{ fontSize: "clamp(34px, 5vw, 54px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-.02em", margin: "0 0 16px", color: C.ink }}>
              Stack bitcoin every week.<br />Without thinking about it.
            </h1>
            <p className="body" style={{ fontSize: 16.5, lineHeight: 1.55, color: C.mut, maxWidth: 520, margin: "0 0 22px" }}>
              Iron automatically buys a little bitcoin for you every week, straight from GCash, DANA, or MoMo. It lands in a wallet only you control. No trading, no charts, just saving.
            </p>
            <WaitlistForm C={C} big />
            <div className="flex items-center" style={{ gap: 8, marginTop: 16, color: C.mut, fontSize: 12.5 }}>
              <ShieldCheck size={15} color={C.green} /> Self-custody by default. Your keys, your bitcoin.
            </div>
          </div>

          <div>
            <PhoneMock market={market} weekly={weekly} C={C} />
            <div style={{ marginTop: 14, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: "12px 14px" }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: C.mut }}>Try it: weekly auto-buy</span>
                <span className="disp tnum" style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>${weekly}/wk</span>
              </div>
              <input type="range" min={5} max={200} step={5} value={weekly} onChange={(e) => setWeekly(parseFloat(e.target.value))}
                style={{ width: "100%", accentColor: C.amber, cursor: "pointer" }} />
              <div className="flex" style={{ gap: 6, marginTop: 12 }}>
                {Object.entries(MARKETS).map(([k, v]) => (
                  <button key={k} onClick={() => setMarket(k)}
                    style={{ flex: 1, border: `1px solid ${market === k ? C.amber : C.line}`, background: market === k ? C.accentSoft : "transparent", color: C.ink, borderRadius: 9, padding: "7px 0", cursor: "pointer", fontSize: 13 }}>
                    {v.flag} {k}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", color: C.mut, fontSize: 10.5, marginTop: 8 }}>Illustrative projection. Not financial advice.</div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "26px 18px" }}>
        <div className="flex items-center" style={{ flexWrap: "wrap", gap: "10px 22px", justifyContent: "center", color: C.mut, fontSize: 13 }}>
          <span style={{ fontWeight: 600, color: C.ink }}>Funded by</span>
          <span>🇵🇭 GCash</span><span>🇮🇩 DANA</span><span>🇻🇳 MoMo</span>
          <span style={{ opacity: .4 }}>|</span>
          <span className="flex items-center" style={{ gap: 6 }}><Lock size={13} color={C.green} /> Non-custodial</span>
          <span className="flex items-center" style={{ gap: 6 }}><Bitcoin size={13} color={C.amber} /> Bitcoin only</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ maxWidth: 1080, margin: "0 auto", padding: "30px 18px" }}>
        <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 18px" }}>How it works</h2>
        <div className="grid steps-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {steps.map(([Icon, t, d], i) => (
            <div key={i} className="lift" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 20 }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 11, background: C.accentSoft, display: "grid", placeItems: "center" }}>
                  <Icon size={19} color={C.amber} />
                </div>
                <span className="disp tnum" style={{ fontSize: 30, fontWeight: 800, color: C.line }}>{i + 1}</span>
              </div>
              <div className="disp" style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, color: C.ink }}>{t}</div>
              <div style={{ color: C.mut, fontSize: 14, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "30px 18px" }}>
        <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 18px" }}>Why Iron</h2>
        <div className="grid feat-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {features.map(([Icon, t, d], i) => (
            <div key={i} className="flex" style={{ gap: 14, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 20, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 11, background: C.accentSoft, display: "grid", placeItems: "center" }}>
                <Icon size={20} color={C.amber} />
              </div>
              <div>
                <div className="disp" style={{ fontSize: 17, fontWeight: 700, marginBottom: 5, color: C.ink }}>{t}</div>
                <div style={{ color: C.mut, fontSize: 14, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAVINGS CALENDAR */}
      <SavingsCalendar />

      {/* MARKETS */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "30px 18px" }}>
        <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: "26px 22px", textAlign: "center" }}>
          <div className="disp" style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 800, color: C.ink, letterSpacing: "-.01em" }}>Launching in the Philippines first</div>
          <p style={{ color: C.mut, fontSize: 15, maxWidth: 540, margin: "10px auto 18px", lineHeight: 1.55 }}>
            Home to one of the highest bitcoin adoption rates on earth and a $35.6B yearly remittance flow. Indonesia and Vietnam are next.
          </p>
          <div className="flex items-center" style={{ justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            {Object.entries(MARKETS).map(([k, v], i) => (
              <div key={k} style={{ border: `1px solid ${i === 0 ? C.amber : C.line}`, background: i === 0 ? C.accentSoft : "transparent", borderRadius: 12, padding: "9px 16px", fontSize: 14, color: C.ink }}>
                {v.flag} {v.name} <span style={{ color: C.mut, fontSize: 12 }}>{i === 0 ? "· launching" : "· soon"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ maxWidth: 760, margin: "0 auto", padding: "30px 18px" }}>
        <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 18px" }}>Questions</h2>
        <div style={{ display: "grid", gap: 10 }}>
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: "16px 18px" }}>
              <div className="disp" style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 6, color: C.ink }}>{q}</div>
              <div style={{ color: C.mut, fontSize: 14, lineHeight: 1.55 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" style={{ maxWidth: 1080, margin: "0 auto", padding: "20px 18px 40px" }}>
        <div style={{ background: `linear-gradient(150deg, ${C.accentSoft}, ${C.panel})`, border: `1px solid ${C.line}`, borderRadius: 22, padding: "34px 24px", textAlign: "center" }}>
          <div className="disp" style={{ fontSize: "clamp(24px,3.4vw,34px)", fontWeight: 800, color: C.ink, letterSpacing: "-.01em", marginBottom: 8 }}>Start stacking sats</div>
          <p style={{ color: C.mut, fontSize: 15, marginBottom: 20 }}>Join the early access list. Be first to stack when we launch in your country.</p>
          <div className="flex" style={{ justifyContent: "center" }}>
            <WaitlistForm C={C} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${C.line}` }}>
        <div className="flex items-center justify-between" style={{ maxWidth: 1080, margin: "0 auto", padding: "20px 18px", flexWrap: "wrap", gap: 12 }}>
          <div className="flex items-center" style={{ gap: 9 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: C.amber, display: "grid", placeItems: "center" }}>
              <Bitcoin size={15} color={C.accentInk} strokeWidth={2.4} />
            </div>
            <span className="disp" style={{ fontWeight: 800, fontSize: 15, color: C.ink }}>Iron</span>
            <span style={{ color: C.mut, fontSize: 12.5 }}>· Stack bitcoin every week.</span>
          </div>
          <div className="flex items-center" style={{ gap: 18, fontSize: 13, color: C.mut }}>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
            <Link to="/investors">For investors <ArrowRight size={12} style={{ display: "inline", verticalAlign: "middle" }} /></Link>
          </div>
        </div>
        <div style={{ textAlign: "center", color: C.mut, fontSize: 11, paddingBottom: 22 }}>
          Bitcoin is volatile. This is not financial advice. © 2026 Iron.
        </div>
      </footer>
    </div>
  );
}
