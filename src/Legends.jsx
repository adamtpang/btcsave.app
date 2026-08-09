import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";

const LEGENDS = [
  {
    name: "Diners Club",
    founded: "1950",
    solved: "Frank McNamara forgot his wallet at dinner and built “pay later, no cash” from that single friction. First year: 10,000 members, 28 restaurants, 2 hotels, on nothing but a cardboard card and a signature.",
    moat: "Being first to a real, felt problem. The wedge was radical simplicity, not technology.",
  },
  {
    name: "Visa",
    founded: "1970 · Dee Hock",
    solved: "Rival banks were bricking their own network fighting over BankAmericard’s rules. Hock built National BankAmericard Inc. as a member-owned, non-stock “chaordic” organization: cooperate on the rails, compete on the product.",
    moat: "Neutral infrastructure nobody owns and everybody trusts. Universal acceptance became the product.",
  },
  {
    name: "American Express",
    founded: "1958 charge card, “Membership Has Its Privileges” by the late 1980s",
    solved: "Closed-loop network: Amex is the issuer, the acquirer, and the processor at once, so it owns both sides of every transaction.",
    moat: "Owning the full loop turns a payment network into a status and data platform. Premium pricing to merchants funds premium service to members.",
  },
  {
    name: "Capital One",
    founded: "Pitched 1988, spun off 1994 · Fairbank and Morris",
    solved: "Every bank charged the same 19.8% flat rate to every customer. Fairbank and Morris priced risk per person with an Information-Based Strategy, and shipped thousands of live pricing tests instead of one product.",
    moat: "Underwriting-as-R&D. The data compounds; competitors copying the price cannot copy the pricing engine.",
  },
  {
    name: "Discover",
    founded: "1985 · Sears / Dean Witter",
    solved: "Launched into a market of confusing annual fees and hidden terms with the opposite: no annual fee, and the first mass-market cashback (1% Cashback Bonus).",
    moat: "Radical transparency as a growth lever, not a compliance cost.",
  },
  {
    name: "MBNA",
    founded: "1982, first affinity card 1983",
    solved: "Instead of buying attention with mass marketing, MBNA co-branded with 1,400-plus existing communities (alumni associations, AAA, professional groups) who already trusted each other. 25% average annual earnings growth through the 1990s on this alone.",
    moat: "Distribution through borrowed trust. CAC near zero because the affinity group did the vouching.",
  },
  {
    name: "JPMorgan Chase",
    founded: "1799 root (Manhattan Company) · 2000 (modern JPMorgan Chase)",
    solved: "Two structural tricks, a century apart. In 1799 Aaron Burr got a charter approved for a company to pipe clean water to Manhattan, then slipped in a clause letting it deploy “surplus capital” however it liked. Six months later the water company quietly opened a bank, a charter smuggled past the legislature as a rider clause. Then in 1907, with no central bank yet in existence, J. Pierpont Morgan personally organized the response to a national panic by locking the country’s leading bankers in his library until they committed their own capital to the bailout. One man acted as the central bank, out of his own house.",
    moat: "Find the structural trick nobody else has, and be willing to personally underwrite the system when it breaks. A century of consolidation (Chase National, Chemical Bank, J.P. Morgan & Co., Bank One) built the balance sheet that made the second half of that promise credible at scale.",
  },
];

const GRADE_LABEL = { green: "Strong", amber: "Half-built", red: "Blind spot" };

const GAPS = [
  {
    lesson: "Solve one real, felt friction, radically simply",
    who: "Diners Club",
    today: "“Keep your bitcoin, spend dollars” is exactly this: one job, stated in five words. The site does not bury it.",
    grade: "green",
  },
  {
    lesson: "Radical transparency as growth, not compliance",
    who: "Discover",
    today: "LTV, liquidation threshold, APR by grade, and “no predatory tricks” are all published upfront.",
    grade: "green",
  },
  {
    lesson: "Never lend out or misuse what you hold",
    who: "the anti-lesson: every dead lender broke this",
    today: "Graveyard rules are the whole design spec: non-custodial by construction, no rehypothecation.",
    grade: "green",
  },
  {
    lesson: "Neutral, trusted infrastructure that outlives any single member",
    who: "Visa",
    today: "Iron rents its rails (Rain) rather than owning them. The sovereignty trigger (Master Plan 7a) names the plan, but there is zero public acknowledgment that Iron is currently dependent on a single issuer relationship.",
    grade: "amber",
  },
  {
    lesson: "Underwriting-as-R&D, pricing the individual not the category",
    who: "Capital One",
    today: "The Score page grades A through D on LTV and APR, and the roadmap’s “Data” phase names this as the plan. But it is a plan, not yet a moat: zero real repayment data exists yet.",
    grade: "amber",
  },
  {
    lesson: "Own both sides of the loop; membership as status, not just a rate",
    who: "American Express",
    today: "Iron had zero status or membership narrative. The grade ladder (AAA down to D) was a risk table, not an identity.",
    grade: "red",
  },
  {
    lesson: "Distribution through borrowed trust (affinity), not paid acquisition",
    who: "MBNA",
    today: "Iron’s actual plan (Network School, the global bitcoin community, invite-only, concierge-onboard the first 100) is an affinity strategy. It was just never named as one.",
    grade: "amber",
  },
  {
    lesson: "Find the structural trick, and have the balance sheet to be the backstop when it breaks",
    who: "JPMorgan Chase",
    today: "Iron’s structural trick is real and live: native bitcoin as neutral, non-custodial collateral, the user holding a key, is Iron’s version of Burr’s loophole. The backstop half is not yet true: no balance sheet, no capital reserve, no signed debt facility.",
    grade: "amber",
  },
];

const CLOSES = [
  {
    from: "red", to: "amber",
    title: "Membership, not just a risk table (Amex lesson)",
    body: "The grade rubric on the Score page was accurate but cold: letters, LTVs, and APRs with no reason to want to climb it beyond the numbers. Added a membership framing directly above the rubric: what each grade means as a level of trust extended, not just a rate. No invented tiers or privileges Iron cannot yet deliver, that would break its own no-predatory-tricks rule. It names the identity that already exists in the mechanics.",
  },
  {
    from: "amber", to: "green",
    title: "Name the affinity engine (MBNA lesson)",
    body: "The go-to-market was described as a beachhead but never connected to the proven playbook it actually is. Iron’s distribution is an affinity strategy in MBNA’s exact shape (a trusted community vouches, CAC approaches zero), applied to Network School and the global bitcoin community instead of alumni associations.",
  },
  {
    from: "amber", to: null,
    title: "Held on purpose: sovereignty, data, and the balance-sheet backstop",
    body: "All three share one root cause and already have real plans (the sovereignty trigger for rails, the Data phase for underwriting). Chase’s “be the balance-sheet backstop” and Iron’s “own the licence” are one capital-and-licensing reality, not three separate problems. Closing them further means public commitments Iron cannot yet back with a live licence, a signed facility, or a live loan book. Never claim ahead of the fact.",
  },
];

const SOURCES = [
  ["American Express membership history", "https://www.americanexpress.com/en-us/business/trends-and-insights/articles/american-express-membership-guide-backing-your-business-backing-you/"],
  ["Amex closed-loop network", "https://www.americanexpress.com/content/dam/amex/nz/staticassets/merchant/pdf/support-and-services/useful-information-downloads/Closed-Loop-Network.pdf"],
  ["Capital One founding and IBS", "https://www.bbntimes.com/financial/richard-fairbank-data-driven-banking-visionary-founder-ceo-and-chairman-of-capital-one-financial-corporation"],
  ["Dee Hock and Visa’s founding", "https://www.digitaltransactions.net/visa-founder-dee-hock-forged-a-network-giant-out-of-a-collection-of-squabbling-banks/"],
  ["MBNA affinity card history", "https://www.fundinguniverse.com/company-histories/mbna-corporation-history/"],
  ["Diners Club founding story", "https://www.dinersclub.com/about-us/history/"],
  ["Discover Card launch", "https://www.cgaa.org/article/when-did-discover-card-start"],
  ["The watery origin of JPMorgan Chase", "https://davidepstein.substack.com/p/the-watery-origin-of-jpmorgan-chase"],
  ["J.P. Morgan and the Panic of 1907", "https://www.gothamcenter.org/blog/the-panic-of-1907-how-jp-morgan-took-over-wall-street"],
  ["JPMorganChase official history", "https://www.jpmorganchase.com/about/our-history"],
];

const H2 = ({ children }) => {
  const { C } = useTheme();
  return <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 14px" }}>{children}</h2>;
};

const Dot = ({ grade }) => {
  const { C } = useTheme();
  const color = grade === "green" ? C.green : grade === "amber" ? C.amber : C.mut;
  return <span title={GRADE_LABEL[grade]} style={{ flexShrink: 0, width: 10, height: 10, borderRadius: 99, background: color, marginTop: 5 }} />;
};

export default function Legends() {
  const { C } = useTheme();

  const navRight = (
    <Link to="/" className="flex items-center" style={{ gap: 6, color: C.mut, fontSize: 13.5, fontWeight: 500 }}>
      <ArrowLeft size={14} /> iron.credit
    </Link>
  );

  return (
    <div>
      <Nav right={navRight} />

      <article style={{ maxWidth: 800, margin: "0 auto", padding: "16px 20px 60px" }}>
        {/* Header */}
        <div style={{ paddingBottom: 22, borderBottom: `1px solid ${C.line}`, marginBottom: 30 }}>
          <div style={{ color: C.amber, fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 10 }}>Credit history</div>
          <h1 className="disp" style={{ fontSize: "clamp(32px, 5.5vw, 50px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 16px", color: C.ink }}>
            The greatest credit companies of all time
          </h1>
          <p className="body" style={{ fontSize: 16.5, lineHeight: 1.6, color: C.mut, margin: "0 0 6px" }}>
            Seven companies, seven different reasons they became legendary. Each solved exactly one hard problem and built a durable moat around it. None of them were great at everything, they were great at one thing and adequate everywhere else. We graded Iron against each of the seven, then closed the highest-leverage gaps.
          </p>
          <p className="body" style={{ fontSize: 13, color: C.mut, marginTop: 14 }}>By Iron, an internal gap analysis</p>
        </div>

        {/* The seven */}
        <section style={{ marginBottom: 34 }}>
          <H2>The seven, and what each was actually great at</H2>
          <div style={{ display: "grid", gap: 12 }}>
            {LEGENDS.map((l) => (
              <div key={l.name} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 18 }}>
                <div className="flex items-baseline" style={{ gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                  <span className="disp" style={{ fontSize: 17, fontWeight: 700, color: C.ink }}>{l.name}</span>
                  <span className="mono" style={{ fontSize: 11, color: C.mut }}>{l.founded}</span>
                </div>
                <p className="body" style={{ fontSize: 14, lineHeight: 1.55, color: C.ink, margin: "0 0 10px" }}>{l.solved}</p>
                <div className="flex" style={{ gap: 8, alignItems: "flex-start" }}>
                  <span className="mono" style={{ flexShrink: 0, fontSize: 10.5, letterSpacing: ".06em", textTransform: "uppercase", color: C.mut, marginTop: 2 }}>Moat</span>
                  <p className="body" style={{ fontSize: 13.5, lineHeight: 1.5, color: C.mut, margin: 0 }}>{l.moat}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The gap table */}
        <section style={{ marginBottom: 34 }}>
          <H2>The gap table</H2>
          <p className="body" style={{ fontSize: 14, lineHeight: 1.55, color: C.mut, margin: "0 0 16px" }}>
            Graded against iron.credit as it exists today (site, deck, and strategy docs), not against the eventual company.
          </p>
          <div style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
            {GAPS.map((g, i) => (
              <div key={i} className="flex" style={{ gap: 12, alignItems: "flex-start", padding: "14px 16px", borderTop: i ? `1px solid ${C.line}` : "none" }}>
                <Dot grade={g.grade} />
                <div style={{ flex: 1 }}>
                  <div className="flex items-baseline" style={{ gap: 8, flexWrap: "wrap", marginBottom: 3 }}>
                    <span className="disp" style={{ fontSize: 14.5, fontWeight: 700, color: C.ink }}>{g.lesson}</span>
                    <span className="mono" style={{ fontSize: 11, color: C.mut }}>{g.who}</span>
                  </div>
                  <div style={{ color: C.mut, fontSize: 13.5, lineHeight: 1.5 }}>{g.today}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="body" style={{ fontSize: 14, lineHeight: 1.6, color: C.ink, marginTop: 16 }}>
            Two are strong (the founding wedge and the transparency positioning), four are real but half-built (sovereignty, the data moat, affinity distribution, and being the balance-sheet backstop, all planned but not claimed), and one was a true blind spot: Iron had a risk ladder but no membership. That was the single highest-leverage gap, the one lesson none of the others substitute for. Visa, Capital One, Discover, and MBNA all sell you a better transaction. Amex is the only one that sold you who you become by carrying the card, and it is why Amex commands premium pricing none of the transaction-first players ever matched.
          </p>
        </section>

        {/* Closing the gaps */}
        <section style={{ marginBottom: 34 }}>
          <H2>Closing the gaps</H2>
          <div style={{ display: "grid", gap: 12 }}>
            {CLOSES.map((c, i) => (
              <div key={i} style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 14, padding: 16 }}>
                <div className="flex items-center" style={{ gap: 8, marginBottom: 6 }}>
                  <Dot grade={c.from} />
                  {c.to && <><ArrowLeft size={12} color={C.mut} style={{ transform: "rotate(180deg)" }} /><Dot grade={c.to} /></>}
                  <span className="disp" style={{ fontSize: 15, fontWeight: 700, color: C.ink, marginLeft: 4 }}>{c.title}</span>
                </div>
                <p className="body" style={{ fontSize: 13.5, lineHeight: 1.55, color: C.mut, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section style={{ marginBottom: 34, paddingTop: 8, borderTop: `1px solid ${C.line}` }}>
          <H2>Sources</H2>
          <div className="body" style={{ fontSize: 12.5, lineHeight: 1.8, color: C.mut }}>
            {SOURCES.map(([label, url], i) => (
              <span key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: C.amber }}>{label}</a>
                {i < SOURCES.length - 1 ? ", " : "."}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div style={{ paddingTop: 20, borderTop: `1px solid ${C.line}`, color: C.mut, fontSize: 13, lineHeight: 1.6 }}>
          The full analysis lives in the Iron repo. <Link to="/" style={{ color: C.amber, fontWeight: 600 }}>iron.credit</Link>
        </div>
      </article>
    </div>
  );
}
