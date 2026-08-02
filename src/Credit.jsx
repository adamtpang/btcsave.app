import { Link } from "react-router-dom";
import { ArrowRight, Bitcoin, CreditCard, ShieldCheck, Lock, TrendingUp, Wallet, Check, Landmark, Eye, BookOpen, UserCheck, Scale } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";
import WaitlistForm from "./components/WaitlistForm.jsx";
import { IronCard } from "../design-system/components/brand/IronCard.jsx";

const FLOW = [
  [Bitcoin, "Deposit bitcoin", "Held in 2-of-3 collaborative custody. You hold a key, so we cannot move it alone."],
  [CreditCard, "Get a USDT credit line", "Instant, backed by your bitcoin. Your collateral qualifies you, so no credit file is needed."],
  [Wallet, "Spend anywhere", "Tap your card anywhere Visa is accepted, or withdraw USDT to your wallet."],
  [ArrowRight, "Repay or top up", "Flexible, and instant over Lightning. Your bitcoin stays yours, and keeps its upside."],
];

const PRINCIPLES = [
  [ShieldCheck, "Always overcollateralized", "40 to 50% LTV to start, up to 60% as your grade improves. Liquidation only near 85%, so a wide safety band."],
  [Lock, "Non-custodial by default", "2-of-3 collaborative multisig. You hold a key, so we literally cannot misuse your coins."],
  [TrendingUp, "Cheaper and rejection-proof", "Lower APR than unsecured credit, no taxable sale, and approval never depends on a credit file (KYC and AML still apply)."],
];

// The mechanics a lending investor drills into: how BTC actually secures a USDT line.
const MECHANICS = [
  ["Loan-to-value", "40 to 50% to start", "You borrow at most half your bitcoin's value, so the price has wide room to move first."],
  ["Liquidation threshold", "~85%", "You are warned at every band long before. Only as a last resort do we sell the smallest slice to make you safe."],
  ["Price feed", "Public, independent index", "Liquidation runs on a disclosed third-party feed, never on our own book."],
  ["Custody", "2-of-3 multisig, you hold a key", "Rehypothecation is structurally impossible, not a promise. Native bitcoin, never wrapped."],
  ["Collateral to dollars", "USDT facility, no sale", "Your bitcoin secures a USDT credit facility. It is not sold or moved to fund your line."],
  ["Repay and top up", "Instant over Lightning", "Low-fee Lightning settlement for repayments and top-ups. Spend settles as USDT on Visa rails."],
];

const TRUST = [
  [Lock, "Non-custodial collateral", "Funds cannot be misused by construction, not by promise. Native bitcoin in multisig, never wrapped."],
  [Eye, "Open by default", "Continuous proof of reserves and liabilities, not a quarterly snapshot."],
  [ShieldCheck, "Never rehypothecate", "The exact thing that killed Celsius and BlockFi. We do not do it, and by construction we cannot."],
  [Scale, "Licensed rails from day one", "A Visa principal-member issuer with multi-issuer redundancy, a licensed local rail for the Philippines (BSP and EMI), and a Singapore holdco on the MAS payments track."],
  [Landmark, "Skin in the game", "Built for the bitcoin community, not extracted from it."],
  [BookOpen, "No predatory tricks", "The industry makes its money when you lose track. We make ours one way, on a rate you agreed to and can always see. Interest is the business, and we will never hide that."],
];

const MODEL = [
  ["Net interest spread", "The core. The Chase engine, on a real balance sheet."],
  ["Card interchange", "On every dollar spent."],
  ["Thin, transparent FX", "On USDT and local currency."],
  ["Premium subscription", "Higher LTV, no-forced-liquidation, priority."],
];

const STATS = [
  ["~500M", "people now hold bitcoin"],
  ["~$74B", "crypto-collateralized loan book, 2025"],
  ["Nubank ~$55B", "credit-led fintech comp"],
  ["Coinbase ~$50 to 90B", "crypto comp"],
];

const COMPS = [
  ["JPMorgan Chase", "~$837B", "all of banking"],
  ["American Express", "~$215B", "credit specialist"],
  ["Capital One", "~$135B", "credit specialist"],
  ["Nubank", "~$55B", "credit-led fintech, our comp"],
  ["Coinbase", "~$50 to 90B", "crypto, our comp"],
  ["SoFi", "~$20B", "fintech"],
];

const ROADMAP = [
  ["V1", "Secured bitcoin-backed credit line plus USDT card. Non-custodial, radically transparent, Lightning for repayment and top-ups."],
  ["Data", "Record how our own users borrow and repay. The proprietary underwriting moat."],
  ["Graduate", "Layer crypto credit scoring and move trusted users to higher LTV, then unsecured revolving credit. The true credit-card moment."],
  ["Bank", "Accounts, a savings funnel, more markets. The full bitcoin Chase."],
];

const H2 = ({ children }) => {
  const { C } = useTheme();
  return <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 14px" }}>{children}</h2>;
};

const Card = ({ icon: Icon, title, body }) => {
  const { C } = useTheme();
  return (
    <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
      {Icon && (
        <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentSoft, display: "grid", placeItems: "center", marginBottom: 12 }}>
          <Icon size={18} color={C.amber} />
        </div>
      )}
      <div className="disp" style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 5 }}>{title}</div>
      <div style={{ color: C.mut, fontSize: 13.5, lineHeight: 1.5 }}>{body}</div>
    </div>
  );
};

export default function Credit() {
  const { C } = useTheme();

  const navRight = (
    <>
      <Link to="/score" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>Free score</Link>
      <Link to="/card" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>The card</Link>
      <Link to="/pricing" className="nav-link" style={{ color: C.mut, fontSize: 13.5, fontWeight: 500 }}>Pricing</Link>
      <a href="#waitlist" style={{ padding: "8px 14px", borderRadius: 10, background: C.amber, color: C.accentInk, fontSize: 13, fontWeight: 700 }}>Get started</a>
    </>
  );

  return (
    <div>
      <style>{`
        @media(min-width:820px){
          .credit-flow{grid-template-columns:repeat(4,1fr) !important;}
          .credit-3{grid-template-columns:repeat(3,1fr) !important;}
          .credit-2{grid-template-columns:repeat(2,1fr) !important;}
          .credit-4{grid-template-columns:repeat(4,1fr) !important;}
          .hero-2{grid-template-columns:1.05fr .95fr !important;}
        }
        @media(min-width:560px){ .stat-2{grid-template-columns:1fr 1fr !important;} }
        @media(max-width:560px){ .nav-link{display:none;} }
      `}</style>

      <Nav right={navRight} />

      <article style={{ maxWidth: 920, margin: "0 auto", padding: "16px 20px 60px" }}>
        {/* Hero */}
        <div className="grid hero-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 30, paddingBottom: 28, borderBottom: `1px solid ${C.line}`, marginBottom: 30, alignItems: "center" }}>
          <div>
            <div className="mono" style={{ color: C.mut, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }}>The non-custodial bitcoin credit card</div>
            <h1 className="disp" style={{ fontSize: "clamp(34px, 5.5vw, 56px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-.02em", margin: "0 0 16px", color: C.ink }}>
              Keep your bitcoin.<br />Spend dollars.
            </h1>
            <p className="body" style={{ fontSize: 16.5, lineHeight: 1.55, color: C.mut, maxWidth: 520, margin: "0 0 22px" }}>
              Borrow dollars against your bitcoin and spend anywhere on a Visa card, without selling and without a credit check. For people who hold bitcoin, and people the banks turned away.
            </p>
            <div id="waitlist"><WaitlistForm C={C} big /></div>
            <div className="flex items-center" style={{ gap: 8, marginTop: 14, color: C.mut, fontSize: 12.5 }}>
              <Lock size={14} color={C.green} /> Non-custodial. Iron, a Singapore company.
            </div>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <IronCard width={360} holder="YOUR NAME" last4="0021" />
          </div>
        </div>

        {/* Problem */}
        <section style={{ marginBottom: 22 }}>
          <H2>The problem</H2>
          <p className="body" style={{ fontSize: 16.5, lineHeight: 1.65, color: C.ink, margin: "0 0 14px" }}>
            Credit stopped innovating and started extracting. The card industry solved the hard part decades ago, then spent the years since perfecting the squeeze: 20 to 30% APR, minimum payments engineered so the balance never dies, penalty fees timed for the worst possible moment, and a rejection for anyone without the right paperwork.
          </p>
          <p className="body" style={{ fontSize: 16.5, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            Bitcoiners are squeezed from the other direction: asset-rich and cash-poor by choice. Selling means a taxable event and giving up the upside, so they will not sell, yet they still need dollars. The existing ways to borrow against bitcoin are custodial, opaque, gamified, or region-locked, and the household names that tried it (Celsius, BlockFi) blew up by rehypothecating customer funds. A real, urgent, recurring need with no trustworthy home.
          </p>
        </section>

        {/* Product */}
        <section style={{ marginBottom: 22 }}>
          <H2>The product</H2>
          <p className="body" style={{ fontSize: 16.5, lineHeight: 1.6, color: C.ink, margin: "0 0 18px" }}>
            The same daily feel as the Chase or Discover card you already use, except the limit is backed by your bitcoin instead of your credit score.
          </p>
          <div className="credit-flow" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 16 }}>
            {FLOW.map(([Icon, t, b], i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 16 }}>
                <div className="flex items-center" style={{ justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: C.accentSoft, display: "grid", placeItems: "center" }}>
                    <Icon size={17} color={C.amber} />
                  </div>
                  <span className="disp tnum" style={{ fontSize: 22, fontWeight: 800, color: C.line }}>{i + 1}</span>
                </div>
                <div className="disp" style={{ fontSize: 14.5, fontWeight: 700, color: C.ink, marginBottom: 4 }}>{t}</div>
                <div style={{ color: C.mut, fontSize: 12.5, lineHeight: 1.45 }}>{b}</div>
              </div>
            ))}
          </div>
          <div className="credit-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {PRINCIPLES.map(([Icon, t, b], i) => <Card key={i} icon={Icon} title={t} body={b} />)}
          </div>
          <div style={{ marginTop: 14 }}>
            <Link to="/how" className="flex items-center" style={{ gap: 7, color: C.amber, fontSize: 14.5, fontWeight: 600 }}>
              See exactly how it works, step by step <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Mechanics */}
        <section style={{ marginBottom: 22 }}>
          <H2>How your bitcoin is secured</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.6, color: C.ink, margin: "0 0 16px" }}>
            The honest mechanics behind the slogans. This is the part every lender before us buried, and the part that killed them.
          </p>
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
            {MECHANICS.map(([label, value, note], i) => (
              <div key={i} className="flex" style={{ gap: 14, alignItems: "flex-start", padding: "13px 16px", borderTop: i ? `1px solid ${C.line}` : "none" }}>
                <span style={{ flex: "0 0 40%", minWidth: 120, color: C.mut, fontSize: 13.5 }}>{label}</span>
                <span style={{ flex: 1 }}>
                  <span className="disp" style={{ color: C.ink, fontSize: 14.5, fontWeight: 700 }}>{value}</span>
                  <span style={{ display: "block", color: C.mut, fontSize: 12.5, lineHeight: 1.45, marginTop: 2 }}>{note}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Who it is for */}
        <section style={{ marginBottom: 22 }}>
          <H2>Who it is for</H2>
          <div className="credit-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            <Card icon={Bitcoin} title="Bitcoin holders who refuse to sell" body="You own bitcoin and will not sell it. Borrow against it at better terms than unsecured credit, keep the upside, and stay non-custodial. A product Chase structurally cannot offer." />
            <Card icon={UserCheck} title="The people the banks turned away" body="No credit file, the wrong country, no history. Your bitcoin is your qualification, no FICO and no passport test (KYC and AML still apply). We say yes where Chase says no." />
          </div>
        </section>

        {/* Why it wins */}
        <section style={{ marginBottom: 22 }}>
          <H2>Why it wins</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.6, color: C.ink, margin: "0 0 16px" }}>
            Every competitor is a feature: a loan desk, a borrow button, or a cashback card. None pairs a non-custodial bitcoin credit line with a card and local-rail spend layer in the emerging markets where the need is highest. Ledn and Coinbase lend, but they do not put a spendable card in your pocket in Manila. Our edges compound: multi-issuer card redundancy, so no single BIN sponsor can brick us (the number-one card killer), and an underwriting-data flywheel that graduates trusted users toward unsecured credit.
          </p>
          <div className="credit-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {TRUST.map(([Icon, t, b], i) => <Card key={i} icon={Icon} title={t} body={b} />)}
          </div>
        </section>

        {/* Business model */}
        <section style={{ marginBottom: 22 }}>
          <H2>Business model</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.6, color: C.ink, margin: "0 0 16px" }}>
            A real interest-earning balance sheet, not a trading spread. Users borrow at roughly 10% (6 to 16% by grade). Our debt facility costs us less than that, and we keep the net spread on the average drawn balance, plus interchange on every dollar spent and a thin, transparent FX margin. Overcollateralized lending means charge-offs are a fraction of Chase's 5 to 6%, so we keep more of the spread and we do not blow up. The first milestone is modest: roughly 10,000 cardholders from the Network School and bitcoin-community beachhead puts the book at $100k MRR, and the same engine scales to $3M ARR and beyond.
          </p>
          <div className="credit-2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {MODEL.map(([t, b], i) => (
              <div key={i} className="flex" style={{ gap: 12, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16, alignItems: "flex-start" }}>
                <Check size={18} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="disp" style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{t}</div>
                  <div style={{ color: C.mut, fontSize: 13, lineHeight: 1.45 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12 }}>
            <Link to="/investors" className="flex items-center" style={{ gap: 7, color: C.amber, fontSize: 14, fontWeight: 600 }}>
              Move the levers: the interactive loan-book model <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* Why us */}
        <section style={{ marginBottom: 22 }}>
          <H2>Why us</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            The founder is the customer: a heavy credit user (Chase, Discover, Wise) who pays more in credit interest than any other expense and understands the borrower from the inside. Two technical operator founders who ship, with native distribution into Network School and the global bitcoin community. The two rails the product runs on both have credible, redundant integration paths we are actively pursuing: native bitcoin collateral in collaborative multisig, and a USDT credit line plus a Visa card through a licensed issuer, settled over Lightning rails of the kind IBEX provides. No counterparty is signed yet, and we will never claim one that is not.
          </p>
        </section>

        {/* Market */}
        <section style={{ marginBottom: 22 }}>
          <H2>The market</H2>
          <div className="stat-2 credit-4" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {STATS.map(([big, small], i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <div className="disp tnum" style={{ fontSize: 19, fontWeight: 800, color: C.ink, lineHeight: 1.1 }}>{big}</div>
                <div style={{ color: C.mut, fontSize: 12.5, marginTop: 4 }}>{small}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", borderBottom: `1px solid ${C.line}`, fontSize: 11.5, color: C.mut, textTransform: "uppercase", letterSpacing: ".06em" }}>Proof in the fiat world: credit-led companies are the most valuable in finance</div>
            {COMPS.map(([name, cap, note], i) => (
              <div key={i} className="flex items-center justify-between" style={{ padding: "10px 16px", borderTop: i ? `1px solid ${C.line}` : "none" }}>
                <span style={{ color: C.ink, fontSize: 14, fontWeight: 600 }}>{name}</span>
                <span className="flex items-center" style={{ gap: 12 }}>
                  <span style={{ color: C.mut, fontSize: 11.5 }}>{note}</span>
                  <span className="disp tnum" style={{ color: C.ink, fontSize: 15, fontWeight: 700, minWidth: 84, textAlign: "right" }}>{cap}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="body" style={{ fontSize: 12, color: C.mut, margin: "10px 2px 0", lineHeight: 1.5 }}>
            Comps are public market caps, shown as color, not a valuation target. Bottom-up: of the roughly 500M people who hold bitcoin, even a small share borrowing a few thousand dollars at a ~10% net spread is a multi-billion-dollar revenue pool. Sources: crypto-collateralized lending trackers, 2025.
          </p>
        </section>

        {/* Roadmap */}
        <section style={{ marginBottom: 22 }}>
          <H2>Roadmap</H2>
          <div style={{ display: "grid", gap: 10 }}>
            {ROADMAP.map(([phase, b], i) => (
              <div key={i} className="flex" style={{ gap: 14, alignItems: "flex-start", background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <span style={{ flexShrink: 0, fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: C.amber, border: `1px solid ${C.amber}`, borderRadius: 999, padding: "4px 10px" }}>{phase}</span>
                <div style={{ color: C.ink, fontSize: 14.5, lineHeight: 1.5 }}>{b}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The ask */}
        <section style={{ marginBottom: 30 }}>
          <H2>The ask</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            Raise a $750k pre-seed of mission-aligned equity (target investors we are talking to: Fulgur, Curious Ventures, Network School angels). It buys roughly 15 to 18 months of runway: a team of two to three, licensing and launch in the Philippines, and the first cardholders on the book, the proof on the path to $100k MRR. Separately, arrange a USDT credit facility (debt) to fund the loan book, so we never dilute the company to fund lending. The business throws off interest income and becomes self-funding as it scales.
          </p>
        </section>

        {/* Founder */}
        <section style={{ marginBottom: 14 }}>
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <div className="disp" style={{ width: 52, height: 52, borderRadius: 99, background: C.panel2, border: `1px solid ${C.line}`, display: "grid", placeItems: "center", flexShrink: 0, fontWeight: 700, color: C.ink, fontSize: 17 }}>AP</div>
            <div style={{ flex: "1 1 240px" }}>
              <div className="disp" style={{ fontSize: 15.5, fontWeight: 700, color: C.ink }}>Built in the open by Adam Pang</div>
              <div style={{ color: C.mut, fontSize: 13.5, lineHeight: 1.5, marginTop: 2 }}>A heavy credit-card user building the card he wants to use. Skin in the game. <a href="https://adampang.com" target="_blank" rel="noopener noreferrer" style={{ color: C.amber, fontWeight: 600 }}>adampang.com</a></div>
            </div>
          </div>
        </section>

        {/* Three doors */}
        <section style={{ marginBottom: 22 }}>
          <div className="credit-3" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            <a href="#waitlist" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 18, display: "block" }}>
              <div className="disp" style={{ fontSize: 15.5, fontWeight: 700, color: C.ink }}>Get the card</div>
              <div style={{ color: C.mut, fontSize: 13, marginTop: 3 }}>Join the waitlist.</div>
            </a>
            <Link to="/investors" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 18, display: "block" }}>
              <div className="disp" style={{ fontSize: 15.5, fontWeight: 700, color: C.ink }}>For investors</div>
              <div style={{ color: C.mut, fontSize: 13, marginTop: 3 }}>The model and the comps.</div>
            </Link>
            <a href="mailto:founder@iron.credit" style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 18, display: "block" }}>
              <div className="disp" style={{ fontSize: 15.5, fontWeight: 700, color: C.ink }}>Build it with us</div>
              <div style={{ color: C.mut, fontSize: 13, marginTop: 3 }}>founder@iron.credit</div>
            </a>
          </div>
        </section>

        {/* Footer line */}
        <div style={{ paddingTop: 22, borderTop: `1px solid ${C.line}` }}>
          <p className="disp" style={{ fontSize: 17, fontWeight: 700, color: C.ink, lineHeight: 1.4, margin: 0 }}>
            Everyone else sells a bitcoin loan. We are building the bitcoin bank, the most trustworthy one, for the people who refuse to sell.
          </p>
        </div>
      </article>
    </div>
  );
}
