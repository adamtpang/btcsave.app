# BTCSave: pitch brief

> ARCHIVED (pre-pivot). This is the original BTCSave savings-app brief. The product has since pivoted to Iron, the non-custodial bitcoin credit card. For the current brief see `ONEPAGER.md`. Kept here for reference only.

> Stack bitcoin every week. Automatically. Self-custody savings on the rails Southeast Asia already uses.

**One-liner:** BTCSave is *Acorns for Bitcoin* in Southeast Asia. A set-and-forget app that auto-buys a fixed amount of BTC every week through local e-wallets (GCash, DANA, MoMo) and lands it in keys the user controls. Not an exchange. A savings habit.

---

## The problem
- 270M+ people across PH/ID/VN already live in e-wallets, and crypto adoption is among the highest on earth (VN #4, ID #6, PH #9 globally, Chainalysis 2025).
- But "saving in Bitcoin" still means opening an **exchange**: trading screens, order books, 200 coins, custody you don't control. That is intimidating, and it is the opposite of saving.
- The currencies people earn in keep losing value. They want a disciplined way to put a little into hard money every week, without becoming a trader.

## The product (the wedge)
**One job, done well: an automated weekly BTC buy.** No charts, no trading, no jargon.
- Pick an amount (₱1,000/week). Pick a day. Done. It pulls from GCash/DANA/MoMo automatically.
- Sats land in **self-custody by default**. A bank, not a casino.
- We **integrate a licensed rail** (for example IBEX) rather than chase our own VASP license on day one. Stay non-custodial, stay lean.

The on-ramp is the wedge. The **recurring deposit base is the moat**: it compounds into a Bitcoin savings and banking layer.

## Who it's for (ICP)
1. **Beachhead: Network School and Bitcoin-native early adopters.** USD-earning, high-savings-rate, in-region founders and builders. They *can* do $50 to $200/week and they are in our network *today*. First 1,000 users come from us, not from paid acquisition.
2. **OFW families and remittance recipients.** PH alone moved **$35.6B home in 2025** (7.3% of GDP). Routing even a slice into BTC savings is a massive, high-velocity flow.
3. **Mass-market young savers.** ~16M Filipinos already own crypto; most find exchanges intimidating. This is the volume layer (~$10 to $25/week).

## Market and launch sequence
| | 🇵🇭 Philippines | 🇮🇩 Indonesia | 🇻🇳 Vietnam |
|---|---|---|---|
| Rail | GCash (81M users) | DANA (~160M) | MoMo (~30M) |
| Crypto adoption | #9, ~16M, 22-23% own | #6, ~12M | #4, ~18.6M, ~20% own |
| Regulation | **Mature** (BSP VASP/OPS) | OJK since Jan 2025 (trade yes, pay no) | Just legalized, 5-yr pilot 2025 to 2030 |
| Tailwind | **$35.6B/yr remittances** | 280M population | Highest adoption rate |
| **Phase** | **1, launch** | 2 | 3 |

**Launch Philippines first.** Rails, regulation, adoption, and remittances all align. Crowded means validated. Expand to markets where the closest competitor (Pouch) does not operate.

## Competition and how we win
| Player | Where | What it is | Custody | Fee |
|---|---|---|---|---|
| **Pouch.ph** | PH only | BTC/Lightning wallet + remittance | Non-custodial | 1% |
| Coins.ph | PH | Full exchange (18M users) | Custodial | varies |
| Maya | PH | Bank + crypto super-app | Custodial | varies |
| Pintu | ID | Exchange with Auto-DCA built in | Custodial | varies |
| **BTCSave** | PH to ID to VN | *Just* automated BTC savings | Self-custody default | ~1.5% all-in |

**Why us, not them:**
1. **Product focus.** Everyone else is an exchange with a buy button. We are a savings product. Radical simplicity is the feature.
2. **Self-custody by default.** Coins/Maya/Pintu custody your coins; we don't.
3. **Multi-rail, multi-market.** Pouch is PH-only. We are built for the region.

## Business model (the corrected math)
The headline target is **20k users × $200/week = ~$3M revenue**. The arithmetic is right; the $200/week isn't. That is ~2.8x the average Filipino's *entire* disposable income, and ~15x the realistic retail saver (₱2,000 to ₱4,000/month, roughly $8 to $16/week).

**The honest path to the same $3M:** ~$3.85M of deposits flowing in *every week* at a 1.5% take. The only question is the shape:

| Shape | Users | Per user | Realism |
|---|---|---|---|
| Headline target | 20,000 | $200/wk | whale ARPU, unrealistic for mass market |
| **SE-Asia reality** | **~155,000** | **$25/wk** | **0.2% of GCash's 81M users, credible** |

**On the 1.5% take:** it is the highest in the set (River 0%, Strike ~0%, Swan 0.99%, Pouch 1%). Defend it as an **all-in stack**: trading (~1%) + FX spread on the wallet-to-BTC leg + withdrawal, not a headline trading fee. Model 1% as the downside case.

## Why now
- Adoption inflected: APAC grew on-chain value 69% YoY to 2025; VN and ID among the fastest.
- Regulatory doors opening: VN legalized crypto (2025), ID moved to OJK oversight, PH path is proven.
- E-wallet rails are now ubiquitous and API-accessible. The on-ramp plumbing finally exists.

## Why us
Two **technical operator-founders** sitting inside the two communities that matter:
- **Christian:** native in the global **Bitcoin** community (credibility, ecosystem, warm investor paths).
- **Adam:** native in **Network School's** in-region founder network (our beachhead users).
- Both ship code. Both have run businesses. No agency, no "we need a CTO" gap.
- **The gap we are pre-empting:** neither is a payments/compliance veteran, so we integrate a licensed rail instead of building one. Weakness becomes a de-risking move.

## Roadmap (first 6 to 9 months)
1. **PH MVP:** GCash in, recurring weekly BTC buy, self-custody out, via a licensed rail partner.
2. **Beachhead launch:** Network School + Bitcoin community; target first 500 to 1,000 active savers.
3. **Remittance angle:** pilot "save a slice of what you receive."
4. **Indonesia:** DANA + OJK-compliant rail partner.
5. **Vietnam:** enter under the pilot regime.

## Open questions for the design workshop
- The core flow: how few taps from "install" to "first recurring buy live"?
- Self-custody UX: how do we make keys-you-control feel as easy as a bank balance? (the hardest design problem)
- Onboarding for a non-crypto-native saver vs. an NS power-user: one flow or two?
- Trust and safety cues: how do we *look* like a bank, not a casino?
- What is the single screen that makes someone go "oh, I get it"?

---
*Sources: Chainalysis 2025 Global Crypto Adoption Index; BSP remittance data 2025; Pouch.ph pricing; Strike/Swan/River fee comparisons; GCash/DANA/MoMo user figures; Vietnam Digital Technology Law 2025; Indonesia OJK POJK 27/2024; ADB Philippine household saving rates.*
