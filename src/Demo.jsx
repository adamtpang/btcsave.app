import { useState } from "react";
import { Lock, Unlock, CreditCard, Coins, ShieldCheck, Zap, Check, X, RotateCcw, ExternalLink } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";

/* Iron live demo: the credit rail as a state machine.
 * lock -> line open -> spend (approve + a real decline) -> repay -> release.
 * Real LTV math. Bitcoin and settlement are simulated and labeled as such.
 * The wedge, said out loud: the issuer holds one of three keys and cannot move your bitcoin. */

// Semantic colors that read on both themes (the palette is monochrome by design).
const APPROVE = "#1D9E75";
const DECLINE = "#D6453C";
const WARN = "#E0932F";

const BTC_LOCKED = 0.15;
const LTV_MAX = 0.6; // AAA grade, from the Score engine
const LIQ = 0.85; // collateral is sold if LTV climbs here
const START_PRICE = 100000;
const SMOOTHIE = 8;
const MOCK_TXID = "b7f3a1c9e2d84a0f6b5c3e1a9d7f2c4b8e6a0d5f3c1b9e7a2d8f4c6b0a3e5d1f7";

const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");
const sats = (usd, price) => Math.round((usd / price) * 1e8).toLocaleString("en-US");

export default function Demo() {
  const { C } = useTheme();
  const [status, setStatus] = useState("idle"); // idle | locked | open | repaid | released
  const [balance, setBalance] = useState(0); // dollars borrowed
  const [price, setPrice] = useState(START_PRICE); // BTC price, drivable to show liquidation
  const [feed, setFeed] = useState([]);
  const [flash, setFlash] = useState(null); // { kind, text }

  const log = (kind, text) => setFeed((f) => [{ kind, text, id: f.length }, ...f].slice(0, 8));
  const buzz = (kind, text) => { setFlash({ kind, text }); setTimeout(() => setFlash(null), 2200); };

  const collateral = BTC_LOCKED * price;
  const limit = collateral * LTV_MAX;
  const available = Math.max(0, limit - balance);
  const ltv = collateral > 0 ? balance / collateral : 0;
  const ltvPct = ltv * 100;
  const healthColor = ltvPct >= LIQ * 100 ? DECLINE : ltvPct >= LTV_MAX * 100 ? WARN : APPROVE;
  const atRisk = status !== "idle" && status !== "released" && ltvPct >= LIQ * 100;

  const steps = ["idle", "locked", "open", "repaid", "released"];
  const stepIdx = steps.indexOf(status);

  // ---- actions ----
  const lock = () => {
    setStatus("locked");
    log("chain", `Locked ${BTC_LOCKED} BTC into a 2 of 3 multisig. You hold one key, Iron holds one. Iron cannot move it alone.`);
    buzz("ok", "Collateral locked. Non-custodial by construction.");
  };
  const openLine = () => {
    setStatus("open");
    log("credit", `Credit line opened: ${fmt(limit)} at ${LTV_MAX * 100}% LTV, backed by ${fmt(collateral)} of bitcoin.`);
    buzz("ok", "Line open. Spend dollars, keep your bitcoin.");
  };
  const spend = (amount, label) => {
    if (status !== "open" && status !== "repaid") return;
    if (amount > available) {
      log("decline", `Declined ${fmt(amount)} at ${label}: exceeds ${fmt(available)} available. Approving it would breach your ${LTV_MAX * 100}% limit.`);
      buzz("no", `Declined. ${fmt(amount)} would breach your safe limit.`);
      return;
    }
    setBalance((b) => b + amount);
    setStatus("open");
    log("spend", `Authorized ${fmt(amount)} at ${label}. Settled over Lightning (${sats(amount, price)} sats). Approved.`);
    buzz("ok", `Approved ${fmt(amount)} at ${label}.`);
  };
  const repay = () => {
    if (balance <= 0) return;
    log("credit", `Repaid ${fmt(balance)} in sats over Lightning. Balance cleared.`);
    setBalance(0);
    setStatus("repaid");
    buzz("ok", "Repaid. Your line is clear.");
  };
  const release = () => {
    setStatus("released");
    log("chain", `Broadcast the release. ${BTC_LOCKED} BTC returned to your wallet on-chain. The multisig is unwound.`);
    buzz("ok", "Bitcoin released. You never sold a sat.");
  };
  const reset = () => { setStatus("idle"); setBalance(0); setPrice(START_PRICE); setFeed([]); setFlash(null); };

  // ---- ui helpers ----
  const panel = { background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 20 };
  const btn = (bg, fg, on = true) => ({
    display: "flex", alignItems: "center", justifyContent: "center", gap: 9, width: "100%",
    padding: "13px", borderRadius: 12, border: "none", background: bg, color: fg,
    fontSize: 14, fontWeight: 700, cursor: on ? "pointer" : "not-allowed", opacity: on ? 1 : 0.4,
    transition: "opacity .2s",
  });
  const feedIcon = { chain: <Coins size={14} />, credit: <CreditCard size={14} />, spend: <Zap size={14} />, decline: <X size={14} />, };

  const navRight = (
    <button onClick={reset} className="flex items-center" style={{ gap: 6, background: "none", border: `1px solid ${C.line}`, borderRadius: 10, padding: "7px 12px", color: C.mut, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
      <RotateCcw size={14} /> Reset
    </button>
  );

  return (
    <div>
      <style>{`@media(min-width:860px){.demo-2{grid-template-columns:1fr 1fr !important;}}`}</style>
      <Nav right={navRight} />

      <article style={{ maxWidth: 920, margin: "0 auto", padding: "16px 20px 64px" }}>
        {/* header */}
        <div style={{ marginBottom: 20 }}>
          <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 10 }}>Live demo</div>
          <h1 className="disp" style={{ fontSize: "clamp(28px, 4.4vw, 44px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-.02em", margin: "0 0 12px", color: C.ink }}>
            A credit card the issuer cannot touch.
          </h1>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.55, color: C.mut, maxWidth: 600, margin: 0 }}>
            Lock bitcoin, borrow dollars, spend without selling, repay, and take your bitcoin back. Every step is real logic. Bitcoin and card settlement are simulated for this walkthrough and labeled where they are.
          </p>
        </div>

        {/* progress rail */}
        <div className="flex items-center" style={{ gap: 6, marginBottom: 18 }}>
          {["Lock", "Open line", "Spend", "Repay", "Release"].map((s, i) => {
            const done = i < Math.max(stepIdx, status === "open" ? 2 : stepIdx) || (i === 2 && (balance > 0 || status === "repaid" || status === "released"));
            const active = (i === 0 && status === "idle") || (i === 1 && status === "locked") || (i === 2 && status === "open" && balance === 0) || (i === 3 && (status === "open" && balance > 0)) || (i === 3 && status === "repaid") || (i === 4 && status === "repaid");
            const on = done || active;
            return (
              <div key={s} className="flex items-center" style={{ flex: 1, gap: 6 }}>
                <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: on ? C.ink : C.mut }}>{s}</span>
                {i < 4 && <span style={{ flex: 1, height: 2, borderRadius: 2, background: done ? APPROVE : C.line }} />}
              </div>
            );
          })}
        </div>

        {/* flash toast */}
        {flash && (
          <div className="flex items-center rise" style={{ gap: 9, marginBottom: 16, padding: "12px 16px", borderRadius: 12, background: flash.kind === "no" ? "rgba(214,69,60,.1)" : "rgba(29,158,117,.1)", border: `1px solid ${flash.kind === "no" ? DECLINE : APPROVE}`, color: C.ink, fontSize: 14, fontWeight: 600 }}>
            {flash.kind === "no" ? <X size={16} color={DECLINE} /> : <Check size={16} color={APPROVE} />} {flash.text}
          </div>
        )}

        <div className="demo-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, alignItems: "start" }}>
          {/* ---- dashboard ---- */}
          <div style={{ display: "grid", gap: 16 }}>
            {/* collateral + line */}
            <div style={panel}>
              <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                <span style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Position</span>
                <span className="flex items-center" style={{ gap: 6, fontSize: 12, color: APPROVE }}><ShieldCheck size={14} /> non-custodial</span>
              </div>
              <div style={{ display: "grid", gap: 9 }}>
                {[
                  ["Collateral locked", status === "idle" ? "0 BTC" : `${BTC_LOCKED} BTC`, status === "idle" ? "nothing locked yet" : `${fmt(collateral)} at ${fmt(price)}/BTC`],
                  ["Credit limit", status === "idle" || status === "locked" ? "$0" : fmt(limit), `${LTV_MAX * 100}% of collateral`],
                  ["Available to spend", status === "idle" || status === "locked" ? "$0" : fmt(available), "grows back as you repay"],
                  ["Balance owed", fmt(balance), balance > 0 ? `${sats(balance, price)} sats` : "nothing borrowed"],
                ].map(([k, v, note], i) => (
                  <div key={i} className="flex items-center justify-between" style={{ padding: "9px 0", borderTop: i ? `1px solid ${C.line}` : "none", gap: 12 }}>
                    <span style={{ color: C.mut, fontSize: 13 }}>{k}</span>
                    <span style={{ textAlign: "right" }}>
                      <span className="disp tnum" style={{ color: C.ink, fontSize: 16, fontWeight: 700 }}>{v}</span>
                      <span style={{ display: "block", color: C.mut, fontSize: 11 }}>{note}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* health gauge */}
            <div style={panel}>
              <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Loan to value</span>
                <span className="disp tnum" style={{ fontSize: 18, fontWeight: 800, color: healthColor }}>{ltvPct.toFixed(1)}%</span>
              </div>
              <div style={{ position: "relative", height: 12, borderRadius: 99, background: C.line, marginBottom: 10 }}>
                <div style={{ position: "absolute", inset: 0, width: `${Math.min(ltvPct, 100)}%`, background: healthColor, borderRadius: 99, transition: "width .35s, background .35s" }} />
                {/* markers */}
                <span style={{ position: "absolute", left: `${LTV_MAX * 100}%`, top: -4, bottom: -4, width: 2, background: WARN }} />
                <span style={{ position: "absolute", left: `${LIQ * 100}%`, top: -4, bottom: -4, width: 2, background: DECLINE }} />
              </div>
              <div className="flex items-center justify-between mono" style={{ fontSize: 10.5, color: C.mut }}>
                <span>0%</span>
                <span style={{ color: WARN }}>limit {LTV_MAX * 100}%</span>
                <span style={{ color: DECLINE }}>liquidation {LIQ * 100}%</span>
              </div>
              {atRisk && (
                <div className="flex items-center rise" style={{ gap: 8, marginTop: 12, padding: "10px 12px", borderRadius: 10, background: "rgba(214,69,60,.1)", color: C.ink, fontSize: 12.5, fontWeight: 600 }}>
                  <Zap size={14} color={DECLINE} /> Margin call: bitcoin fell far enough to reach liquidation. In production we warn you long before this and let you add collateral or repay.
                </div>
              )}
            </div>

            {/* stress test */}
            {status !== "idle" && status !== "released" && (
              <div style={panel}>
                <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Stress test</span>
                  <span className="mono" style={{ fontSize: 12, color: C.ink }}>{fmt(price)}/BTC</span>
                </div>
                <input type="range" min="30000" max="120000" step="1000" value={price} onChange={(e) => setPrice(+e.target.value)} style={{ width: "100%", accentColor: healthColor }} />
                <p className="body" style={{ fontSize: 12, color: C.mut, margin: "8px 0 0", lineHeight: 1.5 }}>
                  Drag bitcoin down. Watch loan to value climb toward liquidation. This is the risk every honest lender must show, so we show it live.
                </p>
              </div>
            )}
          </div>

          {/* ---- action rail + feed ---- */}
          <div style={{ display: "grid", gap: 16 }}>
            <div style={panel}>
              <span style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Do the next thing</span>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {status === "idle" && (
                  <button onClick={lock} style={btn(C.ink, C.bg)}><Lock size={16} /> Lock {BTC_LOCKED} BTC as collateral</button>
                )}
                {status === "locked" && (
                  <button onClick={openLine} style={btn(C.ink, C.bg)}><CreditCard size={16} /> Open my credit line</button>
                )}
                {(status === "open" || status === "repaid") && status !== "released" && (
                  <>
                    <button onClick={() => spend(SMOOTHIE, "the NS cafe")} style={btn(APPROVE, "#fff", available >= SMOOTHIE)} disabled={available < SMOOTHIE}>
                      <Zap size={16} /> Buy a smoothie ({fmt(SMOOTHIE)}) over Lightning
                    </button>
                    <button onClick={() => spend(limit + 500, "a big-ticket store")} style={btn(C.panel2, C.ink)}>
                      <X size={16} color={DECLINE} /> Try to overspend ({fmt(limit + 500)})
                    </button>
                    {balance > 0 && (
                      <button onClick={repay} style={btn(C.ink, C.bg)}><Coins size={16} /> Repay {fmt(balance)} in sats</button>
                    )}
                    {balance === 0 && status !== "idle" && (
                      <button onClick={release} style={btn(C.ink, C.bg)}><Unlock size={16} /> Release my bitcoin</button>
                    )}
                  </>
                )}
                {status === "released" && (
                  <button onClick={reset} style={btn(C.ink, C.bg)}><RotateCcw size={16} /> Run it again</button>
                )}
              </div>

              {/* multisig proof, shown once locked */}
              {status !== "idle" && (
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${C.line}` }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
                    <span className="mono" style={{ fontSize: 11, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>Collateral, on chain</span>
                    <a href={`https://mempool.space/signet/tx/${MOCK_TXID}`} target="_blank" rel="noopener noreferrer" className="flex items-center" style={{ gap: 4, fontSize: 11.5, color: C.amber, fontWeight: 600 }}>
                      signet <ExternalLink size={11} />
                    </a>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: C.ink, wordBreak: "break-all", lineHeight: 1.4 }}>{MOCK_TXID}</div>
                </div>
              )}
            </div>

            {/* tx feed */}
            <div style={panel}>
              <span style={{ fontSize: 12.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".08em" }}>What just happened</span>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {feed.length === 0 && <p className="body" style={{ fontSize: 13, color: C.mut, margin: 0 }}>Nothing yet. Lock some bitcoin to begin.</p>}
                {feed.map((e) => (
                  <div key={e.id} className="flex rise" style={{ gap: 9, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, marginTop: 1, color: e.kind === "decline" ? DECLINE : e.kind === "spend" ? APPROVE : C.mut }}>{feedIcon[e.kind] || <Check size={14} />}</span>
                    <span className="body" style={{ fontSize: 13, color: e.kind === "decline" ? DECLINE : C.ink, lineHeight: 1.45 }}>{e.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* honesty footer */}
        <div className="flex" style={{ gap: 9, alignItems: "flex-start", marginTop: 20, color: C.mut, fontSize: 12.5, lineHeight: 1.55 }}>
          <ShieldCheck size={15} color={APPROVE} style={{ flexShrink: 0, marginTop: 2 }} />
          <span>
            Built this weekend at the Arc hackathon. The LTV math, the approve and decline logic, and the state machine are real. Bitcoin locking and Lightning settlement are simulated for this walkthrough. Production uses a real 2 of 3 multisig on signet, then mainnet, and a licensed card rail. Bitcoin is the first collateral. Every liquid asset follows.
          </span>
        </div>
      </article>
    </div>
  );
}
