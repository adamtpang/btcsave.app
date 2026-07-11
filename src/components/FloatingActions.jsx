import { useState } from "react";
import { MessageCircle, MessageSquarePlus, X, Send } from "lucide-react";
import { useTheme } from "../theme.jsx";

const WHATSAPP = "16716862020";

export default function FloatingActions() {
  const { C } = useTheme();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const sendFeedback = () => {
    if (!text.trim()) return;
    const msg = encodeURIComponent("Iron feedback: " + text.trim());
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank", "noopener");
    setText("");
    setOpen(false);
  };

  return (
    <>
      <div style={{ position: "fixed", right: 18, bottom: 18, display: "flex", flexDirection: "column", gap: 10, zIndex: 50 }}>
        <button onClick={() => setOpen(true)} aria-label="Send feedback"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 999, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,.16)", fontSize: 13, fontWeight: 600 }}>
          <MessageSquarePlus size={16} color={C.amber} /> Feedback
        </button>
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 999, border: `1px solid ${C.line}`, background: C.panel, color: C.ink, cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,.16)", fontSize: 13, fontWeight: 600 }}>
          <MessageCircle size={16} color={C.amber} /> WhatsApp
        </a>
      </div>

      {open && (
        <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.45)", display: "grid", placeItems: "center", zIndex: 60, padding: 18 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 420, background: C.panel, border: `1px solid ${C.line}`, borderRadius: 18, padding: 20 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span className="disp" style={{ fontSize: 17, fontWeight: 700, color: C.ink }}>Send feedback</span>
              <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: "transparent", border: "none", color: C.mut, cursor: "pointer", display: "grid", placeItems: "center" }}><X size={18} /></button>
            </div>
            <p style={{ color: C.mut, fontSize: 13, margin: "0 0 12px", lineHeight: 1.5 }}>Tell us what you think. This opens WhatsApp to send it straight to the founder.</p>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder="Your feedback..."
              style={{ width: "100%", padding: "12px 14px", borderRadius: 11, border: `1px solid ${C.line}`, background: C.panel2, color: C.ink, fontSize: 14, outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
            <button onClick={sendFeedback} disabled={!text.trim()}
              style={{ marginTop: 12, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px", borderRadius: 11, border: "none", background: text.trim() ? C.amber : C.line, color: text.trim() ? C.accentInk : C.mut, fontSize: 14, fontWeight: 700, cursor: text.trim() ? "pointer" : "default" }}>
              <Send size={15} /> Send via WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}
