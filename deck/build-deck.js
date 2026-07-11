// Iron pre-seed deck generator. Monochrome, premium, old-money bank aesthetic.
const pptxgen = require("pptxgenjs");

const C = {
  bg: "0E1014", panel: "16181C", panel2: "1C2026", line: "2A2F37",
  ink: "F3F5F7", mut: "9AA0A8", plat: "E7EAED", faint: "6C727B",
};
const DISP = "Cambria";   // safe-list serif for display
const BODY = "Calibri";   // safe-list sans for body
const MARK = "public/apple-touch-icon.png";

const p = new pptxgen();
p.layout = "LAYOUT_16x9"; // 10 x 5.625
p.author = "Iron";
p.title = "Iron pre-seed";

const makeShadow = () => ({ type: "outer", color: "000000", blur: 9, offset: 3, angle: 90, opacity: 0.35 });

function base(s, n) {
  s.background = { color: C.bg };
  s.addImage({ path: MARK, x: 0.55, y: 0.42, w: 0.26, h: 0.26, altText: "Iron mark" });
  s.addText("IRON", { x: 0.88, y: 0.43, w: 1.4, h: 0.26, margin: 0, fontFace: DISP, fontSize: 13, color: C.plat, charSpacing: 3, valign: "middle" });
  s.addText("iron.credit", { x: 0.55, y: 5.18, w: 3, h: 0.25, margin: 0, fontFace: BODY, fontSize: 9.5, color: C.faint });
  if (n) s.addText(String(n).padStart(2, "0"), { x: 8.9, y: 5.18, w: 0.55, h: 0.25, margin: 0, fontFace: BODY, fontSize: 9.5, color: C.faint, align: "right" });
}
function head(s, kicker, title, tw) {
  s.addText(kicker, { x: 0.55, y: 1.02, w: 8.9, h: 0.28, margin: 0, fontFace: BODY, fontSize: 11.5, color: C.mut, charSpacing: 3, bold: true });
  s.addText(title, { x: 0.55, y: 1.32, w: tw || 8.9, h: 0.9, margin: 0, fontFace: DISP, fontSize: 29, color: C.ink, lineSpacingMultiple: 1.0 });
}
function card(s, x, y, w, h) {
  s.addShape(p.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: C.panel }, line: { color: C.line, width: 1 }, shadow: makeShadow() });
}

// ---------- S1 Title ----------
let s = p.addSlide(); s.background = { color: C.bg };
s.addImage({ path: MARK, x: 0.7, y: 0.62, w: 0.5, h: 0.5, altText: "Iron mark" });
s.addText("IRON", { x: 1.28, y: 0.66, w: 3, h: 0.42, margin: 0, fontFace: DISP, fontSize: 20, color: C.plat, charSpacing: 4, valign: "middle" });
s.addText("Keep your bitcoin.", { x: 0.68, y: 2.05, w: 9, h: 0.95, margin: 0, fontFace: DISP, fontSize: 52, color: C.ink });
s.addText("Spend dollars.", { x: 0.68, y: 2.95, w: 9, h: 0.95, margin: 0, fontFace: DISP, fontSize: 52, color: C.plat });
s.addText("The non-custodial bitcoin credit card.", { x: 0.72, y: 4.02, w: 9, h: 0.4, margin: 0, fontFace: BODY, fontSize: 17, color: C.mut });
s.addText("Pre-seed  ·  Iron, a Singapore company  ·  iron.credit", { x: 0.72, y: 5.02, w: 9, h: 0.3, margin: 0, fontFace: BODY, fontSize: 11.5, color: C.faint });
s.addNotes("Open: bitcoiners refuse to sell, but they still need dollars. Iron lets them spend their bitcoin's value on a Visa card, non-custodial. Anchor everything on trust: we are the opposite of the graveyard.");

// ---------- S2 Problem ----------
s = p.addSlide(); base(s, 2);
head(s, "THE PROBLEM", "A real need with no trustworthy home", 6.1);
const probs = [
  ["Asset-rich, cash-poor by choice", "Selling bitcoin is a taxable event and gives up the upside. Holders want dollars, not a sale."],
  ["Billions the banks reject", "No credit file, the wrong country, no history. Their bitcoin is the qualification banks ignore."],
  ["Every existing option is a trap", "Custodial, opaque, or region-locked. Celsius and BlockFi blew up rehypothecating customer funds."],
];
let y = 2.5;
probs.forEach(([t, d], i) => {
  s.addText(String(i + 1), { x: 0.55, y, w: 0.5, h: 0.6, margin: 0, fontFace: DISP, fontSize: 26, color: C.faint, valign: "top" });
  s.addText([{ text: t, options: { bold: true, color: C.ink, fontSize: 15, breakLine: true } },
             { text: d, options: { color: C.mut, fontSize: 12.5 } }],
    { x: 1.1, y: y - 0.02, w: 4.7, h: 0.85, margin: 0, fontFace: BODY, lineSpacingMultiple: 1.02 });
  y += 0.92;
});
card(s, 6.15, 2.5, 3.3, 2.35);
s.addText("THE GRAVEYARD", { x: 6.45, y: 2.72, w: 2.8, h: 0.3, margin: 0, fontFace: BODY, fontSize: 10.5, color: C.mut, charSpacing: 2, bold: true });
s.addText([
  { text: "Celsius", options: { breakLine: true, color: C.faint, fontSize: 17, strike: true } },
  { text: "BlockFi", options: { breakLine: true, color: C.faint, fontSize: 17, strike: true } },
  { text: "Voyager", options: { color: C.faint, fontSize: 17, strike: true } },
], { x: 6.45, y: 3.12, w: 2.8, h: 1.0, margin: 0, fontFace: DISP, lineSpacingMultiple: 1.15 });
s.addText("Died custodial, opaque, and rehypothecated. We are built to be the opposite.", { x: 6.45, y: 4.2, w: 2.75, h: 0.6, margin: 0, fontFace: BODY, fontSize: 11.5, color: C.mut });
s.addNotes("The lending graveyard died of the same disease: they lent out customer collateral. Our whole design forbids it. This is the wedge with a bitcoin-native investor.");

// ---------- S3 Product ----------
s = p.addSlide(); base(s, 3);
head(s, "THE PRODUCT", "Your Chase card, backed by bitcoin not a credit score");
const steps = [
  ["1", "Deposit bitcoin", "Into 2-of-3 collaborative custody. You hold a key, so we cannot move it alone."],
  ["2", "Get a USDT line", "Instant credit against your bitcoin. Your collateral qualifies you, no credit file."],
  ["3", "Spend anywhere", "Tap a Visa card wherever it is accepted, or withdraw USDT to your wallet."],
  ["4", "Repay or top up", "Flexible, and instant over Lightning. Your bitcoin stays yours, upside intact."],
];
let cx = 0.55; const cw = 2.075, gap = 0.2;
steps.forEach(([n, t, d]) => {
  card(s, cx, 2.45, cw, 2.35);
  s.addText(n, { x: cx + 0.22, y: 2.65, w: 1, h: 0.5, margin: 0, fontFace: DISP, fontSize: 30, color: C.plat });
  s.addText(t, { x: cx + 0.22, y: 3.25, w: cw - 0.44, h: 0.4, margin: 0, fontFace: DISP, fontSize: 15.5, bold: true, color: C.ink });
  s.addText(d, { x: cx + 0.22, y: 3.66, w: cw - 0.44, h: 1.0, margin: 0, fontFace: BODY, fontSize: 11, color: C.mut, lineSpacingMultiple: 1.02 });
  cx += cw + gap;
});
s.addNotes("Four steps, no jargon. The daily feel is a normal card. The difference is the limit is backed by bitcoin and it is non-custodial the whole time.");

// ---------- S4 Mechanics ----------
s = p.addSlide(); base(s, 4);
head(s, "THE MECHANICS", "The part every dead lender buried");
const mech = [
  ["Loan-to-value", "40 to 50% to start, up to 60% at the top grade"],
  ["Liquidation", "Warned at every band, forced only near 85% LTV"],
  ["Price feed", "A public, independent oracle, never our own book"],
  ["Custody", "2-of-3 multisig, you hold a key. Native bitcoin, never wrapped"],
  ["Rehypothecation", "Structurally impossible, not a promise"],
  ["Collateral to dollars", "Bitcoin secures a USDT facility. It is never sold to fund your line"],
];
let my = 2.42;
mech.forEach(([k, v], i) => {
  if (i) s.addShape(p.shapes.LINE, { x: 0.55, y: my - 0.05, w: 8.9, h: 0, line: { color: C.line, width: 0.75 } });
  s.addText(k, { x: 0.55, y: my, w: 2.9, h: 0.38, margin: 0, fontFace: BODY, fontSize: 13, color: C.mut, valign: "middle" });
  s.addText(v, { x: 3.55, y: my, w: 5.9, h: 0.38, margin: 0, fontFace: DISP, fontSize: 14, color: C.ink, valign: "middle" });
  my += 0.42;
});
s.addNotes("A bitcoin lending investor drills straight into these. Have the numbers cold. The key-you-hold multisig is why rehypothecation is impossible, not merely promised.");

// ---------- S5 Moat ----------
s = p.addSlide(); base(s, 5);
head(s, "WHY IT WINS", "Not a loan. A bitcoin bank.");
const moat = [
  ["A card, not just a borrow button", "A non-custodial bitcoin credit line plus a card and local-rail spend layer in emerging markets. Ledn and Coinbase lend, but they do not put a spendable card in your pocket in Manila."],
  ["Multi-issuer card redundancy", "No single BIN sponsor can brick us. The number-one card killer is the issuer, not bitcoin. Redundancy is structural resilience."],
  ["An underwriting-data flywheel", "Every loan we make teaches us how bitcoiners borrow and repay, the proprietary path toward unsecured credit."],
];
let ym = 2.4;
moat.forEach(([t, d]) => {
  card(s, 0.55, ym, 8.9, 0.82);
  s.addText(t, { x: 0.85, y: ym + 0.12, w: 8.3, h: 0.32, margin: 0, fontFace: DISP, fontSize: 15.5, bold: true, color: C.ink });
  s.addText(d, { x: 0.85, y: ym + 0.44, w: 8.3, h: 0.34, margin: 0, fontFace: BODY, fontSize: 11.5, color: C.mut });
  ym += 0.94;
});
s.addNotes("The survivors (Ledn, Coinbase, Strike) already have non-custodial and proof-of-reserves. Our differentiation is the card plus emerging-market spend layer, issuer redundancy, and the data flywheel.");

// ---------- S6 Business model ----------
s = p.addSlide(); base(s, 6);
head(s, "BUSINESS MODEL", "The Chase engine, on a real balance sheet");
const rev = [
  ["Net interest spread", "The core. We keep the spread on the drawn balance."],
  ["Card interchange", "On every dollar spent on the card."],
  ["Thin, transparent FX", "On USDT and local currency, the Wise way."],
  ["Premium subscription", "Higher LTV, no forced liquidation, priority."],
];
cx = 0.55;
rev.forEach(([t, d]) => {
  card(s, cx, 2.4, cw, 1.5);
  s.addText(t, { x: cx + 0.2, y: 2.58, w: cw - 0.4, h: 0.6, margin: 0, fontFace: DISP, fontSize: 14.5, bold: true, color: C.ink, valign: "top" });
  s.addText(d, { x: cx + 0.2, y: 3.15, w: cw - 0.4, h: 0.65, margin: 0, fontFace: BODY, fontSize: 10.5, color: C.mut });
  cx += cw + gap;
});
s.addText([
  { text: "Overcollateralized, so charge-offs are a fraction of Chase's 5 to 6%. ", options: { color: C.ink } },
  { text: "The loan book is funded by a debt facility (debt, never dilution).", options: { color: C.mut } },
], { x: 0.55, y: 4.2, w: 8.9, h: 0.6, margin: 0, fontFace: BODY, fontSize: 13.5, lineSpacingMultiple: 1.05 });
s.addNotes("This is a lending business, not a trading spread. The debt facility funds the book so we never dilute equity to lend. Overcollateralization is why losses stay near zero.");

// ---------- S7 Unit economics ----------
s = p.addSlide(); base(s, 7);
head(s, "UNIT ECONOMICS", "$100k MRR is a single-digit-thousands cohort");
const stats = [
  ["$100k MRR", "= $1.2M ARR"],
  ["~6,000", "cardholders (bitcoiner mix, ~$48M locked)"],
  ["~$18 / mo", "revenue per cardholder ($9.5 mass-market)"],
];
cx = 0.55; const sw = 2.87;
stats.forEach(([big, small]) => {
  card(s, cx, 2.45, sw, 1.55);
  s.addText(big, { x: cx + 0.22, y: 2.62, w: sw - 0.44, h: 0.6, margin: 0, fontFace: DISP, fontSize: 28, color: C.plat });
  s.addText(small, { x: cx + 0.22, y: 3.28, w: sw - 0.44, h: 0.6, margin: 0, fontFace: BODY, fontSize: 12, color: C.mut });
  cx += sw + 0.15;
});
s.addText([
  { text: "The math:  ", options: { color: C.mut } },
  { text: "loan book  ×  (net spread ~4% + interchange and FX ~3.6%)  =  revenue.", options: { color: C.ink } },
], { x: 0.55, y: 4.35, w: 8.9, h: 0.5, margin: 0, fontFace: BODY, fontSize: 13.5 });
s.addNotes("Reframe the goal as reachable: the first real milestone is a few thousand high-conviction bitcoiners from the beachhead, not a mass-market moonshot. This is on the /investors page as a live model.");

// ---------- S8 Market ----------
s = p.addSlide(); base(s, 8);
head(s, "THE MARKET", "Bitcoin's credit layer, launched where the need is highest");
card(s, 0.55, 2.42, 2.9, 1.5);
s.addText("~500M", { x: 0.77, y: 2.6, w: 2.5, h: 0.6, margin: 0, fontFace: DISP, fontSize: 30, color: C.plat });
s.addText("people now hold bitcoin", { x: 0.77, y: 3.24, w: 2.5, h: 0.5, margin: 0, fontFace: BODY, fontSize: 12, color: C.mut });
card(s, 3.6, 2.42, 2.9, 1.5);
s.addText("~$74B", { x: 3.82, y: 2.6, w: 2.5, h: 0.6, margin: 0, fontFace: DISP, fontSize: 30, color: C.plat });
s.addText("crypto-collateralized loans, 2025", { x: 3.82, y: 3.24, w: 2.5, h: 0.5, margin: 0, fontFace: BODY, fontSize: 12, color: C.mut });
card(s, 6.65, 2.42, 2.8, 1.5);
s.addText("Launch sequence", { x: 6.87, y: 2.58, w: 2.4, h: 0.3, margin: 0, fontFace: BODY, fontSize: 11, color: C.mut, charSpacing: 1.5 });
s.addText([
  { text: "Philippines", options: { breakLine: true, color: C.ink, fontSize: 14, bold: true } },
  { text: "then Indonesia, then Vietnam", options: { color: C.mut, fontSize: 12 } },
], { x: 6.87, y: 2.9, w: 2.4, h: 0.9, margin: 0, fontFace: DISP });
s.addText([
  { text: "Philippines first: BSP and EMI licensing, high adoption, and a $35B remittance flow. ", options: { color: C.ink } },
  { text: "Comps as color, not valuation targets: Nubank ~$55B, Coinbase ~$50 to 90B.", options: { color: C.mut } },
], { x: 0.55, y: 4.25, w: 8.9, h: 0.6, margin: 0, fontFace: BODY, fontSize: 13, lineSpacingMultiple: 1.05 });
s.addNotes("Tailoring: Fulgur's own savings-app RFS names the Philippines, Indonesia, and Vietnam by name. This is the exact geography Alex Mann runs from Singapore. Frame Iron as the credit evolution of that thesis.");

// ---------- S9 Why us ----------
s = p.addSlide(); base(s, 9);
head(s, "WHY US", "Two operators inside the two networks that matter");
card(s, 0.55, 2.4, 4.35, 1.35);
s.addText("Adam", { x: 0.8, y: 2.56, w: 3.9, h: 0.35, margin: 0, fontFace: DISP, fontSize: 17, bold: true, color: C.ink });
s.addText("Network School distribution. A heavy Chase, Discover, and Wise credit user: the founder is the customer.", { x: 0.8, y: 2.94, w: 3.9, h: 0.7, margin: 0, fontFace: BODY, fontSize: 12, color: C.mut });
card(s, 5.1, 2.4, 4.35, 1.35);
s.addText("Christian", { x: 5.35, y: 2.56, w: 3.9, h: 0.35, margin: 0, fontFace: DISP, fontSize: 17, bold: true, color: C.ink });
s.addText("Native in the global bitcoin community: credibility, ecosystem, and warm paths. Both technical operators who ship.", { x: 5.35, y: 2.94, w: 3.9, h: 0.7, margin: 0, fontFace: BODY, fontSize: 12, color: C.mut });
s.addText([
  { text: "Rails have credible integration paths we are actively pursuing: native bitcoin collateral in multisig, and a USDT credit line plus a Visa card via a licensed issuer, settled over Lightning of the kind IBEX provides. ", options: { color: C.ink } },
  { text: "No counterparty is signed yet, and we will never claim one that is not.", options: { color: C.plat, italic: true } },
], { x: 0.55, y: 4.0, w: 8.9, h: 0.95, margin: 0, fontFace: BODY, fontSize: 12.5, lineSpacingMultiple: 1.05 });
s.addNotes("Say the last line out loud in the room. Naming IBEX (a Fulgur portfolio company) as the intended Lightning rail is true and shows you know their portfolio. Never claim a signed partner you do not have.");

// ---------- S10 Roadmap ----------
s = p.addSlide(); base(s, 10);
head(s, "ROADMAP", "V1 to the bitcoin bank");
const phases = [
  ["V1", "Secured credit line plus USDT card. Non-custodial, radically transparent, Lightning."],
  ["Data", "Record how our own users borrow and repay. The underwriting moat."],
  ["Graduate", "Crypto credit scoring lifts trusted users to higher LTV, then unsecured revolving credit."],
  ["Bank", "Accounts, a savings funnel, more markets. The full bitcoin Chase."],
];
cx = 0.55;
phases.forEach(([t, d], i) => {
  card(s, cx, 2.35, cw, 1.7);
  s.addText(t, { x: cx + 0.2, y: 2.52, w: cw - 0.4, h: 0.4, margin: 0, fontFace: DISP, fontSize: 18, bold: true, color: C.plat });
  s.addText(d, { x: cx + 0.2, y: 2.98, w: cw - 0.4, h: 1.0, margin: 0, fontFace: BODY, fontSize: 10.5, color: C.mut, lineSpacingMultiple: 1.02 });
  cx += cw + gap;
});
s.addText([
  { text: "Timeline:  ", options: { color: C.mut, bold: true } },
  { text: "close the raise Q3 2026  ·  PH launch  ·  first cardholders ~Nov 2026  ·  durable break-even ~Month 11  ·  $100k MRR ~Month 13 (mid-2027).", options: { color: C.ink } },
], { x: 0.55, y: 4.35, w: 8.9, h: 0.6, margin: 0, fontFace: BODY, fontSize: 12.5, lineSpacingMultiple: 1.05 });
s.addNotes("The whole plan gates on closing this raise. After that it is licensing, launch, and acquiring a few thousand cardholders. $100k MRR is roughly a 12 to 15 month build.");

// ---------- S11 The ask ----------
s = p.addSlide(); s.background = { color: C.bg };
s.addImage({ path: MARK, x: 0.7, y: 0.6, w: 0.36, h: 0.36, altText: "Iron mark" });
s.addText("IRON", { x: 1.14, y: 0.62, w: 2, h: 0.34, margin: 0, fontFace: DISP, fontSize: 15, color: C.plat, charSpacing: 3, valign: "middle" });
s.addText("THE ASK", { x: 0.7, y: 1.35, w: 8.6, h: 0.3, margin: 0, fontFace: BODY, fontSize: 12, color: C.mut, charSpacing: 3, bold: true });
s.addText("A $750k pre-seed, and a facility for the book.", { x: 0.7, y: 1.66, w: 8.6, h: 0.7, margin: 0, fontFace: DISP, fontSize: 29, color: C.ink });
s.addText([
  { text: "Equity:  ", options: { bold: true, color: C.plat } },
  { text: "$750k pre-seed (Fulgur, Curious Ventures, Network School angels). About 15 to 18 months of runway: a team of two to three, PH licensing and launch, and the first cardholders on the book.", options: { color: C.ink } },
], { x: 0.7, y: 2.52, w: 8.6, h: 0.85, margin: 0, fontFace: BODY, fontSize: 13, lineSpacingMultiple: 1.06 });
s.addText([
  { text: "Debt:  ", options: { bold: true, color: C.plat } },
  { text: "a separate USDT credit facility to fund the loan book. We never dilute the company to fund lending.", options: { color: C.ink } },
], { x: 0.7, y: 3.45, w: 8.6, h: 0.55, margin: 0, fontFace: BODY, fontSize: 13, lineSpacingMultiple: 1.05 });
s.addShape(p.shapes.LINE, { x: 0.7, y: 4.05, w: 8.6, h: 0, line: { color: C.line, width: 0.75 } });
s.addText("Everyone else sells a bitcoin loan. We are building the bitcoin bank, the most trustworthy one, for the people who refuse to sell.", { x: 0.7, y: 4.2, w: 8.6, h: 0.8, margin: 0, fontFace: DISP, italic: true, fontSize: 17, color: C.plat, lineSpacingMultiple: 1.05 });
s.addText("founder@iron.credit  ·  iron.credit", { x: 0.7, y: 5.08, w: 8.6, h: 0.3, margin: 0, fontFace: BODY, fontSize: 11.5, color: C.faint });
s.addNotes("Close on the mission line. The ask is two instruments: equity for the company, debt for the book. Keep Fulgur framed as a target you are talking to, never as committed.");

p.writeFile({ fileName: "deck/Iron-preseed-Fulgur.pptx" }).then((f) => console.log("wrote", f));
