import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import SecondPage from "./second-page";
import ThirdPage from "./third-page";
import FixthPage from "./fixth-page";
import FaqPage from "./faq-page";
import ResponsiveSection from "./responsive-section";
import SixthPage from "./images";
import SeventhPage from "./seventh-page";
import Clients from "./clients";
import Animate from "./animate";
import AdminPage from "./admin-page";
import Footer from "./footer";
import Popup from "./popup";
import BookingForm from "./booking-form";
import ThankYou from "./thank-you";
import DigitalMarketing from "./digital-marketing";

function App() {
  return (
    <BrowserRouter>  
     <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <AdminPage />
            <SecondPage />
            <DigitalMarketing/>
            <ThirdPage />
            {/* <Clients /> */}
            <Animate />
            <FixthPage />
            <Popup/>
            <SixthPage />
            <SeventhPage />
            <ResponsiveSection />
            <FaqPage />
          </>
        } />
        <Route path="/thankyou" element={<ThankYou/>}/>
        <Route path="/form" element={<BookingForm/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

// import { useState, useEffect, useRef, useCallback } from "react";

// // ─── INITIAL TICKER DATA ────────────────────────────────────────────────────
// const TICKER_INIT = [
//   { sym: "NIFTY 50",   price: 24187.65, base: 24187.65, cat: "index",  flag: "🇮🇳" },
//   { sym: "SENSEX",     price: 79468.20, base: 79468.20, cat: "index",  flag: "🇮🇳" },
//   { sym: "RELIANCE",   price: 2847.50,  base: 2847.50,  cat: "stock",  flag: "🏭" },
//   { sym: "TCS",        price: 3921.20,  base: 3921.20,  cat: "stock",  flag: "💻" },
//   { sym: "INFY",       price: 1456.75,  base: 1456.75,  cat: "stock",  flag: "🖥️" },
//   { sym: "HDFCBANK",   price: 1678.40,  base: 1678.40,  cat: "stock",  flag: "🏦" },
//   { sym: "WIPRO",      price: 512.30,   base: 512.30,   cat: "stock",  flag: "💾" },
//   { sym: "TATAMOTORS", price: 924.80,   base: 924.80,   cat: "stock",  flag: "🚗" },
//   { sym: "BAJFINANCE", price: 7234.90,  base: 7234.90,  cat: "stock",  flag: "💰" },
//   { sym: "SBIN",       price: 815.25,   base: 815.25,   cat: "stock",  flag: "🏛️" },
//   { sym: "GOLD",       price: 72480.00, base: 72480.00, cat: "commodity", flag: "🥇" },
//   { sym: "SILVER",     price: 89240.00, base: 89240.00, cat: "commodity", flag: "🥈" },
//   { sym: "CRUDEOIL",   price: 6842.00,  base: 6842.00,  cat: "commodity", flag: "⛽" },
//   { sym: "BTC/USDT",   price: 68420.00, base: 68420.00, cat: "crypto",  flag: "₿" },
//   { sym: "ETH/USDT",   price: 3512.80,  base: 3512.80,  cat: "crypto",  flag: "⟠" },
//   { sym: "BNB/USDT",   price: 612.40,   base: 612.40,   cat: "crypto",  flag: "🟡" },
//   { sym: "S&P 500",    price: 5248.30,  base: 5248.30,  cat: "global",  flag: "🇺🇸" },
//   { sym: "NASDAQ",     price: 16420.50, base: 16420.50, cat: "global",  flag: "🇺🇸" },
//   { sym: "DOW JONES",  price: 39182.40, base: 39182.40, cat: "global",  flag: "🇺🇸" },
//   { sym: "USD/INR",    price: 83.42,    base: 83.42,    cat: "forex",   flag: "💱" },
//   { sym: "EUR/INR",    price: 90.18,    base: 90.18,    cat: "forex",   flag: "💱" },
// ];

// const NAV_LINKS = ["Features", "Strategies", "Pricing", "Analytics", "Academy"];

// const STATS = [
//   { value: "2.4M+", label: "Trades Executed", icon: "⚡" },
//   { value: "$8.2B", label: "Volume Processed", icon: "💹" },
//   { value: "99.97%", label: "Uptime SLA", icon: "🛡️" },
//   { value: "0.003s", label: "Avg Latency", icon: "⏱️" },
// ];

// const FEATURES = [
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
//         <rect x="4" y="8" width="40" height="32" rx="4" fill="#e8fdf0" stroke="#00c853" strokeWidth="2"/>
//         <polyline points="10,32 18,20 26,26 36,14" stroke="#00c853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//         <circle cx="36" cy="14" r="3" fill="#00c853"/>
//         <circle cx="18" cy="20" r="2" fill="#00c853" opacity="0.6"/>
//         <circle cx="26" cy="26" r="2" fill="#00c853" opacity="0.6"/>
//       </svg>
//     ),
//     title: "Smart Backtesting Engine",
//     desc: "Test strategies against 20+ years of tick-level historical data with microsecond precision and Monte Carlo simulation.",
//     badge: "Core",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
//         <circle cx="24" cy="24" r="18" fill="#e8fdf0" stroke="#00c853" strokeWidth="2"/>
//         <path d="M24 8 L24 24 L34 18" stroke="#00c853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//         <circle cx="24" cy="24" r="3" fill="#00c853"/>
//         <path d="M14 36 Q24 28 34 36" stroke="#00c853" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
//       </svg>
//     ),
//     title: "Live Execution Engine",
//     desc: "Connect to 50+ brokers and exchanges. Sub-millisecond order routing with smart order splitting and slippage control.",
//     badge: "Live",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
//         <rect x="6" y="6" width="36" height="36" rx="6" fill="#e8fdf0" stroke="#00c853" strokeWidth="2"/>
//         <rect x="12" y="18" width="6" height="16" rx="2" fill="#00c853" opacity="0.4"/>
//         <rect x="21" y="12" width="6" height="22" rx="2" fill="#00c853" opacity="0.7"/>
//         <rect x="30" y="22" width="6" height="12" rx="2" fill="#00c853"/>
//         <line x1="12" y1="36" x2="36" y2="36" stroke="#00c853" strokeWidth="1.5" opacity="0.4"/>
//       </svg>
//     ),
//     title: "Risk & Portfolio Analytics",
//     desc: "Real-time Sharpe, Sortino, VaR metrics. Position sizing automation, correlation heatmaps, and drawdown alerts.",
//     badge: "Analytics",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
//         <polygon points="24,6 44,18 44,36 24,42 4,36 4,18" fill="#e8fdf0" stroke="#00c853" strokeWidth="2"/>
//         <circle cx="24" cy="24" r="8" fill="none" stroke="#00c853" strokeWidth="2"/>
//         <circle cx="24" cy="24" r="3" fill="#00c853"/>
//         <line x1="24" y1="6" x2="24" y2="16" stroke="#00c853" strokeWidth="1.5" opacity="0.5"/>
//         <line x1="24" y1="32" x2="24" y2="42" stroke="#00c853" strokeWidth="1.5" opacity="0.5"/>
//         <line x1="4" y1="18" x2="17" y2="21" stroke="#00c853" strokeWidth="1.5" opacity="0.5"/>
//         <line x1="31" y1="27" x2="44" y2="30" stroke="#00c853" strokeWidth="1.5" opacity="0.5"/>
//       </svg>
//     ),
//     title: "AI Strategy Builder",
//     desc: "Drag-and-drop strategy blocks powered by ML signal detection. Auto-optimize parameters with genetic algorithms.",
//     badge: "AI",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
//         <rect x="8" y="4" width="32" height="40" rx="4" fill="#e8fdf0" stroke="#00c853" strokeWidth="2"/>
//         <line x1="14" y1="14" x2="34" y2="14" stroke="#00c853" strokeWidth="2" strokeLinecap="round"/>
//         <line x1="14" y1="20" x2="34" y2="20" stroke="#00c853" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
//         <line x1="14" y1="26" x2="26" y2="26" stroke="#00c853" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
//         <circle cx="32" cy="36" r="6" fill="#00c853"/>
//         <path d="M29 36 L31 38 L35 34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     title: "Strategy Marketplace",
//     desc: "Browse 3,000+ community strategies. Fork, remix, and deploy proven algorithms directly to your portfolio.",
//     badge: "Community",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
//         <path d="M24 4 L44 14 L44 24 C44 34 36 42 24 44 C12 42 4 34 4 24 L4 14 Z" fill="#e8fdf0" stroke="#00c853" strokeWidth="2"/>
//         <path d="M16 24 L21 29 L32 18" stroke="#00c853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     title: "Enterprise Security",
//     desc: "SOC 2 Type II certified. AES-256 encryption, MFA, IP whitelisting, and real-time audit trail for every action.",
//     badge: "Security",
//   },
// ];

// const STRATEGIES = [
//   { name: "Momentum Alpha", type: "Trend", return: "+34.2%", sharpe: "2.1", trades: "1,204", badge: "Top Rated" },
//   { name: "Mean Rev Pro", type: "Statistical", return: "+22.8%", sharpe: "1.8", trades: "3,892", badge: "Stable" },
//   { name: "Breakout Eagle", type: "Volatility", return: "+47.6%", sharpe: "1.5", trades: "567", badge: "High Alpha" },
// ];

// const PRICING = [
//   {
//     plan: "Starter",
//     price: "$49",
//     period: "/mo",
//     desc: "For individual traders getting started with automation.",
//     features: ["5 Live Strategies", "3 Years Backtest Data", "5 Broker Connections", "Email Alerts", "Community Access"],
//     cta: "Start Free Trial",
//     highlight: false,
//   },
//   {
//     plan: "Pro Trader",
//     price: "$149",
//     period: "/mo",
//     desc: "For serious traders who need full platform power.",
//     features: ["Unlimited Strategies", "20+ Years Tick Data", "50+ Broker Connections", "AI Optimizer", "Priority Support", "Risk Analytics Suite"],
//     cta: "Get Pro Access",
//     highlight: true,
//   },
//   {
//     plan: "Institutional",
//     price: "Custom",
//     period: "",
//     desc: "White-label solution for funds and trading desks.",
//     features: ["Dedicated Infrastructure", "FIX Protocol Support", "Custom Integrations", "SLA 99.99%", "Dedicated CSM", "Compliance Reporting"],
//     cta: "Contact Sales",
//     highlight: false,
//   },
// ];

// function AnimatedCounter({ target, suffix = "" }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && !started.current) {
//         started.current = true;
//         const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
//         const duration = 1800;
//         const start = performance.now();
//         const animate = (now) => {
//           const elapsed = now - start;
//           const progress = Math.min(elapsed / duration, 1);
//           const eased = 1 - Math.pow(1 - progress, 3);
//           setCount(Math.floor(eased * numericTarget * 10) / 10);
//           if (progress < 1) requestAnimationFrame(animate);
//         };
//         requestAnimationFrame(animate);
//       }
//     }, { threshold: 0.5 });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [target]);

//   const prefix = target.replace(/[0-9.,+%s]/g, "").split(/[0-9]/)[0];
//   const rawSuffix = target.match(/[A-Za-z+%]+$/)?.[0] || suffix;
//   return <span ref={ref}>{prefix}{count}{rawSuffix}</span>;
// }

// // ─── LIVE TICKER ITEM ───────────────────────────────────────────────────────
// // fmt: always show full number, no truncation
// // Prefix rules:
// //   index     → no prefix  (SENSEX = 79,468  not ₹79,468)
// //   stock     → ₹
// //   commodity → ₹
// //   crypto    → $
// //   forex     → no prefix  (83.42)
// //   global    → no prefix  (S&P points)
// function fmtPrice(n, cat) {
//   // format the number with Indian locale for IN instruments, US locale for global/crypto
//   const useIN = ["index","stock","commodity","forex"].includes(cat);
//   const locale = useIN ? "en-IN" : "en-US";
//   const formatted = n.toLocaleString(locale, {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
//   if (cat === "stock" || cat === "commodity") return "₹" + formatted;
//   if (cat === "crypto")  return "$" + formatted;
//   return formatted; // index, forex, global — no prefix, just the number
// }

// function TickerItem({ item }) {
//   const pct = ((item.price - item.base) / item.base * 100);
//   const up  = pct >= 0;

//   return (
//     <span style={{
//       display: "inline-flex", alignItems: "center", gap: 7,
//       padding: "0 22px", borderRight: "1px solid rgba(255,255,255,0.07)",
//       whiteSpace: "nowrap",
//     }}>
//       <span style={{ fontSize: 13 }}>{item.flag}</span>
//       <span style={{ fontSize: 12, fontWeight: 700, color: "#e2f5e8", letterSpacing: "0.03em" }}>{item.sym}</span>
//       <span style={{
//         fontSize: 12, fontWeight: 800,
//         fontFamily: "'JetBrains Mono', monospace",
//         color: up ? "#4ade80" : "#f87171",
//         background: up ? "rgba(74,222,128,0.10)" : "rgba(248,113,113,0.10)",
//         borderRadius: 5, padding: "1px 7px",
//         transition: "color 0.4s, background 0.4s",
//       }}>
//         {up ? "▲" : "▼"} {Math.abs(pct).toFixed(2)}%
//       </span>
//       <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontFamily: "'JetBrains Mono', monospace" }}>
//         {fmtPrice(item.price, item.cat)}
//       </span>
//     </span>
//   );
// }

// export default function AlgoTradePro() {
//   const [scrolled,   setScrolled]   = useState(false);
//   const [activeTab,  setActiveTab]  = useState(0);
//   const [menuOpen,   setMenuOpen]   = useState(false);
//   const [tickerData, setTickerData] = useState(TICKER_INIT);
//   const [tickerPaused, setTickerPaused] = useState(false);

//   const [chartData] = useState(() =>
//     Array.from({ length: 24 }, (_, i) => ({
//       x: i,
//       y: 80 + Math.sin(i * 0.5) * 20 + i * 3 + Math.random() * 10,
//     }))
//   );

//   // ── Live price simulation (replace with WebSocket / API in production) ──
//   useEffect(() => {
//     const id = setInterval(() => {
//       if (tickerPaused) return;
//       setTickerData(prev =>
//         prev.map(item => {
//           const volatility = item.cat === "crypto" ? 0.006
//             : item.cat === "commodity" ? 0.003
//             : item.cat === "forex"     ? 0.0008
//             : item.cat === "index"     ? 0.002
//             : 0.004;
//           const delta = (Math.random() - 0.49) * item.price * volatility;
//           return { ...item, price: parseFloat((item.price + delta).toFixed(2)) };
//         })
//       );
//     }, 1800);
//     return () => clearInterval(id);
//   }, [tickerPaused]);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const chartMax = Math.max(...chartData.map((d) => d.y));
//   const chartMin = Math.min(...chartData.map((d) => d.y));
//   const points = chartData
//     .map((d) => `${(d.x / 23) * 100}%,${100 - ((d.y - chartMin) / (chartMax - chartMin)) * 80 + 10}%`)
//     .join(" ");

//   return (
//     <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#f8fffe", color: "#0a2a1a", minHeight: "100vh", overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         :root {
//           --green: #00c853;
//           --green-dark: #00962e;
//           --green-light: #e8fdf0;
//           --green-mid: #b2f5d0;
//           --white: #ffffff;
//           --text: #0a2a1a;
//           --text-soft: #3d6b52;
//           --border: #d0f0de;
//           --shadow: 0 4px 32px rgba(0,200,83,0.10);
//         }
//         html { scroll-behavior: smooth; }
//         .heading-font { font-family: 'Space Grotesk', sans-serif; }
//         .btn-primary {
//           background: linear-gradient(135deg, #00c853, #00962e);
//           color: #fff;
//           border: none;
//           border-radius: 12px;
//           padding: 14px 32px;
//           font-size: 15px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.25s;
//           letter-spacing: 0.01em;
//           box-shadow: 0 4px 20px rgba(0,200,83,0.25);
//         }
//         .btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 32px rgba(0,200,83,0.35);
//         }
//         .btn-outline {
//           background: transparent;
//           color: var(--green-dark);
//           border: 2px solid var(--green);
//           border-radius: 12px;
//           padding: 13px 32px;
//           font-size: 15px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.25s;
//         }
//         .btn-outline:hover {
//           background: var(--green-light);
//           transform: translateY(-2px);
//         }
//         .card {
//           background: #fff;
//           border-radius: 20px;
//           border: 1px solid var(--border);
//           box-shadow: 0 2px 24px rgba(0,180,70,0.07);
//           transition: all 0.3s;
//         }
//         .card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 40px rgba(0,200,83,0.13);
//           border-color: var(--green-mid);
//         }
//         .badge {
//           display: inline-block;
//           background: var(--green-light);
//           color: var(--green-dark);
//           border-radius: 100px;
//           padding: 3px 12px;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//         }
//         .glow-line {
//           height: 3px;
//           background: linear-gradient(90deg, transparent, var(--green), transparent);
//           width: 80px;
//           margin: 12px auto 0;
//           border-radius: 4px;
//         }
//         /* ── LIVE TICKER ── */
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap');
//         .ticker-track {
//           display: flex;
//           animation: tickerScroll 55s linear infinite;
//           will-change: transform;
//         }
//         .ticker-track.row2 { animation-duration: 40s; animation-direction: reverse; }
//         .ticker-track:hover { animation-play-state: paused; }
//         @keyframes tickerScroll {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//         .ticker-flash-up   { animation: flashUp   0.5s ease; }
//         .ticker-flash-down { animation: flashDown 0.5s ease; }
//         @keyframes flashUp   { 0%,100%{} 40%{ background: rgba(74,222,128,0.25); } }
//         @keyframes flashDown { 0%,100%{} 40%{ background: rgba(248,113,113,0.22); } }
//         .section-label {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: var(--green-light);
//           border: 1px solid var(--green-mid);
//           border-radius: 100px;
//           padding: 6px 18px;
//           font-size: 12px;
//           font-weight: 700;
//           color: var(--green-dark);
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           margin-bottom: 18px;
//         }
//         .floating-card {
//           background: #fff;
//           border-radius: 16px;
//           box-shadow: 0 8px 32px rgba(0,200,83,0.12), 0 1px 4px rgba(0,0,0,0.06);
//           border: 1px solid var(--border);
//           padding: 18px 22px;
//           position: absolute;
//           animation: float 4s ease-in-out infinite;
//         }
//         @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//         .nav-link {
//           color: var(--text-soft);
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 500;
//           transition: color 0.2s;
//           cursor: pointer;
//         }
//         .nav-link:hover { color: var(--green); }
//         input, select, textarea {
//           font-family: 'DM Sans', sans-serif;
//         }
//         .sparkline-bar {
//           background: linear-gradient(180deg, var(--green), var(--green-dark));
//           border-radius: 3px 3px 0 0;
//           transition: height 0.4s;
//         }
//         .pricing-highlight {
//           background: linear-gradient(135deg, #00c853 0%, #00962e 100%);
//           color: #fff;
//           border: none !important;
//         }
//         .pricing-highlight .badge { background: rgba(255,255,255,0.2); color: #fff; }
//         .pricing-highlight .feature-check { color: #fff; }
//         .tab-btn {
//           padding: 9px 22px;
//           border-radius: 10px;
//           border: none;
//           background: transparent;
//           font-size: 13px;
//           font-weight: 600;
//           color: var(--text-soft);
//           cursor: pointer;
//           transition: all 0.2s;
//         }
//         .tab-btn.active {
//           background: var(--green);
//           color: #fff;
//           box-shadow: 0 4px 16px rgba(0,200,83,0.25);
//         }
//         .mesh-bg {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(ellipse 70% 60% at 60% 40%, rgba(0,200,83,0.08) 0%, transparent 70%),
//             radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0,200,83,0.05) 0%, transparent 60%);
//           pointer-events: none;
//         }
//         .grid-bg {
//           background-image: linear-gradient(rgba(0,200,83,0.06) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,200,83,0.06) 1px, transparent 1px);
//           background-size: 40px 40px;
//         }
//         @media(max-width:768px){
//           .hide-mobile{display:none!important;}
//           .hero-grid{grid-template-columns:1fr!important;}
//           .features-grid{grid-template-columns:1fr!important;}
//           .stats-grid{grid-template-columns:1fr 1fr!important;}
//           .pricing-grid{grid-template-columns:1fr!important;}
//           .hero-title{font-size:36px!important;}
//         }
//       `}</style>

//       {/* NAV */}
//       <nav style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//         background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
//         backdropFilter: scrolled ? "blur(16px)" : "none",
//         borderBottom: scrolled ? "1px solid var(--border)" : "none",
//         boxShadow: scrolled ? "0 2px 24px rgba(0,200,83,0.07)" : "none",
//         transition: "all 0.3s",
//         padding: "0 5%",
//       }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <div style={{
//               width: 36, height: 36, borderRadius: 10,
//               background: "linear-gradient(135deg, #00c853, #00962e)",
//               display: "flex", alignItems: "center", justifyContent: "center",
//               boxShadow: "0 4px 12px rgba(0,200,83,0.3)"
//             }}>
//               <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
//                 <polyline points="4,16 8,10 13,13 20,6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M20 6 L20 10 M16 6 L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <span className="heading-font" style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
//               <span style={{ color: "#0a2a1a" }}>Algo</span><span style={{ color: "#00c853" }}>Pulse</span>
//             </span>
//           </div>
//           <div className="hide-mobile" style={{ display: "flex", gap: 32 }}>
//             {NAV_LINKS.map((l) => <a key={l} className="nav-link" href="#">{l}</a>)}
//           </div>
//           <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
//             <button className="btn-outline hide-mobile" style={{ padding: "9px 22px", fontSize: 14 }}>Login</button>
//             <button className="btn-primary" style={{ padding: "9px 22px", fontSize: 14 }}>Start Free Trial</button>
//           </div>
//         </div>
//       </nav>

//       {/* ══ LIVE TICKER ══════════════════════════════════════════════════════ */}
//       <div
//         style={{ background: "#071510", borderBottom: "1px solid rgba(0,200,83,0.15)", marginTop: 70, userSelect: "none" }}
//         onMouseEnter={() => setTickerPaused(true)}
//         onMouseLeave={() => setTickerPaused(false)}
//       >
//         {/* row 1 — Indices + Stocks */}
//         <div style={{ overflow: "hidden", borderBottom: "1px solid rgba(0,200,83,0.07)", padding: "9px 0" }}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             {/* Category label */}
//             <div style={{ flexShrink: 0, padding: "0 14px 0 16px", borderRight: "1px solid rgba(0,200,83,0.2)", marginRight: 4 }}>
//               {/* <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", color: "#00c853", textTransform: "uppercase" }}>INDICES &amp; STOCKS</span> */}
//             </div>
//             <div className="ticker-track" style={{ display: "flex" }}>
//               {[...tickerData.filter(t => ["index","stock"].includes(t.cat)),
//                 ...tickerData.filter(t => ["index","stock"].includes(t.cat))
//               ].map((item, i) => <TickerItem key={i} item={item} />)}
//             </div>
//           </div>
//         </div>

//         {/* row 2 — Crypto + Commodities + Forex + Global */}
//         <div style={{ overflow: "hidden", padding: "9px 0" }}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div style={{ flexShrink: 0, padding: "0 14px 0 16px", borderRight: "1px solid rgba(0,200,83,0.2)", marginRight: 4 }}>
//               {/* <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", color: "#00c853", textTransform: "uppercase" }}>CRYPTO · COMMODITIES · FOREX · GLOBAL</span> */}
//             </div>
//             <div className="ticker-track row2" style={{ display: "flex" }}>
//               {[...tickerData.filter(t => ["crypto","commodity","forex","global"].includes(t.cat)),
//                 ...tickerData.filter(t => ["crypto","commodity","forex","global"].includes(t.cat))
//               ].map((item, i) => <TickerItem key={i} item={item} />)}
//             </div>
//           </div>
//         </div>

//         {/* live pulse bar */}
//         <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #00c853 30%, #00c853 70%, transparent 100%)", opacity: 0.4 }} />
//       </div>
//       {/* ═══════════════════════════════════════════════════════════════════════ */}

//       {/* HERO */}
//       <section className="grid-bg" style={{ position: "relative", padding: "90px 5% 80px", overflow: "hidden" }}>
//         <div className="mesh-bg" />
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
//             <div>
//               <div className="section-label">
//                 <span style={{ width: 8, height: 8, background: "#00c853", borderRadius: "50%", display: "inline-block", animation: "ping 1.5s infinite" }} />
//                 Trusted by 40,000+ Traders
//               </div>
//               <h1 className="heading-font hero-title" style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 24, color: "#0a2a1a" }}>
//                 Automate Your<br />
//                 <span style={{ color: "#00c853", position: "relative" }}>
//                   Trading Edge
//                   <svg viewBox="0 0 220 14" style={{ position: "absolute", bottom: -6, left: 0, width: "100%" }} fill="none">
//                     <path d="M4 10 Q55 2 110 10 Q165 18 216 6" stroke="#00c853" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
//                   </svg>
//                 </span>
//                 <br />with Precision AI
//               </h1>
//               <p style={{ fontSize: 17, color: "#3d6b52", lineHeight: 1.65, marginBottom: 36, maxWidth: 480 }}>
//                 Build, backtest, and deploy institutional-grade algorithmic trading strategies across NSE, BSE, crypto, and global markets — no coding required.
//               </p>
//               <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
//                 <button className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
//                   Start Trading Free →
//                 </button>
//                 <button className="btn-outline" style={{ fontSize: 16, padding: "15px 28px", display: "flex", alignItems: "center", gap: 8 }}>
//                   <span style={{ width: 28, height: 28, background: "#00c853", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <svg viewBox="0 0 12 14" fill="none" width="10"><path d="M2 1 L11 7 L2 13 Z" fill="#fff"/></svg>
//                   </span>
//                   Watch Demo
//                 </button>
//               </div>
//               <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
//                 {[{ n: "40K+", l: "Active Users" }, { n: "4.9★", l: "App Rating" }, { n: "Free", l: "14-Day Trial" }].map((s) => (
//                   <div key={s.l}>
//                     <div className="heading-font" style={{ fontWeight: 700, fontSize: 20, color: "#00c853" }}>{s.n}</div>
//                     <div style={{ fontSize: 12, color: "#3d6b52", fontWeight: 500 }}>{s.l}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Dashboard Preview */}
//             <div style={{ position: "relative", height: 420 }}>
//               <div style={{
//                 background: "#fff", borderRadius: 24,
//                 border: "1px solid var(--border)",
//                 boxShadow: "0 20px 80px rgba(0,200,83,0.12), 0 2px 8px rgba(0,0,0,0.05)",
//                 padding: 24, height: "100%", position: "relative", overflow: "hidden"
//               }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//                   <div>
//                     <div style={{ fontSize: 12, color: "#3d6b52", fontWeight: 600, marginBottom: 4 }}>PORTFOLIO VALUE</div>
//                     <div className="heading-font" style={{ fontSize: 28, fontWeight: 800, color: "#0a2a1a" }}>₹24,82,430</div>
//                     <div style={{ fontSize: 13, color: "#00c853", fontWeight: 600 }}>▲ +₹1,24,310 (5.27%) Today</div>
//                   </div>
//                   <div style={{ display: "flex", gap: 6 }}>
//                     {["1D","1W","1M","1Y"].map((t,i) => (
//                       <button key={t} onClick={() => setActiveTab(i)} className="tab-btn" style={{ padding: "6px 12px", fontSize: 12, background: activeTab===i ? "#00c853" : "#f0faf5", color: activeTab===i ? "#fff" : "#3d6b52" }}>{t}</button>
//                     ))}
//                   </div>
//                 </div>
//                 {/* SVG Chart */}
//                 <div style={{ position: "relative", height: 140, marginBottom: 20 }}>
//                   <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
//                     <defs>
//                       <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%" stopColor="#00c853" stopOpacity="0.2"/>
//                         <stop offset="100%" stopColor="#00c853" stopOpacity="0"/>
//                       </linearGradient>
//                     </defs>
//                     <polygon points={`${points} 100%,100% 0%,100%`} fill="url(#chartGrad)"/>
//                     <polyline points={points} fill="none" stroke="#00c853" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 {/* Mini Stats */}
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
//                   {[
//                     { label: "Win Rate", val: "68.4%", up: true },
//                     { label: "Sharpe", val: "2.34", up: true },
//                     { label: "Max DD", val: "-4.2%", up: false },
//                   ].map((s) => (
//                     <div key={s.label} style={{ background: "#f8fffe", borderRadius: 12, padding: "10px 12px", border: "1px solid var(--border)" }}>
//                       <div style={{ fontSize: 10, color: "#3d6b52", fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
//                       <div style={{ fontSize: 16, fontWeight: 700, color: s.up ? "#00962e" : "#e53935" }}>{s.val}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Floating cards */}
//               <div className="floating-card" style={{ bottom: -20, right: -24, animationDelay: "0s", minWidth: 150 }}>
//                 <div style={{ fontSize: 10, color: "#3d6b52", fontWeight: 700, marginBottom: 4 }}>🤖 AI Signal</div>
//                 <div style={{ fontSize: 13, fontWeight: 700, color: "#00962e" }}>BUY NIFTY 24200 CE</div>
//                 <div style={{ fontSize: 11, color: "#3d6b52" }}>Confidence: 87%</div>
//               </div>
//               <div className="floating-card" style={{ top: 10, left: -30, animationDelay: "2s", minWidth: 130 }}>
//                 <div style={{ fontSize: 10, color: "#3d6b52", fontWeight: 700, marginBottom: 4 }}>⚡ Live Order</div>
//                 <div style={{ fontSize: 13, fontWeight: 700, color: "#0a2a1a" }}>Executed ✓</div>
//                 <div style={{ fontSize: 11, color: "#00c853" }}>+₹4,820 P&L</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section style={{ background: "#0a2a1a", padding: "60px 5%" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
//             {STATS.map((s, i) => (
//               <div key={i} style={{ padding: "30px 24px", borderRight: i < 3 ? "1px solid rgba(0,200,83,0.15)" : "none", textAlign: "center" }}>
//                 <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
//                 <div className="heading-font" style={{ fontSize: 36, fontWeight: 800, color: "#00c853", marginBottom: 6 }}>
//                   <AnimatedCounter target={s.value} />
//                 </div>
//                 <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section style={{ padding: "100px 5%", background: "#f8fffe" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ textAlign: "center", marginBottom: 64 }}>
//             <div className="section-label" style={{ margin: "0 auto 16px" }}>Platform Features</div>
//             <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
//               Everything You Need to Trade Smarter
//             </h2>
//             <p style={{ fontSize: 17, color: "#3d6b52", maxWidth: 520, margin: "0 auto" }}>
//               A complete algorithmic trading ecosystem, from strategy ideation to live deployment — all in one platform.
//             </p>
//           </div>
//           <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {FEATURES.map((f, i) => (
//               <div key={i} className="card" style={{ padding: 32 }}>
//                 <div style={{ marginBottom: 20 }}>{f.icon}</div>
//                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
//                   <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700 }}>{f.title}</h3>
//                   <span className="badge">{f.badge}</span>
//                 </div>
//                 <p style={{ fontSize: 14, color: "#3d6b52", lineHeight: 1.65 }}>{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* STRATEGY SHOWCASE */}
//       <section style={{ padding: "80px 5%", background: "#fff", borderTop: "1px solid var(--border)" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
//             <div>
//               <div className="section-label">Marketplace</div>
//               <h2 className="heading-font" style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.02em" }}>Top Performing Strategies</h2>
//             </div>
//             <button className="btn-outline">Browse All Strategies →</button>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {STRATEGIES.map((s, i) => (
//               <div key={i} className="card" style={{ padding: 28 }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
//                   <div>
//                     <h3 className="heading-font" style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{s.name}</h3>
//                     <span style={{ fontSize: 12, color: "#3d6b52", background: "#f0faf5", padding: "3px 10px", borderRadius: 100, fontWeight: 600 }}>{s.type}</span>
//                   </div>
//                   <span className="badge" style={{ background: "#e8fdf0" }}>{s.badge}</span>
//                 </div>
//                 {/* Mini sparkline */}
//                 <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 40, marginBottom: 20 }}>
//                   {Array.from({ length: 16 }, (_, j) => (
//                     <div key={j} className="sparkline-bar" style={{
//                       flex: 1,
//                       height: `${30 + Math.sin((j + i * 3) * 0.8) * 20 + Math.random() * 10}%`,
//                       opacity: j === 15 ? 1 : 0.5 + j * 0.03
//                     }} />
//                   ))}
//                 </div>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
//                   {[{ l: "Return", v: s.return, green: true }, { l: "Sharpe", v: s.sharpe }, { l: "Trades", v: s.trades }].map((m) => (
//                     <div key={m.l} style={{ textAlign: "center" }}>
//                       <div style={{ fontSize: 10, color: "#3d6b52", fontWeight: 600, marginBottom: 2 }}>{m.l}</div>
//                       <div style={{ fontSize: 15, fontWeight: 700, color: m.green ? "#00962e" : "#0a2a1a" }}>{m.v}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="btn-primary" style={{ width: "100%", marginTop: 20, padding: "12px", fontSize: 13 }}>Deploy Strategy</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section style={{ padding: "100px 5%", background: "#f8fffe" }}>
//         <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
//           <div className="section-label" style={{ margin: "0 auto 16px" }}>How It Works</div>
//           <h2 className="heading-font" style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 60 }}>
//             Go Live in 4 Simple Steps
//           </h2>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }}>
//             <div style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, var(--green), var(--green))", opacity: 0.2, zIndex: 0 }} className="hide-mobile" />
//             {[
//               { step: "01", icon: "🔌", title: "Connect Broker", desc: "Link your Zerodha, Angel One, or any supported broker in seconds." },
//               { step: "02", icon: "🧠", title: "Build Strategy", desc: "Use our AI builder or choose from 3,000+ marketplace strategies." },
//               { step: "03", icon: "🧪", title: "Backtest & Optimize", desc: "Validate on historical data and auto-optimize with one click." },
//               { step: "04", icon: "🚀", title: "Deploy Live", desc: "Go live with real-time monitoring, alerts, and risk controls." },
//             ].map((s, i) => (
//               <div key={i} style={{ position: "relative", zIndex: 1, padding: "28px 20px", background: "#fff", borderRadius: 20, border: "1px solid var(--border)", boxShadow: "0 2px 20px rgba(0,180,70,0.06)" }}>
//                 <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #e8fdf0, #b2f5d0)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 16px", border: "2px solid var(--green-mid)" }}>
//                   {s.icon}
//                 </div>
//                 <div style={{ fontSize: 11, color: "#00c853", fontWeight: 800, marginBottom: 8 }}>STEP {s.step}</div>
//                 <h3 className="heading-font" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
//                 <p style={{ fontSize: 13, color: "#3d6b52", lineHeight: 1.55 }}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRICING */}
//       <section style={{ padding: "100px 5%", background: "#fff", borderTop: "1px solid var(--border)" }}>
//         <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//           <div style={{ textAlign: "center", marginBottom: 64 }}>
//             <div className="section-label" style={{ margin: "0 auto 16px" }}>Pricing</div>
//             <h2 className="heading-font" style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>
//               Transparent, Flexible Pricing
//             </h2>
//             <p style={{ color: "#3d6b52", fontSize: 16 }}>No hidden fees. Cancel anytime. 14-day free trial included.</p>
//           </div>
//           <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {PRICING.map((p, i) => (
//               <div key={i} className={p.highlight ? "pricing-highlight" : "card"} style={{ padding: 36, borderRadius: 24, position: "relative", transform: p.highlight ? "scale(1.03)" : "scale(1)" }}>
//                 {p.highlight && (
//                   <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#0a2a1a", color: "#00c853", borderRadius: 100, padding: "4px 18px", fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
//                     ✦ MOST POPULAR
//                   </div>
//                 )}
//                 <div style={{ marginBottom: 24 }}>
//                   <h3 className="heading-font" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: p.highlight ? "#fff" : "#0a2a1a" }}>{p.plan}</h3>
//                   <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
//                     <span className="heading-font" style={{ fontSize: 40, fontWeight: 800, color: p.highlight ? "#fff" : "#00962e" }}>{p.price}</span>
//                     <span style={{ fontSize: 15, color: p.highlight ? "rgba(255,255,255,0.7)" : "#3d6b52" }}>{p.period}</span>
//                   </div>
//                   <p style={{ fontSize: 13, color: p.highlight ? "rgba(255,255,255,0.75)" : "#3d6b52" }}>{p.desc}</p>
//                 </div>
//                 <div style={{ marginBottom: 28 }}>
//                   {p.features.map((f) => (
//                     <div key={f} className="feature-check" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: p.highlight ? "#fff" : "#0a2a1a", fontSize: 14 }}>
//                       <span style={{ width: 20, height: 20, background: p.highlight ? "rgba(255,255,255,0.2)" : "#e8fdf0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                         <svg viewBox="0 0 12 10" fill="none" width="10"><path d="M1 5 L4 8 L11 1" stroke={p.highlight ? "#fff" : "#00c853"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                       </span>
//                       {f}
//                     </div>
//                   ))}
//                 </div>
//                 <button style={{
//                   width: "100%", padding: "14px", borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer",
//                   background: p.highlight ? "#fff" : "linear-gradient(135deg, #00c853, #00962e)",
//                   color: p.highlight ? "#00962e" : "#fff",
//                   border: "none",
//                   boxShadow: p.highlight ? "0 4px 20px rgba(0,0,0,0.1)" : "0 4px 20px rgba(0,200,83,0.25)",
//                   transition: "all 0.25s"
//                 }}>{p.cta}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section style={{ padding: "80px 5%", background: "#f8fffe", borderTop: "1px solid var(--border)" }}>
//         <div style={{ maxWidth: 1100, margin: "0 auto" }}>
//           <div style={{ textAlign: "center", marginBottom: 48 }}>
//             <div className="section-label" style={{ margin: "0 auto 16px" }}>Testimonials</div>
//             <h2 className="heading-font" style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.02em" }}>Loved by Traders Everywhere</h2>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {[
//               { name: "Arjun Mehta", role: "Quant Trader, Mumbai", text: "AlgoPulse completely transformed how I trade. My strategy runs flawlessly 24/7. Made ₹8L extra this year alone.", stars: 5 },
//               { name: "Priya Sharma", role: "Hedge Fund Analyst", text: "The backtesting engine is institutional grade. Tick-level accuracy, fast, and the risk analytics dashboard is outstanding.", stars: 5 },
//               { name: "Rahul Verma", role: "Retail Investor, Bangalore", text: "Started with zero coding knowledge. The AI builder had me live in under an hour. Absolutely incredible product.", stars: 5 },
//             ].map((t, i) => (
//               <div key={i} className="card" style={{ padding: 28 }}>
//                 <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
//                   {Array.from({ length: t.stars }).map((_, j) => <span key={j} style={{ color: "#00c853", fontSize: 16 }}>★</span>)}
//                 </div>
//                 <p style={{ fontSize: 14, color: "#3d6b52", lineHeight: 1.65, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
//                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                   <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #00c853, #00962e)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 16 }}>
//                     {t.name[0]}
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
//                     <div style={{ fontSize: 12, color: "#3d6b52" }}>{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA BANNER */}
//       <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #0a2a1a 0%, #0d3d22 100%)", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,200,83,0.12) 0%, transparent 70%)" }} />
//         <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
//           <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
//           <h2 className="heading-font" style={{ fontSize: 44, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 16 }}>
//             Ready to Automate Your Alpha?
//           </h2>
//           <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.65, marginBottom: 36 }}>
//             Join 40,000+ traders who've automated their edge. Start free — no credit card needed.
//           </p>
//           <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
//             <button className="btn-primary" style={{ padding: "16px 40px", fontSize: 16 }}>Start Free 14-Day Trial →</button>
//             <button style={{ padding: "15px 32px", fontSize: 16, background: "transparent", border: "2px solid rgba(255,255,255,0.2)", borderRadius: 12, color: "#fff", cursor: "pointer", fontWeight: 600, transition: "all 0.25s" }}>
//               Schedule Demo
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer style={{ background: "#061811", padding: "60px 5% 30px", color: "rgba(255,255,255,0.5)" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
//                 <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #00c853, #00962e)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
//                     <polyline points="4,16 8,10 13,13 20,6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <span className="heading-font" style={{ fontWeight: 800, fontSize: 18, color: "#fff" }}>Algo<span style={{ color: "#00c853" }}>Pulse</span></span>
//               </div>
//               <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>
//                 Professional algorithmic trading platform for retail and institutional traders. Trade smarter, not harder.
//               </p>
//             </div>
//             {[
//               { title: "Platform", links: ["Features", "Pricing", "API Docs", "Status"] },
//               { title: "Strategies", links: ["Marketplace", "Templates", "Backtester", "Academy"] },
//               { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
//             ].map((col) => (
//               <div key={col.title}>
//                 <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 16, letterSpacing: "0.05em" }}>{col.title}</div>
//                 {col.links.map((l) => (
//                   <div key={l} style={{ fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
//                     onMouseEnter={e => e.target.style.color = "#00c853"}
//                     onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
//                   >{l}</div>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
//             <div style={{ fontSize: 12 }}>© 2025 AlgoPulse Technologies Pvt. Ltd. All rights reserved.</div>
//             <div style={{ display: "flex", gap: 20, fontSize: 12 }}>
//               <span style={{ cursor: "pointer" }}>Privacy Policy</span>
//               <span style={{ cursor: "pointer" }}>Terms of Service</span>
//               <span style={{ cursor: "pointer" }}>SEBI Disclaimer</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }