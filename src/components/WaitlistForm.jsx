import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

// Inline capture straight into the Iron Waitlist Google Form (field resolved from the form).
// no-cors POST returns an opaque response, so we optimistically confirm on submit.
const FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfV1GJjDL8IRqkB2pwHnL2GRCbMv1pTPZLI0c154yuFD3puHg/formResponse";
const EMAIL_FIELD = "entry.1241799081";

export default function WaitlistForm({ C, big, cta = "Get early access" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const v = email.trim();
    if (!v || busy) return;
    setBusy(true);
    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ [EMAIL_FIELD]: v }),
      });
    } catch { /* opaque no-cors response; treat as delivered */ }
    setDone(true);
    setBusy(false);
  };

  if (done) {
    return (
      <div className="flex items-center" style={{ gap: 9, color: C.green, fontSize: big ? 15 : 14, fontWeight: 600 }}>
        <Check size={18} /> You are on the list. We will be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: big ? 460 : 420 }}>
      <input
        type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com" aria-label="Email address"
        style={{ flex: "1 1 220px", minWidth: 0, padding: big ? "14px 15px" : "11px 14px", borderRadius: 12, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, fontSize: big ? 15 : 14, outline: "none" }}
      />
      <button
        type="submit" disabled={busy}
        className="flex items-center"
        style={{ gap: 8, justifyContent: "center", padding: big ? "14px 22px" : "11px 18px", borderRadius: 12, border: "none", background: C.amber, color: C.accentInk, fontSize: big ? 15 : 14, fontWeight: 700, cursor: busy ? "default" : "pointer", whiteSpace: "nowrap", opacity: busy ? 0.7 : 1 }}
      >
        {busy ? "Joining..." : cta} <ArrowRight size={17} />
      </button>
    </form>
  );
}
