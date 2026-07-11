# IRON: GAP ANALYSIS AND WIN CONDITIONS
Saturday July 11, ~15:00. Demo Sunday 18:00. 27 hours.

---

## 1. WIN CONDITIONS

Adam is hors concours, so winning is not a prize. Winning is five yes/no outcomes, all scoreable by Sunday 21:00:

| # | Condition | Measured by | Yes/No test |
|---|---|---|---|
| W1 | **The demo runs end to end, live** | All seven beats executed on stage without switching to the backup recording: (1) signet multisig txid shown on mempool.space/signet, (2) credit line opens, (3) spend approved at safe LTV, (4) one deliberate over-limit decline, (5) real smoothie paid at the NS cafe over Lightning with real sats, (6) repay in sats, (7) release tx broadcast on signet | All 7 live = yes. Any beat played from video = no |
| W2 | **Fulgur asks for the follow-up** | A Fulgur partner requests or accepts a specific next meeting (calendar invite, agreed date, or "send me the deck and let's talk Tuesday" with contact exchanged) before Sunday 21:00 | Concrete date or invite exists = yes |
| W3 | **The room believes the wedge** | Two proxies, both required: (a) iron.credit waitlist gains 10+ signups from event attendees between demo and 21:00, (b) at least one judge or attendee repeats the thesis back unprompted ("the collateral is the credit score" or "Nubank for the Philippines") | Both = yes |
| W4 | **Rain thread opened** | Email to Rain (or a warm intro request to someone who knows them) sent by Sunday 21:00, containing the live demo link and the issuer-adapter framing. Sent is in Adam's control; a reply is not, so sent is the bar | Email in sent folder = yes |
| W5 | **Christian thread resolved** | An explicit cofounder conversation happens and ends with a committed, dated next step (a trial build week, an equity conversation date, or a clear no) before he leaves the event | Dated commitment or clean no = yes. "Let's stay in touch" = no |

**Integrity gate (overrides all five):** both lines said on stage, verbatim, and no prize accepted. If W1-W5 all hit but the room suspects organizer self-dealing, the weekend is a loss.

---

## 2. THE GAP TABLE

Ordered by demo-criticality. Total honest build: 22-29 h across three owners. Cut-to-core path: ~17 h. Rows 1 and 4 have external dependencies that must start in the next hour.

| # | Component | Current state | Needed by Sunday 18:00 | Owner | Hours | Cut-line fallback |
|---|---|---|---|---|---|---|
| 0 | Repo hygiene (do first, non-negotiable) | 23 files, +465/-237 uncommitted since Jul 7-8; iron.credit serving stale Jul 5 build | Committed, `vercel --prod` run, clean base for demo branch | Adam | 0.5 | None. Skipping this tangles every later change |
| 1 | Signet 2-of-3 multisig lock, visible on explorer | Zero bitcoin code, zero crypto deps. Faucets are the flakiest external | Funded 2-of-3 P2WSH on signet, lock tx confirmed, mempool.space/signet link embedded in UI. **Start faucet drips within the hour** | Christian (Claude if he is out) | 3-5 | Sparrow-created wallet instead of bitcoinjs-lib; worst case, a pre-confirmed lock tx from Saturday night shown on explorer, narrated honestly |
| 2 | Credit-line state machine + /demo dashboard | Nothing. But /demo route inherits the whole design system in minutes; CardView is 80% of the spend screen | LOCKED, LINE_OPEN, SPENT, REPAID, RELEASED driving collateral panel, LTV gauge, tx feed, explorer links | Claude | 6-9 (machine 3-5 + glue 3-4 reusing components) | Client-side state referencing real txids; skip Vercel functions entirely unless two devices must share state |
| 3 | LTV-gated spend approval + one live decline | Score.jsx already contains the engine (GRADES, LIQ_THRESHOLD, limit math) as client JS | authorize() using Score math + live CoinGecko price; scripted approve, then deliberate over-limit decline | Claude | 2-3 | Pin the BTC price to a constant fetched at rehearsal if CoinGecko flakes on venue wifi |
| 4 | Real Lightning smoothie payment | Nothing. NS cafe untested: wifi, merchant wallet, invoice flow all unknown | UI shows approval, operator pays merchant invoice from funded Phoenix/Blink wallet. **Fund the wallet and scope the cafe today** | Adam (cafe + wallet), Christian (payment flow) | 0-2 code + 2 rehearsal | Manual operator-pays flow, never in-app WebLN/LNbits (saves 4-6 h). Absolute floor: pay the barista on camera during setup, replay clip live, say so |
| 5 | Repay in sats + collateral release | Nothing | Repayment invoice displayed, then broadcast of a **pre-signed** 2-of-3 release PSBT on signet. Never sign live | Christian (Claude if out) | 3-5 | Show the pre-signed PSBT and broadcast it; if signet mempool misbehaves, show the raw signed tx and the earlier lock txid |
| 6 | Business slide + 60-second story | Deck exists (Iron-preseed-Fulgur.pptx), fulgur-followup.md, Investors.jsx model. Story below not yet rehearsed | One slide, story delivered in 60 seconds without notes, rehearsed 3x | Adam | 1.5 | The slide is skippable; the spoken 60 seconds is not |
| 7 | Agent-spend kicker | Nothing | Scripted agent calling the same authorize() with a spend policy: approve one, decline one | Claude | 2-3 | First thing cut at the 09:00 decision. Demo stands without it |
| 8 | Issuer-agnostic adapter | Nothing; PROTOTYPE.md confirms no partner-side work. Stripe Issuing enablement unverified | Clean IssuerAdapter interface with MockRain impl shown in code for 20 seconds; Rain named as roadmap | Claude | 1-2 (+2-4 risk for Stripe) | **Check Stripe Issuing in the dashboard in the first hour.** If not enabled, MockRain without shame; do not burn hours on Stripe activation |

**Cut-line decision point: Sunday 09:00, after the first full dry run.** Cut order: 7 (agent kicker), then Stripe-real in 8, then in-app Lightning ambitions in 4. Rows 1, 2, 3, 5 are never cut; without them there is no demo, only a website.

---

## 3. THE BUSINESS MODEL SLIDE

One slide: left, a Chase statement figure; center, the Nubank curve; right, "charge-offs: ~0 by construction." The 60 seconds, verbatim:

> "I pay Chase more than any other bill in my life, every month. I know this machine from the paying side, and I know where its profit comes from: interest on people who cannot pay, and fees on people who can. The best credit business ever built on that machine is Nubank. One free card, in a market where banks charged 300 percent and rejected everyone, seven dollar CAC, 80 percent word of mouth, 127 million customers. The one problem Nubank never solved is charge-offs, unsecured credit risk, a permanent tax paid by every lender in history. Iron deletes it. Lock bitcoin in a multisig you co-control, spend dollars against it, never sell. The collateral is the credit score. No FICO, no charge-offs, so we skip the 30-year underwriting arms race and win on cost of funds. The Philippines is Brazil in 2013: 15 percent card penetration, 42 percent APRs, half the country unbanked, and Nubank has already placed its own bet there through Tyme. You just watched it work with real sats. That was the pitch."

Rehearse it three times Sunday afternoon. If a judge leans in on the mock Visa number or the Iron/MoonPay name collision, the answer is the same honest posture already on the site: illustrative card, no counterparty signed, Rain is the named roadmap.

---

## 4. THE 27-HOUR SCHEDULE

Assumes Christian is in; every Christian row falls to Claude (code) or Adam (physical) if he is out, and row 7 plus Stripe die immediately to pay for it.

| Block | Adam (half bandwidth, showrunning) | Christian | Claude (continuous) |
|---|---|---|---|
| **Sat 15:00-16:00 UNBLOCK HOUR** | Commit the 465 lines, `vercel --prod`. Check Stripe Issuing dashboard. Text Christian a concrete ask with this table, answer needed by 17:00. Start signet faucet drips. Fund Phoenix/Blink with real sats. Walk to NS cafe: confirm smoothie price, merchant Lightning wallet, wifi | Reply in/out. If in: claim rows 1 and 5 | Scaffold /demo route, state machine skeleton, port Score.jsx math into authorize() |
| **Sat 16:00-19:00** | Showrun arcarena. Between duties: verify faucet coins landed, test one Lightning payment to the cafe wallet | Build the 2-of-3 signet wallet (Sparrow fastest), receive faucet coins, broadcast the lock tx tonight so it has confirmations by morning | State machine complete, CardView converted to live state, CoinGecko price feed with pinned fallback |
| **Sat 19:00-22:00** | Dinner circuit. **At the Saturday all-hands, integrity line 1:** "Quick disclosure: I am demoing something tomorrow too, hors concours. I am not eligible for any prize I am handing out. The Iron website existed before this weekend; every line of bitcoin and credit-engine code in the demo is being written here, at the event, same clock as you." | Design the release path, draft the release PSBT flow | LTV auth wired to UI: approve beat, decline beat, LTV gauge |
| **Sat 22:00-01:00** | **In bed by 00:00.** He demos and showruns tomorrow; a tired founder loses W2 in the follow-up conversation | Lightning operator flow: merchant invoice display, payment confirmation beat. Hand off open items to Claude, sleep by 01:00 | Dashboard glue: collateral panel, tx feed, embedded explorer links |
| **Sun 01:00-07:00** | Asleep | Asleep | Repay/release UI, agent kicker (row 7), IssuerAdapter + MockRain (row 8), polish pass, deploy to iron.credit/demo |
| **Sun 07:00-09:00** | **First full dry run** against real signet txids, alone, timed. Write the fix list | Join dry run remotely or in person | Standby for live fixes |
| **Sun 09:00 CUT DECISION** | Apply the cut order from Section 2. Whatever is cut stays cut | | |
| **Sun 09:00-12:00** | Showrun the morning. Send the Rain email draft to himself for the 20:00 send | **Pre-sign the release PSBT with the real coins. It must exist, verified, before lunch** | Burn the fix list |
| **Sun 12:00-14:00** | **Cafe rehearsal with real sats: buy an actual smoothie end to end.** If venue wifi fails here, it fails now, not on stage. Record this run as the backup video | Operate the merchant side of the rehearsal | Fixes from rehearsal |
| **Sun 14:00-16:00, FREEZE 15:00** | Business slide final. Speak the 60 seconds three times. After 15:00 Claude ships bugfixes only, zero features | Verify release PSBT broadcasts cleanly on a test copy | Feature freeze at 15:00 |
| **Sun 16:00-17:30** | **Two full dress rehearsals** including the decline beat and the release broadcast. Charge phone, load backup video locally, pin BTC price | Run the merchant/wallet side both times | Frozen; standby |
| **Sun 17:30-18:00** | Stage setup, showrun the other demos first | Positioned at the cafe or merchant wallet | |
| **Sun 18:00 DEMO** | **Opens with integrity line 2, first ten seconds:** "Before I start: I am the organizer, this runs hors concours, and everything you are about to see on-chain was built at this event since yesterday afternoon. Now watch me buy a smoothie without selling my bitcoin." Then the seven beats, then the 60-second story | Executes the smoothie payment live | |
| **Sun 18:30-21:00 HARVEST** | This is where W2-W5 are won: walk to the Fulgur partner and ask for the meeting with a proposed day. Send the Rain email. Sit down with Christian, ask the cofounder question directly, get a dated answer. Point the room at iron.credit, count the waitlist delta at 21:00 | Cofounder conversation | Post-demo deploy of anything shown, so iron.credit matches the stage |

**The three things that kill this if not started by Saturday 16:00:** signet faucet coins, a funded Lightning wallet, and the cafe conversation. Everything else is code, and code is the one resource that runs all night.
