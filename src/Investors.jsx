import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Landmark, Lock, Zap } from "lucide-react";
import { useTheme } from "./theme.jsx";
import { usd0, num } from "./lib.js";
import Nav from "./components/Nav.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

// Two credible shapes of the same loan book. Both illustrative.
const PRESETS = [
  { key: "early", label: "Early book", users: 6000, collateral: 8000, util: 0.35, spread: 4 },
  { key: "scale", label: "SE-Asia scale", users: 50000, collateral: 5000, util: 0.30, spread: 4 },
];

// Stated assumptions behind the secondary revenue line.
const SPEND_TURNOVER = 3;   // drawn balance cycles ~3x/yr as card spend
const INTERCHANGE_FX = 0.012; // ~1.2% all-in on card spend (interchange + thin FX)
const MRR_MILESTONE = 100_000; // first real milestone: $100k MRR ($1.2M ARR); scale target is $3M ARR

const compact = (n) => {
  if (n >= 1e9) return "$" + (n / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1e3) return "$" + Math.round(n / 1e3) + "k";
  return usd0(n);
};

const Stat = ({ C, label, value, sub, accent }) => (
  <div style={{ background: C.panel2, border: `1px solid ${C.line}`, borderRadius: 14, padding: 12 }}>
    <div style={{ color: C.mut, fontSize: 11, letterSpacing: ".04em", textTransform: "uppercase" }}>{label}</div>
    <div className="disp tnum" style={{ color: accent || C.ink, fontSize: 22, fontWeight: 700, lineHeight: 1.1, marginTop: 4 }}>{value}</div>
    {sub && <div className="tnum" style={{ color: C.mut, fontSize: 11, marginTop: 2 }}>{sub}</div>}
  </div>
);

const Slider = ({ C, label, val, set, min, max, step, fmt }) => (
  <div style={{ marginBottom: 12 }}>
    <div className="flex justify-between items-baseline" style={{ marginBottom: 4 }}>
      <span style={{ color: C.mut, fontSize: 12 }}>{label}</span>
      <span className="disp tnum" style={{ color: C.ink, fontSize: 15, fontWeight: 700 }}>{fmt(val)}</span>
    </div>
    <input type="range" min={min} max={max} step={step} value={val}
      onChange={(e) => set(parseFloat(e.target.value))}
      style={{ width: "100%", accentColor: C.amber, cursor: "pointer" }} />
  </div>
);

const WHY = [
  [Lock, "Non-custodial by construction", "2-of-3 collaborative multisig, the user holds a key. Rehypothecation is structurally impossible, so we sidestep the exact failure that killed Celsius and BlockFi."],
  [ShieldCheck, "Overcollateralized, near-zero losses", "40 to 50% LTV plus transparent auto-liquidation means charge-offs are a fraction of Chase's 5 to 6%. We keep more of the spread and we do not blow up."],
  [Landmark, "Net interest spread is the core", "The Chase engine on a real balance sheet. The loan book is funded by a debt facility (debt, never equity), so the company is not diluted to fund lending."],
  [Zap, "Card plus local rails, Lightning settlement", "A spendable Visa card and local rails in emerging markets that pure BTC lenders lack, with instant, low-fee Lightning for repayment and top-ups."],
];

export default function Investors() {
  const { C } = useTheme();
  const [users, setUsers] = useState(50000);
  const [collateral, setCollateral] = useState(5000);
  const [util, setUtil] = useState(0.30);
  const [spread, setSpread] = useState(4);

  const totalCollateral = users * collateral;
  const book = totalCollateral * util;              // average drawn balance
  const netInterest = book * (spread / 100);        // core: net interest income
  const cardSpend = book * SPEND_TURNOVER;          // annual card spend
  const interchangeFx = cardSpend * INTERCHANGE_FX; // interchange + thin FX
  const rev = netInterest + interchangeFx;          // total revenue / yr
  const mrr = rev / 12;                             // monthly recurring revenue
  // annual revenue contributed per cardholder at the current terms
  const revPerUserYr = collateral * util * (spread / 100 + SPEND_TURNOVER * INTERCHANGE_FX);
  const usersFor100k = revPerUserYr > 0 ? Math.ceil((MRR_MILESTONE * 12) / revPerUserYr) : 0;

  const activePreset = PRESETS.find((p) => p.users === users && p.collateral === collateral && p.util === util && p.spread === spread)?.key;
  const applyPreset = (p) => { setUsers(p.users); setCollateral(p.collateral); setUtil(p.util); setSpread(p.spread); };

  const navRight = (
    <Link to="/" className="flex items-center" style={{ gap: 6, color: C.mut, fontSize: 13.5, fontWeight: 500 }}>
      <ArrowLeft size={14} /> Consumer site
    </Link>
  );

  return (
    <div>
      <Nav right={navRight} />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "8px 20px 40px" }}>
        <div style={{ marginBottom: 16 }}>
          <h1 className="disp" style={{ fontSize: "clamp(24px,3.2vw,32px)", fontWeight: 800, color: C.ink, letterSpacing: "-.01em", margin: "0 0 4px" }}>Iron for investors</h1>
          <p style={{ color: C.mut, fontSize: 14 }}>The interactive model behind Iron, the non-custodial bitcoin credit card. Move the levers.</p>
        </div>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr" }} className="inv-grid">
          <style>{`@media(min-width:880px){.inv-grid{grid-template-columns:1.05fr .95fr !important;}}`}</style>

          {/* LEFT: the loan-book model */}
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: 18 }}>
            <span className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em" }}>The loan book</span>
            <p style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.5, margin: "8px 0 12px" }}>
              Revenue is the <span style={{ color: C.ink }}>net interest spread</span> on the average drawn balance, plus card interchange and a thin FX margin. Overcollateralized, so charge-offs stay near zero. The first milestone is <span style={{ color: C.ink }}>$100k MRR</span>; the scale target is <span style={{ color: C.ink }}>$3M ARR</span>. Both presets clear the first milestone.
            </p>

            <div className="flex" style={{ gap: 6, marginBottom: 12 }}>
              {PRESETS.map((p) => (
                <button key={p.key} onClick={() => applyPreset(p)}
                  style={{ flex: 1, border: `1px solid ${activePreset === p.key ? C.amber : C.line}`, background: activePreset === p.key ? C.accentSoft : "transparent", color: activePreset === p.key ? C.ink : C.mut, borderRadius: 9, padding: "8px 9px", cursor: "pointer", fontSize: 12, fontWeight: 600, textAlign: "left" }}>
                  {p.label}
                  <div style={{ fontWeight: 400, fontSize: 10.5, marginTop: 2, color: C.mut }}>{num(p.users)} users · {usd0(p.collateral)} each</div>
                </button>
              ))}
            </div>

            <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
              <Stat C={C} label="Loan book (drawn)" value={compact(book)} sub={`${num(users)} users · ${Math.round(util * 100)}%`} />
              <Stat C={C} label="Revenue / yr" value={compact(rev)} sub={`net interest + interchange`} />
              <Stat C={C} label="MRR" value={compact(mrr)} sub={`per month`} accent={mrr >= MRR_MILESTONE ? C.green : C.amber} />
              <Stat C={C} label="Revenue / user / yr" value={compact(revPerUserYr)} sub={`blended`} />
            </div>

            <Slider C={C} label="Cardholders" val={users} set={setUsers} min={2500} max={300000} step={2500} fmt={num} />
            <Slider C={C} label="Avg bitcoin locked / user" val={collateral} set={setCollateral} min={2000} max={100000} step={1000} fmt={usd0} />
            <Slider C={C} label="Utilization (drawn LTV)" val={util} set={setUtil} min={0.1} max={0.5} step={0.05} fmt={(v) => `${Math.round(v * 100)}%`} />
            <Slider C={C} label="Net interest spread (borrow APR minus facility cost)" val={spread} set={setSpread} min={2} max={10} step={0.5} fmt={(v) => `${v}%`} />

            <div style={{ marginTop: 4, height: 8, borderRadius: 99, background: C.panel2, overflow: "hidden", border: `1px solid ${C.line}` }}>
              <div style={{ width: `${Math.min(100, (mrr / MRR_MILESTONE) * 100)}%`, height: "100%", background: mrr >= MRR_MILESTONE ? C.green : `linear-gradient(90deg,${C.amber},${C.amber2})`, transition: "width .25s" }} />
            </div>
            <div className="tnum" style={{ fontSize: 12, color: mrr >= MRR_MILESTONE ? C.green : C.mut, marginTop: 6 }}>
              {mrr >= MRR_MILESTONE ? "Past the $100k MRR first milestone" : `${Math.round((mrr / MRR_MILESTONE) * 100)}% to $100k MRR`}
              <span style={{ color: C.mut }}> · scale target $3M ARR ($250k MRR)</span>
            </div>
            <div style={{ color: C.mut, fontSize: 11.5, marginTop: 8, lineHeight: 1.5 }}>
              At these terms, <span style={{ color: C.ink }}>~{num(usersFor100k)} cardholders</span> reaches $100k MRR ({compact(usersFor100k * collateral)} of bitcoin locked). Within reach of the Network School and bitcoin-community beachhead.
            </div>
            <div style={{ color: C.mut, fontSize: 10.5, marginTop: 6, lineHeight: 1.5 }}>
              Illustrative. Assumes card spend cycles the drawn balance ~{SPEND_TURNOVER}x/yr at ~{Math.round(INTERCHANGE_FX * 1000) / 10}% all-in interchange and FX. Not a forecast.
            </div>
          </div>

          {/* RIGHT: why it wins + the card */}
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <div style={{ display: "grid", placeItems: "center", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: 20 }}>
              <IronCard width={300} holder="YOUR NAME" last4="0021" />
            </div>
            <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 20, padding: 18 }}>
              <span className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em" }}>Why it wins</span>
              <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
                {WHY.map(([Icon, t, d], i) => (
                  <div key={i} className="flex" style={{ gap: 12, alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 9, background: C.panel2, border: `1px solid ${C.line}`, display: "grid", placeItems: "center" }}>
                      <Icon size={15} color={C.amber} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: C.ink }}>{t}</div>
                      <div style={{ color: C.mut, fontSize: 12, lineHeight: 1.45 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/rfs" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 16, display: "block" }}>
              <div className="disp" style={{ fontSize: 14.5, fontWeight: 700, color: C.ink }}>Where Iron sits in the bitcoin thesis</div>
              <div style={{ color: C.mut, fontSize: 12.5, marginTop: 3 }}>We pressure-tested our roadmap against the bitcoin Request-for-Startups. Read it.</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
