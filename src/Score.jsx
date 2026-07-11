import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, Check, ArrowUpRight } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";

// Illustrative, transparent grading. Collateral sets the limit; reputation sets the rate.
const GRADES = [
  { g: "AAA", min: 800, ltv: 0.60, apr: 6, tone: "green" },
  { g: "A", min: 700, ltv: 0.55, apr: 8, tone: "green" },
  { g: "B", min: 600, ltv: 0.50, apr: 10, tone: "amber" },
  { g: "C", min: 500, ltv: 0.45, apr: 13, tone: "amber" },
  { g: "D", min: 0, ltv: 0.40, apr: 16, tone: "mut" },
];
const LIQ_THRESHOLD = 0.85; // line is at risk only if LTV climbs to here

const sizePts = (v) => (v >= 100000 ? 100 : v >= 10000 ? 60 : v >= 1000 ? 25 : 0);
const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");

const Field = ({ label, hint, children }) => {
  const { C } = useTheme();
  return (
    <div>
      <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{label}</span>
        {hint && <span className="mono" style={{ fontSize: 11, color: C.mut }}>{hint}</span>}
      </div>
      {children}
    </div>
  );
};

export default function Score() {
  const { C } = useTheme();
  const [btc, setBtc] = useState(0.1);
  const [btcPrice, setBtcPrice] = useState(100000);
  const [other, setOther] = useState(0);
  const [years, setYears] = useState(3);
  const [chains, setChains] = useState(2);
  const [repaid, setRepaid] = useState(false);

  const collateral = (Number(btc) || 0) * (Number(btcPrice) || 0) + (Number(other) || 0);

  // Transparent score breakdown
  const parts = [
    ["Base", 500],
    ["Years holding", Math.min(years * 30, 150)],
    ["Assets held", Math.min(chains * 15, 75)],
    ["Repayment history", repaid ? 120 : 0],
    ["Holdings size", sizePts(collateral)],
  ];
  const score = Math.max(300, Math.min(900, parts.reduce((a, [, p]) => a + p, 0)));
  const grade = GRADES.find((x) => score >= x.min);
  const limit = collateral * grade.ltv;
  const monthly = (limit * grade.apr) / 100 / 12;
  const buffer = Math.max(0, Math.round((1 - grade.ltv / LIQ_THRESHOLD) * 100));
  const toneColor = grade.tone === "green" ? C.green : grade.tone === "amber" ? C.amber : C.mut;
  const gaugePct = Math.max(0, Math.min(100, ((score - 300) / 600) * 100));

  const navRight = (
    <>
      <Link to="/pricing" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>Pricing</Link>
      <a href="#waitlist" style={{ padding: "8px 14px", borderRadius: 10, background: C.amber, color: C.accentInk, fontSize: 13, fontWeight: 700 }}>Get started</a>
    </>
  );

  const input = { width: "100%", padding: "11px 13px", borderRadius: 11, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, fontSize: 14, outline: "none" };

  return (
    <div>
      <style>{`
        @media(min-width:820px){ .score-2{grid-template-columns:1fr 1fr !important;} }
        @media(max-width:560px){ .nav-link{display:none;} }
      `}</style>
      <Nav right={navRight} />

      <article style={{ maxWidth: 920, margin: "0 auto", padding: "16px 20px 60px" }}>
        <div style={{ marginBottom: 22 }}>
          <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 10 }}>Free crypto credit score</div>
          <h1 className="disp" style={{ fontSize: "clamp(30px, 4.5vw, 46px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 12px", color: C.ink }}>
            See your borrowing power.
          </h1>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.55, color: C.mut, maxWidth: 560, margin: 0 }}>
            No credit check, no income proof. Your crypto is your qualification. Collateral sets your limit, your on-chain reputation sets your rate. Free, instant, and we never see your keys.
          </p>
        </div>

        <div className="score-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
          {/* Inputs */}
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 20, display: "grid", gap: 15, alignContent: "start" }}>
            <div className="flex" style={{ gap: 10 }}>
              <div style={{ flex: 1 }}>
                <Field label="Bitcoin to lock" hint="BTC"><input type="number" min="0" step="0.01" value={btc} onChange={(e) => setBtc(e.target.value)} style={input} /></Field>
              </div>
              <div style={{ flex: 1 }}>
                <Field label="BTC price" hint="editable"><input type="number" min="0" value={btcPrice} onChange={(e) => setBtcPrice(e.target.value)} style={input} /></Field>
              </div>
            </div>
            <Field label="Other crypto to lock" hint="USD value"><input type="number" min="0" value={other} onChange={(e) => setOther(e.target.value)} style={input} /></Field>
            <Field label="Years you have held crypto" hint={`${years} yr`}>
              <input type="range" min="0" max="12" value={years} onChange={(e) => setYears(+e.target.value)} style={{ width: "100%", accentColor: C.amber }} />
            </Field>
            <Field label="Different assets or chains you hold" hint={`${chains}`}>
              <input type="range" min="1" max="8" value={chains} onChange={(e) => setChains(+e.target.value)} style={{ width: "100%", accentColor: C.amber }} />
            </Field>
            <Field label="Repaid a crypto loan before?">
              <div className="flex" style={{ gap: 8 }}>
                {[["Yes", true], ["Not yet", false]].map(([t, v]) => (
                  <button key={t} onClick={() => setRepaid(v)} style={{ flex: 1, padding: "10px 0", borderRadius: 11, border: `1px solid ${repaid === v ? C.amber : C.line}`, background: repaid === v ? C.accentSoft : C.panel, color: repaid === v ? C.ink : C.mut, fontSize: 13.5, fontWeight: 600, cursor: "pointer" }}>{t}</button>
                ))}
              </div>
            </Field>
            <div className="mono" style={{ fontSize: 12, color: C.mut, borderTop: `1px solid ${C.line}`, paddingTop: 12 }}>
              Collateral value <span style={{ color: C.ink, fontWeight: 700 }}>{fmt(collateral)}</span>
            </div>
          </div>

          {/* Result */}
          <div style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 18, padding: 20 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span style={{ fontSize: 12, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Your grade</span>
              <span className="flex items-center" style={{ gap: 6, fontSize: 12, color: C.green }}><Shield size={14} /> non-custodial</span>
            </div>
            <div className="flex items-center" style={{ gap: 16, marginBottom: 12 }}>
              <div className="disp" style={{ fontSize: 54, fontWeight: 800, color: toneColor, lineHeight: 1 }}>{grade.g}</div>
              <div>
                <div className="disp tnum" style={{ fontSize: 26, fontWeight: 800, color: C.ink, lineHeight: 1 }}>{score}</div>
                <div className="mono" style={{ fontSize: 11.5, color: C.mut }}>out of 900</div>
              </div>
            </div>
            {/* gauge */}
            <div style={{ height: 8, borderRadius: 99, background: C.line, position: "relative", marginBottom: 18 }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${gaugePct}%`, background: toneColor, borderRadius: 99 }} />
            </div>
            <div style={{ display: "grid", gap: 9 }}>
              {[
                ["Credit limit", fmt(limit), `${Math.round(grade.ltv * 100)}% of your collateral`],
                ["Interest rate", `~${grade.apr}% APR`, "vs 20 to 30% on an unsecured card"],
                ["Monthly cost at full limit", `~${fmt(monthly)}`, "interest only, on what you borrow"],
                ["Liquidation buffer", `~${buffer}%`, "bitcoin can fall this far first, and we warn you"],
                ["Credit check", "None", "your collateral qualifies you"],
              ].map(([k, v, note], i) => (
                <div key={i} className="flex items-center justify-between" style={{ padding: "9px 0", borderTop: i ? `1px solid ${C.line}` : "none", gap: 12 }}>
                  <span style={{ color: C.mut, fontSize: 13 }}>{k}</span>
                  <span style={{ textAlign: "right" }}>
                    <span className="disp tnum" style={{ color: C.ink, fontSize: 15.5, fontWeight: 700 }}>{v}</span>
                    <span style={{ display: "block", color: C.mut, fontSize: 11 }}>{note}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How you got your grade (transparent breakdown) */}
        <section style={{ marginTop: 16 }} className="score-2">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
              <h2 className="disp" style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 12px" }}>How you got your grade</h2>
              <div style={{ display: "grid", gap: 7 }}>
                {parts.map(([label, pts], i) => (
                  <div key={i} className="flex items-center justify-between" style={{ fontSize: 13 }}>
                    <span style={{ color: C.mut }}>{label}</span>
                    <span className="tnum" style={{ color: C.ink, fontWeight: 600 }}>{i === 0 ? pts : `+${pts}`}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between" style={{ fontSize: 13.5, borderTop: `1px solid ${C.line}`, paddingTop: 8, marginTop: 2 }}>
                  <span className="disp" style={{ color: C.ink, fontWeight: 700 }}>Your score</span>
                  <span className="disp tnum" style={{ color: toneColor, fontWeight: 800 }}>{score}</span>
                </div>
              </div>
            </div>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
              <h2 className="disp" style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 12px" }}>Raise your grade</h2>
              <div style={{ display: "grid", gap: 10 }}>
                {[
                  ["Repay a loan with Iron", "the single biggest lever, +120"],
                  ["Hold longer", "+30 per year, up to 5 years"],
                  ["Diversify what you hold", "+15 per asset or chain"],
                  ["Add collateral", "larger holdings raise your tier"],
                ].map(([t, n], i) => (
                  <div key={i} className="flex" style={{ gap: 9, alignItems: "flex-start" }}>
                    <ArrowUpRight size={16} color={C.green} style={{ flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <span style={{ color: C.ink, fontSize: 13.5, fontWeight: 600 }}>{t}</span>
                      <span style={{ color: C.mut, fontSize: 12.5 }}> {n}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grade rubric */}
        <section style={{ marginTop: 16 }}>
          <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 12px" }}>How grades map to terms</h2>
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
            <div className="flex" style={{ padding: "10px 16px", borderBottom: `1px solid ${C.line}`, fontSize: 11.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".06em" }}>
              <span style={{ flex: 1 }}>Grade</span><span style={{ flex: 1, textAlign: "center" }}>Score</span><span style={{ flex: 1, textAlign: "center" }}>Max LTV</span><span style={{ flex: 1, textAlign: "right" }}>Rate</span>
            </div>
            {GRADES.map((x, i) => (
              <div key={x.g} className="flex items-center" style={{ padding: "11px 16px", borderTop: i ? `1px solid ${C.line}` : "none", background: x.g === grade.g ? C.accentSoft : "transparent" }}>
                <span className="disp" style={{ flex: 1, fontWeight: 700, color: C.ink, fontSize: 15 }}>{x.g}</span>
                <span className="mono" style={{ flex: 1, textAlign: "center", color: C.mut, fontSize: 12.5 }}>{x.min}+</span>
                <span className="tnum" style={{ flex: 1, textAlign: "center", color: C.ink, fontSize: 13.5 }}>{Math.round(x.ltv * 100)}%</span>
                <span className="tnum" style={{ flex: 1, textAlign: "right", color: C.ink, fontSize: 13.5 }}>~{x.apr}%</span>
              </div>
            ))}
          </div>
          <p className="body" style={{ fontSize: 12, color: C.mut, margin: "10px 2px 0", lineHeight: 1.5 }}>
            Illustrative and educational, not a credit offer. Real terms require identity verification and a live on-chain assessment. As you borrow and repay with Iron, your grade rises, which lifts your LTV and lowers your rate, the path toward unsecured credit.
          </p>
        </section>

        {/* CTA */}
        <section id="waitlist" style={{ marginTop: 22, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 22 }}>
          <div className="flex items-center" style={{ gap: 8, marginBottom: 8 }}>
            <TrendingUp size={18} color={C.green} />
            <span className="disp" style={{ fontSize: 19, fontWeight: 800, color: C.ink }}>Lock in your rate</span>
          </div>
          <p className="body" style={{ fontSize: 14.5, lineHeight: 1.55, color: C.mut, margin: "0 0 14px", maxWidth: 520 }}>
            Join the waitlist and we will tell you the moment your grade can become a real Iron card and credit line.
          </p>
          <WaitlistForm C={C} big cta="Join the waitlist" />
          <div className="flex items-center" style={{ gap: 8, marginTop: 12, color: C.mut, fontSize: 12.5 }}>
            <Check size={14} color={C.green} /> We never take custody of your bitcoin, and we never sell your data.
          </div>
        </section>
      </article>
    </div>
  );
}
