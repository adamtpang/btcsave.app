import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "./theme.jsx";
import Nav from "./components/Nav.jsx";

const IDEAS = [
  {
    id: "inheritance",
    n: "01",
    tier: "S-tier",
    title: "Bitcoin inheritance for people who will never read a whitepaper",
    paras: [
      "Self-custody created a problem it never solved: succession. Somewhere between 2.3 and 3.7 million bitcoin are already lost forever, and the first serious cohort of holders, the people who bought from 2011 to 2015, is now old enough that mortality and incapacity are no longer hypothetical. VanEck estimates roughly six trillion dollars will pass through crypto inheritances over the next two decades. Around 95 percent of holders have no working plan.",
      "The technical primitive is solved. Casa, Unchained, Nunchuk and AnchorWatch can all hold a recovery key and run a multisig. What none of them has solved is the human layer: a grieving spouse or child who has never touched bitcoin, trying to claim coins under time pressure and stress. Today that person has to become a security engineer at the worst possible moment.",
      "Build the heir's experience, not another vault. A guided claim flow, a dead-man's-switch that triggers on inactivity, time-locked release, and integrations with the wallets people already use (Sparrow, Nunchuk, Ledger) and with estate attorneys, rather than competing with them. The product you are selling is clarity, permission, and process.",
      "The moat is not a token. It is trust, legal templates, attorney and wallet integrations, and a relationship that compounds for decades. Once a family's plan is set, switching is unthinkable. This is the cleanest defensibility in bitcoin and the least incumbent capital is pointed at it. If you build one thing on this list, build this.",
    ],
  },
  {
    id: "credit",
    n: "02",
    tier: "S-tier",
    title: "Borrow dollars against bitcoin without trusting a black box",
    paras: [
      "Holders want liquidity without selling, and they do not want to repeat 2022. Celsius and BlockFi proved that opaque, rehypothecating lenders are a death trap. Yet the demand never went away: crypto-collateralized loans crossed seventy-three billion dollars by late 2025, and bitcoin-backed lending is being called a path to a trillion-dollar market.",
      "Every hard piece now exists in isolation: regulated custody, bankruptcy-remote collateral, real-time price feeds, automated liquidation, and the legal documents. Nobody has packaged them into something a normal holder or a mid-size institution actually trusts. Two gaps stand out. First, the wrapped-bitcoin trust problem: bridges lost over three hundred million dollars in 2026 alone, and roughly a third of would-be users stay away on security grounds, so native-bitcoin collateral is the frontier. Second, the consumer scar tissue, where no one has built the obviously safe, provably non-rehypothecated product.",
      "Do not be a balance-sheet lender; that is capital-intensive and commoditized. Be the trust-minimized rails: custody, automated liquidation, and live proof-of-reserves that others lend on, or a transparent consumer front-end with verifiable no-rehypothecation.",
      "This one survives the stablecoin test cleanly, because the thing people borrow is dollars and the thing they borrow against is bitcoin, the most credibly neutral collateral that exists. The moat is a security and no-loss track record, licensing, and integrations. It is the biggest market on this list.",
    ],
  },
  {
    id: "payments",
    n: "03",
    tier: "S-tier",
    title: "One way to send bitcoin, no matter which rail it lives on",
    paras: [
      "Bitcoin's off-chain layer has splintered. Lightning, Ark, Spark, ecash and Liquid all work, none of them interoperate cleanly, and every wallet and payment company now has to integrate three or four of them and guess which one wins. Fragmentation, not throughput, is the bottleneck.",
      "There is an opening for a neutral layer: send value to anyone, and the system picks Lightning, Ark, ecash or on-chain underneath. A Stripe for bitcoin's layer twos. The vision is openly discussed in the ecosystem and not yet owned by anyone.",
      "One honest caveat, and it is the whole game. The unit most people actually want to move is dollars. Stablecoins are already roughly three-quarters of crypto payments, and the best-funded version of this idea, Lightspark, just shipped a dollar product. So build the abstraction to route stablecoins-on-bitcoin too. Do that and you are a payments-infrastructure company that settles on the most neutral rail in the world, which is the correct place to be.",
      "The moat is integration breadth, becoming the default developer primitive, and the routing data you accumulate. The risk is that this is the most incumbent-contested idea here. Bring an unfair distribution advantage or do not start.",
    ],
  },
];

const PASSED = [
  ["Bitcoin treasury companies in distress", "Urgent and real, but a finance and M&A problem, not a defensible product a small technical team can win."],
  ["Privacy after the Samourai and Wasabi prosecutions", "High mission value, but the legal risk is the product and the market is a passionate minority."],
  ["The quantum threat", "Real, but most likely 2030 or later, and gated on protocol politics no founder controls."],
  ["Mining pivoting to AI", "Massive, but a capital and real-estate game now (eight to eleven million dollars per megawatt) and the incumbents already own the land."],
  ["Bitcoin yield and staking", "Largely a story. The headline programs pay a volatile token that holders dump on a near-zero native rate. Real yield loops back to credit, above."],
];

const H2 = ({ children }) => {
  const { C } = useTheme();
  return <h2 className="disp" style={{ fontSize: 13, color: C.mut, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 14px" }}>{children}</h2>;
};

export default function RFS() {
  const { C } = useTheme();

  const navRight = (
    <Link to="/" className="flex items-center" style={{ gap: 6, color: C.mut, fontSize: 13.5, fontWeight: 500 }}>
      <ArrowLeft size={14} /> iron.credit
    </Link>
  );

  return (
    <div>
      <Nav right={navRight} />

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "16px 20px 60px" }}>
        {/* Header */}
        <div style={{ paddingBottom: 22, borderBottom: `1px solid ${C.line}`, marginBottom: 30 }}>
          <div style={{ color: C.amber, fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 10 }}>Bitcoin</div>
          <h1 className="disp" style={{ fontSize: "clamp(34px, 5.5vw, 52px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-.02em", margin: "0 0 16px", color: C.ink }}>Requests for Startups</h1>
          <p className="body" style={{ fontSize: 16.5, lineHeight: 1.6, color: C.mut, margin: "0 0 6px" }}>
            In the tradition of sharing the ideas we would most like to see built. This list is specific to bitcoin, and it is written through one filter that changed our minds about almost everything.
          </p>
          <p className="body" style={{ fontSize: 13, color: C.mut, marginTop: 14 }}>By Iron · June 2026</p>
        </div>

        {/* The filter */}
        <section style={{ marginBottom: 34 }}>
          <H2>The filter: stablecoins</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: "0 0 14px" }}>
            Stablecoin supply has crossed three hundred and twenty billion dollars, larger than the foreign reserves of ninety-five countries, and about two-thirds of it is held by individuals in emerging markets who want dollars, not volatility. Stablecoins are now roughly three-quarters of all crypto payments. The flagship bitcoin-payments company shipped a dollar account. Any idea that amounts to "get people to pay or save in bitcoin in emerging markets" is fighting a war that is already being lost.
          </p>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            The ideas that survive are the ones where bitcoin's own properties are the point: the hardest, most unforgiving bearer asset there is, which is why custody and inheritance matter, and the most credibly neutral collateral in existence, which is why credit matters. We graded the whole space on four questions. Is the problem urgent now, is it massive, is it genuinely painful, and is it defensible without a token. Three ideas cleared the bar.
          </p>
        </section>

        {/* Table of contents */}
        <section style={{ marginBottom: 34 }}>
          <H2>The three</H2>
          <div style={{ display: "grid", gap: 8 }}>
            {IDEAS.map((idea) => (
              <a key={idea.id} href={`#${idea.id}`} className="flex" style={{ gap: 12, alignItems: "baseline", padding: "10px 0", borderBottom: `1px solid ${C.line}` }}>
                <span className="disp tnum" style={{ color: C.amber, fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{idea.n}</span>
                <span className="disp" style={{ color: C.ink, fontSize: 16.5, fontWeight: 700, lineHeight: 1.25 }}>{idea.title}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Ideas */}
        {IDEAS.map((idea) => (
          <section key={idea.id} id={idea.id} style={{ marginBottom: 40, scrollMarginTop: 20 }}>
            <div className="flex items-center" style={{ gap: 10, marginBottom: 6 }}>
              <span className="disp tnum" style={{ color: C.amber, fontSize: 15, fontWeight: 700 }}>{idea.n}</span>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.amber, border: `1px solid ${C.amber}`, borderRadius: 999, padding: "2px 8px" }}>{idea.tier}</span>
            </div>
            <h3 className="disp" style={{ fontSize: "clamp(22px, 3.2vw, 28px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-.01em", color: C.ink, margin: "0 0 12px" }}>{idea.title}</h3>
            {idea.paras.map((p, i) => (
              <p key={i} className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: "0 0 14px" }}>{p}</p>
            ))}
          </section>
        ))}

        {/* Passed on */}
        <section style={{ marginBottom: 34, paddingTop: 8, borderTop: `1px solid ${C.line}` }}>
          <H2>What we passed on, and why</H2>
          <div style={{ display: "grid", gap: 14 }}>
            {PASSED.map(([t, why], i) => (
              <div key={i}>
                <div className="disp" style={{ fontSize: 16, fontWeight: 700, color: C.ink, marginBottom: 3 }}>{t}</div>
                <div className="body" style={{ fontSize: 15, lineHeight: 1.55, color: C.mut }}>{why}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pressure-testing against Fulgur's RFS */}
        <section style={{ marginBottom: 34 }}>
          <H2>Pressure-testing against Fulgur's RFS</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: "0 0 14px" }}>
            Fulgur Ventures publishes its own Request for Startups with four ideas, and we ran our roadmap against it. We land on three of the four. Bitcoin savings apps are real but commoditized and the most stablecoin-exposed of the set, which is exactly why we pivoted away from that (it is our own origin story). Tradfi exploits is broad, and the inheritance slice inside it is the S-tier idea at the top of this page. Bitcoin financial services is a huge market, and our secured credit line sits squarely in it. Universal payments is the S-tier of the four, and Lightning settlement is on our roadmap. A sharp list. We agree with most of it.
          </p>
        </section>

        {/* The principle */}
        <section style={{ marginBottom: 34 }}>
          <H2>One principle</H2>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: "0 0 14px" }}>
            Every moat on this list is trust, integrations, regulation, and data. None of them is a token. A company whose only product is a token, and especially an AI token, has no defensibility in this space. Build switching costs, not tickers.
          </p>
          <p className="body" style={{ fontSize: 16, lineHeight: 1.65, color: C.ink, margin: 0 }}>
            We are building Iron, the non-custodial bitcoin credit card. The rest of this list is open, and if you are building any of it, we would like to talk.
          </p>
        </section>

        {/* Footer */}
        <div style={{ paddingTop: 20, borderTop: `1px solid ${C.line}`, color: C.mut, fontSize: 13, lineHeight: 1.6 }}>
          Compiled June 2026 for the bitcoin workshop. Full research and sources live in the Iron repo. <Link to="/" style={{ color: C.amber, fontWeight: 600 }}>iron.credit</Link>
        </div>
      </article>
    </div>
  );
}
