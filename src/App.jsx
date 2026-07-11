import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./theme.jsx";
import Investors from "./Investors.jsx";
import RFS from "./RFS.jsx";
import Credit from "./Credit.jsx";
import Design from "./Design.jsx";
import Pricing from "./Pricing.jsx";
import How from "./How.jsx";
import Score from "./Score.jsx";
import CardView from "./CardView.jsx";
import FloatingActions from "./components/FloatingActions.jsx";

const TITLES = {
  "/": "Iron · Keep your bitcoin, spend dollars",
  "/credit": "Iron · Keep your bitcoin, spend dollars",
  "/how": "How it works · Iron",
  "/pricing": "Pricing · Iron",
  "/score": "Free crypto credit score · Iron",
  "/card": "Your Iron card · Iron",
  "/investors": "For investors · Iron",
  "/rfs": "Bitcoin Requests for Startups · Iron",
  "/design": "Brand and design system · Iron",
};

export default function App() {
  const { C } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] || "Iron · The non-custodial bitcoin credit card";
  }, [pathname]);

  return (
    <div className="body" style={{
      minHeight: "100%",
      color: C.ink,
      background: `radial-gradient(1100px 560px at 88% -12%, ${C.glow1}, transparent 60%), radial-gradient(820px 480px at -5% 112%, ${C.glow2}, transparent 55%), ${C.bg}`,
      transition: "background .3s ease, color .3s ease",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Hanken+Grotesk:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .disp{font-family:'Bodoni Moda',serif;} .body{font-family:'Hanken Grotesk',sans-serif;}
        .tnum{font-variant-numeric:tabular-nums;} .mono{font-family:'IBM Plex Mono',monospace;font-variant-numeric:tabular-nums;}
        a{color:inherit;text-decoration:none;}
        a:hover{opacity:.82;}
        a:focus-visible,button:focus-visible,input:focus-visible{outline:2px solid var(--iron-orange-line);outline-offset:2px;border-radius:6px;}
        @keyframes rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
        .rise{animation:rise .7s cubic-bezier(.2,.7,.2,1) both;}
      `}</style>
      <Routes>
        <Route path="/" element={<Credit />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/rfs" element={<RFS />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/design" element={<Design />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/how" element={<How />} />
        <Route path="/score" element={<Score />} />
        <Route path="/card" element={<CardView />} />
        <Route path="*" element={<Credit />} />
      </Routes>
      <FloatingActions />
    </div>
  );
}
