# Iron: business plan

*Written in the Sequoia Capital template (Company Purpose, Problem, Solution, Why Now, Market Size, Competition, Product, Business Model, Team, Financials), the shape most VCs pattern-match against. Distinct from `MASTERPLAN.md` (the 25-year internal constitution, first person, not investor-facing), `ONEPAGER.md` (a five-minute teaser), and `deck/Iron-preseed-Fulgur.pptx` (the visual pitch for a live room). This is the leave-behind: one linear document, no slides, no pitching voice, every claim traceable to something already true or explicitly flagged as a projection.*

---

## Company purpose

Iron lets bitcoin holders borrow dollars against their bitcoin and spend them on a Visa card, without selling, without a credit check, and without ever giving up custody of their coins.

---

## Problem

Bitcoiners are asset-rich and cash-poor by choice. Selling bitcoin is a taxable event and surrenders the upside, so holders will not sell, yet they still need dollars for ordinary life. Every existing way to borrow against bitcoin is custodial, opaque, gamified, or region-locked, and the household names that tried it (Celsius, BlockFi) blew up by rehypothecating customer collateral, lending it out or gambling with it while telling depositors it was safe.

The same problem exists from the other direction: hundreds of millions of people have no credit file, the wrong passport, or no banking history, and get rejected by every traditional lender. Their bitcoin, if they hold any, is qualification a FICO score will never give them.

Credit itself has drifted from innovation to extraction. The industry solved the hard part of underwriting decades ago, then spent the years since perfecting the squeeze on the customers it does serve: 20 to 30% APR, minimum payments engineered so a balance never quite clears, penalty fees timed for the worst moment. There is a real, urgent, recurring need on both ends of this problem, and no trustworthy home for it.

---

## Solution

Deposit bitcoin into 2-of-3 collaborative custody (the user holds one key, so Iron cannot move the collateral alone), receive an instant USDT credit line against it, spend on a Visa card or withdraw USDT to a wallet, then repay or top up on your own schedule, with repayment settling instantly over Lightning. The bitcoin is never sold and never leaves non-custodial collateral.

The mechanics, stated plainly because every dead lender before Iron buried exactly this part:

- **Loan-to-value:** 40 to 50% at the start, up to 60% at the top borrower grade.
- **Liquidation:** borrowers are warned at every band; forced liquidation triggers only near 85% LTV, and only the smallest slice needed is sold.
- **Price feed:** a public, independent oracle, never Iron's own book.
- **Custody:** 2-of-3 multisig. Rehypothecation is structurally impossible, not a policy promise.
- **Collateral to dollars:** bitcoin secures a USDT facility; it is never sold to fund the line itself.

This is the whole graveyard, inverted into a design spec: never rehypothecate, always overcollateralize with transparent liquidation, never sell anything that resembles an unregistered yield product, never let one counterparty be a single point of failure, and never claim a partner or a licence that is not real.

---

## Why now

Three things are true now that were not true during the 2018 to 2022 wave of bitcoin lenders and crypto cards.

First, the demand is proven, not theoretical. The crypto-collateralized lending pool is roughly $74B as of 2025, evidence that hundreds of thousands of people already want this product enough to use worse, riskier versions of it. The graveyard is proof of demand, not proof the idea was wrong: Celsius, BlockFi, and Voyager died of structural choices (rehypothecation, undercollateralized loans, single-counterparty concentration), not because nobody wanted to borrow against bitcoin.

Second, licensed non-custodial rails now exist where they did not in the last cycle. The card-rail failure that killed six programs in a single day (WaveCrest, 2018) was a single-BIN-sponsor dependency, and Wirecard's 2020 collapse repeated the lesson on a different rail. Multi-issuer redundancy and Visa principal-member issuers (rather than a single rented BIN) are a buildable strategy today in a way they were not five years ago, and Lightning-native licensed settlement (the kind IBEX provides) makes non-custodial, instant repayment practical at the product layer.

Third, this thesis just received real institutional validation from an unrelated direction. Palmer Luckey's Erebor, a new bank chartered in 2026, is built on the same structural insight Iron is built on: an incumbent (SVB) blew up and took customer money, the founder was the underserved customer, and the fix is survival by design (never lose customer funds) plus native stablecoin settlement. Erebor is proof that a maximally establishment-aligned operator independently arrived at the same architecture Iron is built on. Separately, Fulgur Ventures' own published Request for Startups names the Philippines, Indonesia, and Vietnam by name as the geography for exactly this kind of product, the same launch sequence Iron already committed to.

Fourth, Wall Street itself is now racing toward the settlement layer Iron is native to. As of August 2026, JPMorgan's Kinexys network processes over $7B a day in tokenized deposits and has settled more than $4T since launch; Wells Fargo, Citi, Bank of America, and a dozen more large lenders are moving the same direction, and the DTCC (which clears roughly $15T in US securities trades a day) began live tokenized-securities transactions in July 2026. Citi estimates tokenized securities could reach $5.5T by 2030. Iron is not betting against how TradFi settles money, it is already built on the model TradFi is spending billions to reach. The 2025 Genius Act's stablecoin rules (1 to 1 reserves required, no interest paid to holders) also make Iron's own no-yield discipline a regulatory floor, not just a self-imposed rule, reinforcing the same non-negotiable in `GRAVEYARD.md`.

---

## Market size

Around 480 to 500 million people hold bitcoin worldwide. The crypto-collateralized lending pool is roughly $74B as of 2025. Public market comps for credit-led fintechs, shown as color rather than a valuation target: Nubank near $55B, Coinbase in the $50 to 90B range, JPMorgan Chase near $950B to $1T market cap (roughly $4.9T total assets) as of August 2026, the scale case for what a credit-and-banking layer is worth once it wins.

The honest bottom-up path is smaller and more credible than the top-down comps suggest, and it is the number this plan actually stands behind: **$100k MRR** ($1.2M ARR) is reachable at roughly **6,000 cardholders** holding an average of about $8,000 in bitcoin collateral each (about $48M of bitcoin locked), or roughly 10,500 cardholders at a more mass-market $5,000 average. That is a single-digit-thousands first cohort, not a moonshot user count, and it is well inside the reach of the Network School and global bitcoin-community beachhead described below.

---

## Competition

Every existing bitcoin-backed lender is a feature, not a bank: a loan desk, a borrow button, or a cashback card, not a relationship. The survivors of the last cycle (Ledn, Unchained, Coinbase's on-chain lending via Morpho, Strike) share Iron's core properties, non-custodial or transparently segregated collateral, overcollateralization, proof of reserves, no rehypothecation, so "we are safer than Celsius" is table stakes among the survivors, not a differentiator on its own.

Iron's actual edges against that surviving set:

- **A spendable card and local-rail layer in emerging markets**, which the pure lenders do not offer. Ledn and Coinbase will lend you dollars; neither puts a Visa card in your pocket in Manila.
- **Multi-issuer card redundancy**, engineered from the start against the single point of failure (issuer or BIN sponsor cutoff) that has killed more crypto card programs than bitcoin's price volatility ever has.
- **An underwriting-data flywheel.** Every loan Iron originates teaches the company how bitcoin holders actually borrow and repay, the proprietary dataset that eventually supports moving trusted users to unsecured revolving credit, the step none of the current bitcoin-backed lenders have taken.

---

## Product

The user-facing product is a Visa card (physical and virtual) backed by a USDT credit line, itself backed by bitcoin locked in non-custodial collaborative custody. The full loop: deposit bitcoin, receive a credit line instantly with no credit check (the collateral is the qualification, KYC and AML still apply), spend on the card or withdraw USDT, repay on any schedule with instant Lightning settlement, and reclaim the full bitcoin position, upside intact, once the balance clears.

Pricing is a graded ladder rather than one flat rate: APR runs roughly 6 to 16% depending on borrower grade (around 10% typical), and the grade itself is framed as a level of trust extended rather than a bare discount table, climbed by holding longer and repaying reliably with Iron. There is no annual fee and no exit penalty.

Product roadmap, each phase funded by the one before it:

1. **V1.** Secured bitcoin-backed credit line plus USDT and Visa card. Non-custodial, radically transparent, Philippines first.
2. **Data.** Record how Iron's own users borrow and repay; the proprietary underwriting moat.
3. **Graduate.** Layer crypto credit scoring on top of that data, move trusted users to higher LTV, then to unsecured revolving credit, the true credit-card moment.
4. **Bank.** Accounts, a savings funnel, more markets, more collateral assets. The full bitcoin bank.

A related, deliberate decision sits between Graduate and Bank: Iron rents its card rail (a licensed issuer, Rain or equivalent) to reach market fastest, then moves to multi-issuer redundancy, and only pursues its own licence once a specific trigger fires (loss of editorial control over who it serves, dangerous concentration in one issuer, the economics of renting exceeding the cost of owning, counterparty instability, or a rail's risk committee starting to cap growth rather than price it). Owning a licence caps hypergrowth in exchange for control; that trade is made deliberately, not by accident, and not before it is actually required.

---

## Business model

Revenue is a real interest-earning balance sheet, not a trading spread: the net interest spread on the average drawn balance is the core (the Chase engine, run on Iron's own book), plus card interchange on every dollar spent, plus a thin, transparent FX margin on USDT and local currency, plus an optional premium subscription tier (higher LTV, no forced liquidation, priority service). Because the book is overcollateralized with transparent automated liquidation, charge-offs run a fraction of a typical unsecured card issuer's 5 to 6%, so Iron keeps more of the spread it earns and the loan book does not carry the tail risk that killed the unsecured-credit-at-scale approach.

The loan book itself is funded by a separate USDT debt facility, not by equity. This is a firm rule, not a preference: the company is never diluted to fund the book, and the book is never funded by rehypothecating a single customer's collateral to lend to another. As the book compounds, net interest income makes the business increasingly self-funding.

---

## Team

Iron is built by two technical operator founders. Adam brings distribution into the Network School network (the initial beachhead) and is himself the target customer: a heavy user of Chase, Discover, and Wise who pays more in credit interest than any other personal expense, building the card he actually wants to carry. Christian brings native standing in the global bitcoin community, the second half of the distribution engine.

Distribution is not an afterthought bolted onto the product, it is modeled explicitly on MBNA's affinity-card playbook, the mechanic that built the largest independent card issuer of its era on co-branding with communities that already trust themselves rather than buying attention with mass marketing. Iron's version points the same mechanic at Network School and the global bitcoin community: invite-only, gated by bitcoin balance, the first 100 users concierge-onboarded personally, then a referral loop where every founding member becomes an affinity node in their own right.

The two rails the product depends on, native bitcoin collateral in collaborative multisig and a USDT credit line plus Visa card through a licensed issuer settled over Lightning of the kind IBEX provides, both have credible, redundant integration paths actively being pursued. No counterparty is signed as of this writing, and this plan will never claim one that is not; that discipline is itself part of the product's credibility with a bitcoin-native investor.

Near-term hiring priorities, in order: a risk and fraud engineer (the highest-leverage early hire for any regulated lending product) and a licensing and compliance operator who lands the issuer relationship and keeps the company inside every regulatory line it operates near.

---

## Financials

**The ask.** A $750k pre-seed round of mission-aligned equity, targeting investors already in conversation, including Fulgur Ventures, Curious Ventures, and Network School angels. This buys roughly 15 to 18 months of runway: a team of two to three, Philippines licensing and launch, and the first cardholders on the book. Separately, and never mixed with equity, Iron intends to arrange a USDT credit facility (debt) to fund the loan book itself; the company is never diluted to fund lending.

**The unit-economics model.** $100k MRR ($1.2M ARR) is reached when the loan book, multiplied by (a net interest spread of roughly 4% plus interchange and FX income of roughly 3.6% on card turnover), clears that line. At a bitcoin-forward mix (roughly $8,000 average collateral per cardholder, 35% utilization), that happens at roughly 6,000 cardholders and about $48M of bitcoin locked; at a more mass-market mix (roughly $5,000 average collateral, 30% utilization), it takes roughly 10,500 cardholders. This model is live and adjustable on the product itself at iron.credit/investors, not a static slide.

**Licensing and structure.** Iron operates through a Singapore Pte Ltd holding company, chosen for its top-tier financial-regulatory reputation (MAS) and its acceptance among bitcoin-aligned global investors, on the Payment Services Act licensing track rather than the offshore-only DTSP path MAS has signaled it will not license. Philippines launch requires BSP and EMI licensing; this is treated as the company's right to exist, not a later-stage item.

**Near-term milestones (90 days).** A working MVP (lock bitcoin, receive a line, spend on a card, even at pilot scale), the first pilot users drawn from the waitlist, pre-seed conversations advanced on the strength of a working demo rather than a deck alone, and Singapore incorporation with tax and legal advisors engaged before any cap table decision is finalized.

**What this plan does not claim.** No revenue exists yet. No debt facility is signed. No card issuer relationship is signed. The unit-economics figures above are a model, clearly labeled as such wherever they appear, not a forecast of certain outcomes. Every number in this document either traces to a public, cited fact or to Iron's own published, adjustable model; nothing here is invented to make the story land.

---

*Everyone else sells a bitcoin loan. Iron is building the bitcoin bank, the most trustworthy one, for the people who refuse to sell.*
