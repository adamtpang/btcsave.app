# Iron: project context

**What:** A non-custodial bitcoin-backed credit card. Lock bitcoin as collateral, borrow dollars (USDT) against it, spend on a Visa card, never sell. Two segments (the barbell): bitcoiners who refuse to sell, and the people banks reject. Launch via a licensed card rail, non-custodial by default. ("Keep your bitcoin, spend dollars.")

**Why:** Targeting a Bitcoin/Lightning seed-investor pitch and a design workshop.

**Founders:** Adam (Network School network = beachhead users) + Christian (global Bitcoin community). Both technical operators. Pre-empt the compliance gap by integrating a licensed rail (for example IBEX), staying non-custodial.

## Positioning decisions (locked)
- **Name:** Iron (domain iron.credit). Product pivoted from a bitcoin savings app to a non-custodial bitcoin-backed credit card ("keep your bitcoin, spend dollars"). Project folder still named satsave.app.
- **Launch market: Philippines first** (BSP-regulated, GCash 81M users, $35.6B/yr remittances), then Indonesia, then Vietnam.
- **Wedge:** radical simplicity (one job: borrow dollars against your bitcoin and spend, without selling) + self-custody by default + multi-rail (issuer redundancy) + radical transparency.
- **Competitors:** bitcoin-backed credit and loans (alive): Nexo, Ledn, Coinbase (BTC loans via Morpho), Strike, Unchained. The cautionary graveyard (dead): Celsius, BlockFi, Voyager (see `GRAVEYARD.md`). PH and SE-Asia crypto players: Pouch.ph, Coins.ph, Maya.
- **Business model:** net interest spread (the core, Chase on a real balance sheet) + card interchange + thin transparent FX + premium subscription. Overcollateralized, so a fraction of Chase's charge-offs. Fund the loan book with a debt facility (debt, not equity); never dilute the company to fund the book.

## Non-negotiables: the graveyard rules
Distilled from how every prior bitcoin lender and crypto card died (full analysis in `GRAVEYARD.md`). Hard design constraints, not preferences. The lending graveyard and the card graveyard died of different causes, so guard both.
1. **Never rehypothecate.** Make it structurally impossible (collaborative multisig, user holds a key). "Non-custodial" must mean we literally cannot move user bitcoin alone. (Killed Celsius, Babel, Hodlnaut, Vauld, Cred.)
2. **Always overcollateralize, liquidate transparently.** Publish LTV, liquidation threshold, and oracle. (Voyager died on one undercollateralized loan.)
3. **Never be a yield product.** Revenue is interchange + credit-line interest + FX, never lending out the collateral. This one rule removes four of the seven killers.
4. **No single counterparty can sink us.** Any collateral placed with a partner is segregated, ring-fenced (bankruptcy-remote), diversified, and disclosed. (3AC, Terra, FTX contagion.)
5. **Sell nothing that looks like an unregistered security.** No "earn interest" account, no return-promising token. (BlockFi, Celsius, Genesis, Abra, Nexo, Centra, Salt.)
6. **Licensed local rails from day one.** For PH, BSP and EMI licensing is the right to exist, not a "later" item. Regulate or retreat.
7. **Engineer around the card-rail single point of failure.** The number one card killer is the issuer or BIN sponsor, not bitcoin (WaveCrest bricked six card programs in one day; Wirecard). Multi-issuer redundancy + program portability. Prefer a Visa principal member (Rain) over a rented BIN. This is the multi-rail wedge.
8. **Real network relationship, never faked.** (Centra went to prison for faking a Visa tie.)
9. **Be the opposite of "custodial + opaque + yield."** Survivor DNA (Unchained, Ledn, Coinbase, Strike): non-custodial or segregated + overcollateralized + proof of reserves + no rehypothecation + bitcoin-focused + regulated. That is our spec.

## Style
- No em dashes in any content or copy. Use colons, commas, or parentheses.

## Stack
- Vite + React (JS) + Tailwind v4 (`@tailwindcss/vite`), recharts, lucide-react.
- Main component: `src/App.jsx` (interactive prototype with a headline-target vs SE-Asia-reality toggle).
- Run: `npm run dev` (port 5173). Build: `npm run build`. Preview config in `.claude/launch.json`.
- Deploy target: iron.credit (Vercel, git-connected auto-deploy). Repo: github.com/adamtpang/iron.credit.

## Company OS (internal tool, dogfooded here)
This repo doubles as the first dogfood of a portable company operating system in `company-os/`. The dashboard (`company-os/index.html`) reads `company-os/company-os.data.js` (a JSON-style config and state file, the single source of truth, kept in sync with these context files). Full spec, schema, and commands: `company-os/SKILL.md`.
- When the user asks, operate it: "log this week", "check off <milestone>", "set <metric> to N", "interview me" (onboarding a new company), "sync from context". After edits, tell them to refresh the dashboard.
- It is internal. Never deploy `company-os/` to the public site (keep it out of `src/` and `public/`; it is not a route).

See `MASTERPLAN.md` (strategy, master plan, income and speed scoreboard), `GRAVEYARD.md` (failure modes to avoid), `PROTOTYPE.md` (build path + system diagrams), `SITEMAP.md` (IA + SEO plan), `COMPANY.md` and `COFOUNDER.md` (operating and team playbooks), and `ONEPAGER.md` for the current brief. (`PITCH.md` is the archived pre-pivot BTCSave savings-app brief, kept for reference only.)
