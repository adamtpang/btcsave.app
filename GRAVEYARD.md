# The graveyard: why bitcoin lenders and crypto cards died, and why Iron will not

The single most important finding: **the lending graveyard and the card graveyard died of different causes.** Lenders died of what they did with customer collateral (rehypothecation), of counterparty contagion, and of selling unregistered yield. Cards died of one thing: depending on a single issuer or BIN sponsor that got cut off. Iron's design already neutralizes the lending killers. The card-rail single point of failure is the one risk we must engineer around, and it maps onto our multi-rail wedge.

Almost none of these companies were killed by "bitcoin is volatile." They were killed by their own structure.

## The graveyard is proof of demand, not proof of impossibility

This is the answer to the first objection anyone raises: *"didn't this already fail?"*

Commercial failure does not mean the product was bad. It means they could not figure out how to run it without stealing. Palmer Luckey, on why he collects commercially failed motorcycles: *"Commercial failure doesn't mean a product's bad. It just means they couldn't figure out how to make a business out of it."*

Borrowing dollars against bitcoin is a real, durable, recurring need. The companies below **proved** that need by attracting billions of dollars of it in a few short years. Then they destroyed themselves on structure: rehypothecating the collateral, selling unregistered yield, betting the book on a single counterparty. Every one of those is a choice, not a law of physics.

The demand did not die with them. It is larger now, and it is unserved by anyone the market fully trusts. **A graveyard this size is a market signal, and the fact that everyone in it died the same few deaths is the specification for the company that survives.** That specification is the rest of this document.

---

## The lenders that collapsed

| Company | Died | What killed it |
|---|---|---|
| **Celsius** | Froze June 2022, bankrupt July 2022, >$1.2B hole | The textbook fraud case. Promised up to ~18% yield, so it rehypothecated and gambled customer deposits and propped up its CEL token. $4.7B FTC settlement (2023). Mashinsky pleaded guilty, 12 years. Its card was a waitlist that never launched. |
| **BlockFi** | Bankrupt Nov 2022 | Two hits: a $100M SEC and states settlement (Feb 2022) for selling its Interest Accounts as unregistered securities, then the kill shot: it lashed itself to FTX (a $400M credit line) and had ~$275M of Alameda exposure. The card was fine; the lender behind it died. |
| **Voyager** | Bankrupt July 2022 | One undercollateralized loan: ~$650M (15,250 BTC + 350M USDC) to Three Arrows Capital, which defaulted. The debit card was discontinued. |
| **Genesis** | Froze Nov 2022, bankrupt Jan 2023 | The lender behind Gemini Earn. Contagion from 3AC and FTX. Froze ~$900M of ~340,000 Gemini Earn users' assets. SEC $21M, NY AG ~$2B victim settlement, both over unregistered Earn. |
| **Cred** | Bankrupt Nov 2020 | The original warning shot everyone ignored. Handed 800 BTC to a fraudster, lent ~$39M to a single Chinese lender that could not repay, held worthless tokens. Execs convicted of wire fraud. |
| **Vauld** (Singapore) | Froze July 2022 | Bank run amid Terra and 3AC contagion. ~$200M withdrawn in weeks. |
| **Hodlnaut** (Singapore) | Froze Aug 2022 | ~$187M exposure to the Terra/UST collapse. Withdrew its MAS license application. |
| **Babel** (Hong Kong) | Froze June 2022 | Lost >$280M trading customer funds. Its prop desk got uncapped customer capital with no risk controls. |
| **Abra** | US wind-down 2023 to 2024 | Regulatory retreat, not a blowup. SEC and 25 states settled (unregistered securities + unlicensed); up to $82.1M returned. Customers were largely made whole. |
| **Nexo** | Exited the US 2022 to 2023 | $45M SEC and states settlement over its Earn product. Wounded, not killed: it exited rather than fight, because it was not also carrying fatal losses. |

## The card graveyard (a different killer)

| Event | When | What it teaches |
|---|---|---|
| **WaveCrest / Visa cutoff** | Jan 2018 | Visa terminated one BIN sponsor and **instantly bricked TenX, Wirex, Cryptopay, Xapo, Bitwala, and BitPay cards in a single day.** Every one of them had outsourced its existence to one intermediary it did not control. |
| **Wirecard collapse** | June 2020 | €1.9B "missing." Crypto card programs (Crypto.com and others) had to scramble to new issuers overnight. Same lesson, different rail. |
| **Centra Tech** | 2018 | ICO fraud (~$32M, promoted by Mayweather and DJ Khaled). The "Centra Card" was a lie: no Visa or Mastercard relationship existed. Founders went to prison. The real relationship is exactly what fraudsters fake, because it is hard to get. |
| **TenX** | Shut 2021 | Raised ~$80M in 2017. Card died with WaveCrest. The PAY token rewards were never delivered. |
| **Monolith / TokenCard** | Wound down Oct 2024 | Died honestly: ~35,000 users, ~$113.6M spend, no fraud, no run. It just could not make the unit economics work at small scale. The "couldn't make the math work" case. |
| **BlockFi Rewards Visa** | Nov 2022 | Died with its parent. The card had no flaw; the lender behind it imploded. |

---

## The failure patterns, ranked by how often they were the killer

1. **Rehypothecation: doing anything with customer collateral** (lending it, trading it, funding yield). Present in nearly every death. The collateral is not there when users want it.
2. **Counterparty contagion and concentration** (3AC, Terra, FTX). One borrower or platform you trusted detonates your whole book.
3. **Unregistered-securities yield products.** Even with no blowup, regulators force shutdown or exit (Nexo, Abra).
4. **Liquidity and maturity mismatch leading to a bank run.** Promised instant withdrawals against locked assets.
5. **Single issuer or BIN dependency (card side).** WaveCrest and Wirecard. The dominant card killer.
6. **Outright fraud and Ponzi-token mechanics** (CEL, Cred, Centra).
7. **Unsustainable yield economics.** The only way to pay 8 to 18% is to gamble or Ponzi.

The meta-pattern: the dead were **custodial, opaque, and yield-bearing.** They took your coins, hid what they did with them, and promised a return that required risking them.

## Who survived, and why

| Survivor | What they did differently |
|---|---|
| **Unchained** | 2-of-3 multisig collaborative custody. The client holds a key, so Unchained physically **cannot** rehypothecate. The strongest possible version of the promise. |
| **Ledn** | No rehypothecation, segregated verifiable on-chain addresses, the longest-running proof of reserves (since Jan 2021). "Never lost a satoshi" through 2022. |
| **Coinbase** (BTC loans via Morpho) | On-chain, overcollateralized (≥133%), transparent automated liquidation. $2B+ originated. |
| **Strike** | Does not rehypothecate, segregated and liquidation-proof loans, lending proof of reserves, bitcoin-only. |
| **Xapo** | Survived by de-risking: sold custody to Coinbase ($55M, 2019), became a licensed Gibraltar bank. Regulate or retreat. |

Survivor DNA: **non-custodial or transparently segregated, overcollateralized, proof of reserves, no rehypothecation, bitcoin-focused, regulated.** That is, point for point, Iron's stated design.

---

## The lessons for Iron

1. **Never rehypothecate, and make it structurally impossible, not a promise.** Collaborative multisig where the user holds a key means we literally cannot move their bitcoin alone. That is what "non-custodial" has to mean.
2. **Overcollateralize and liquidate transparently.** Publish the LTV, the liquidation threshold, and the oracle. Voyager died from one undercollateralized loan; Coinbase survives at $2B+ with ≥133%.
3. **Do not be a yield product.** Earn on interchange, interest on the credit line, and FX, never on lending out the user's bitcoin. This one choice removes killers 1, 4, 6, and 7 at once.
4. **No single counterparty can take you down.** If collateral sits with a partner, segregate it, ring-fence it (bankruptcy-remote), diversify, and disclose it.
5. **Do not sell anything that looks like an unregistered security.** A credit line plus a card is far safer ground than an "earn interest" account. No return-promising token (the CEL, PAY, Centra trap).
6. **Licensed local rails from day one.** For Philippines first, the BSP and EMI licensing is the product's right to exist, not a "later" item. Regulate or retreat (Abra, Nexo, Xapo).
7. **Engineer around the card-rail single point of failure.** The number one card killer is the issuer or BIN sponsor, not bitcoin. WaveCrest bricked six card programs in a day. Design for multi-issuer redundancy and program portability. This is exactly why Rain, a Visa principal member that owns its own BINs, is safer than renting one fragile BIN sponsor, and it is our multi-rail wedge.
8. **Have a real network relationship and never fake it.** Centra went to prison for faking the thing that is genuinely hard to get. Treat the genuine Visa and issuer agreements as the core asset.

## The graveyard is our best trust marketing

Every dead company above is a reason to choose Iron. The plan: a public page (a hub plus one page per company) that captures high-intent search ("what happened to Celsius," "is BlockFi safe," "are bitcoin loans safe") and converts it honestly: here is exactly why it failed, and here is the specific Iron design choice that means we cannot fail the same way. We are the only ones who can credibly say "we are built to be the opposite of the graveyard," because we are.

*(All dates and figures sourced from SEC, FTC, NY AG, CSBS, and CoinDesk, The Block, Bloomberg, Fortune. See research brief in session history for full source links.)*
