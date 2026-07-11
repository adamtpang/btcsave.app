// company-os.data.js
// The single source of truth for this company's internal OS.
// Claude Code keeps this in sync with the repo's context files (CLAUDE.md, MASTERPLAN.md, etc).
// The dashboard (index.html) reads from here. To update: edit this file, or ask Claude to.
// PRIVACY: financial numbers below are PLACEHOLDERS. If your real numbers are sensitive,
// add company-os/company-os.data.js to .gitignore so they stay local and are never pushed.

window.COMPANY_OS = {
  company: "Iron",
  tagline: "The non-custodial bitcoin-backed credit card",
  mission:
    "Become the credit layer of the bitcoin economy: let anyone spend their bitcoin's value without selling it, non-custodial and radically transparent.",
  problem:
    "Bitcoiners are asset-rich and cash-poor by choice, and billions more are rejected by banks. Bitcoin is the collateral that serves both.",
  northStar: "Qualified waitlist signups",

  // The knowledge base IS the codebase. These are the context files this OS is tied to.
  knowledgeBase: [
    { file: "CLAUDE.md", desc: "Project context + the non-negotiable graveyard rules" },
    { file: "MASTERPLAN.md", desc: "Strategy, master plan, income and speed scoreboard" },
    { file: "COMPANY.md", desc: "Company OS: KPIs, gated roadmap, operating cadence" },
    { file: "GRAVEYARD.md", desc: "Why bitcoin lenders and crypto cards died" },
    { file: "PROTOTYPE.md", desc: "Critical path to a card at POS + system diagrams" },
    { file: "SITEMAP.md", desc: "Information architecture + SEO plan" },
    { file: "COFOUNDER.md", desc: "Founding-team playbook + search plan" },
  ],

  // Money (PLACEHOLDERS, replace with real numbers; gitignore this file if sensitive)
  finances: { income: 0, expenses: 1200, savings: 15000 },

  // Inputs you control (label + current value + target hint). Founders rename these to fit.
  metrics: [
    { label: "Waitlist signups", value: 0, hint: "north star (pre-launch)", key: "waitlist" },
    { label: "MRR", value: 0, hint: "$100k target", key: "mrr" },
    { label: "Cardholders", value: 0, hint: "~6,000 = $100k MRR", key: "cardholders" },
    { label: "Discovery calls", value: 0, hint: "10 / wk", key: "calls" },
    { label: "Posts shipped", value: 0, hint: "5-7 / wk", key: "posts" },
  ],
  // Which history keys to chart as trends
  charts: [
    { label: "Waitlist growth", key: "waitlist", color: "var(--amber)" },
    { label: "Cash on hand", key: "savings", color: "var(--green)" },
  ],
  streak: 0,

  // Quarterly goals
  goals: [
    { text: "Working card-at-POS prototype, filmed", done: false },
    { text: "Cofounder onboard, or a strong first hire in the seat", done: false },
    { text: "Singapore Pte Ltd incorporated, pre-seed open", done: false },
  ],

  // Product line
  products: [
    { name: "Free credit score", status: "Live" },
    { name: "Bitcoin-backed credit line", status: "Building" },
    { name: "Iron Visa card", status: "Next" },
    { name: "Larger BTC loans", status: "Later" },
    { name: "Crypto-backed mortgages", status: "Later" },
  ],

  // Weekly snapshots. Claude appends one each week: { t, waitlist, savings }
  history: [],

  // Gated roadmap. Check items off (done: true) to level up.
  roadmap: [
    { stage: "0 · Foundation", items: [
      { label: "Waitlist captures emails", done: false },
      { label: "Workspace email live", done: false },
      { label: "Cofounder funnel open", done: false },
      { label: "First 10 discovery calls", done: false },
      { label: "Concierge prototype filmed", done: false },
      { label: "Incorporation started", done: false },
      { label: "Building in public daily", done: false },
    ] },
    { stage: "1 · Proof", items: [
      { label: "50 discovery calls", done: false },
      { label: "Cofounder trial run", done: false },
      { label: "Singapore Pte Ltd incorporated", done: false },
      { label: "Rain conversation open", done: false },
      { label: "Pre-seed deck ready", done: false },
      { label: "Graveyard + calculator live", done: false },
    ] },
    { stage: "2 · Team & capital", items: [
      { label: "Cofounder signed", done: false },
      { label: "Pre-seed conversations open", done: false },
      { label: "Licensing counsel engaged", done: false },
      { label: "Working demo v1", done: false },
    ] },
    { stage: "3 · Raise & build", items: [
      { label: "Pre-seed closing", done: false },
      { label: "Team of 2 to 3", done: false },
      { label: "Rain integration started", done: false },
      { label: "Alpha users lined up", done: false },
    ] },
    { stage: "4 · Alpha", items: [
      { label: "Private alpha live in PH", done: false },
      { label: "Licensing path locked", done: false },
      { label: "Debt-facility conversations", done: false },
    ] },
    { stage: "5 · Beta", items: [
      { label: "Proof of reserves live", done: false },
      { label: "Closed beta converting waitlist", done: false },
      { label: "First real loan book", done: false },
    ] },
    { stage: "6 · Scale to $100k MRR", items: [
      { label: "First 100 cardholders concierge-onboarded", done: false },
      { label: "Referral loop live", done: false },
      { label: "1,000 cardholders", done: false },
      { label: "Durable break-even (MRR covers burn)", done: false },
      { label: "$100k MRR (~6,000 cardholders, ~$48M locked)", done: false },
    ] },
  ],
  // Target: $100k MRR = $1.2M ARR. Loan book x (net spread ~4% + interchange/FX ~3.6%) = revenue.
  // Reached at ~6,000 cardholders (bitcoiner mix, $8k avg) to ~10,500 (mass-market, $5k avg).

  // Org: function -> who owns it now -> next hire
  org: [
    { fn: "Product / Eng", now: "Adam", next: "Founding engineer" },
    { fn: "Risk / Credit", now: "Adam", next: "Head of credit (the Levchin)" },
    { fn: "Compliance / Licensing", now: "Adam + counsel", next: "Compliance lead" },
    { fn: "Growth", now: "Adam", next: "Growth lead" },
    { fn: "Ops / Finance", now: "Adam", next: "Ops lead" },
    { fn: "Partnerships / Rails", now: "Adam", next: "BD lead" },
  ],
};
