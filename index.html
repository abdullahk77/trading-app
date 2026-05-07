import React, { useState, useEffect, useMemo } from 'react';
import { 
  Globe, Clock, BrainCircuit, Crosshair, 
  AlertTriangle, CheckCircle2, Wallet, 
  TrendingUp, ShieldAlert, BookOpen, X, Send,
  Activity, Server, Lock, AlertOctagon,
  BarChart, WifiOff, CheckCircle
} from 'lucide-react';

/**
 * ------------------------------------------------------------------
 * SUPABASE EDGE FUNCTIONS (Mock Backend Infrastructure)
 * Represents Step 1-3 of the Roadmap: Backend Intelligence Layer
 * ------------------------------------------------------------------
 */
const SupabaseEdgeFunctions = {
  fetchRegime: async (market) => {
    return new Promise((resolve, reject) => {
      // Simulating a 5% chance of API failure for Error Handling (Step 9)
      if (Math.random() < 0.05) return setTimeout(() => reject(new Error("TwelveData API Timeout")), 800);
      
      setTimeout(() => resolve({
        score: market === 'Tadawul' ? 62 : 18,
        status: market === 'Tadawul' ? "Selective Trading" : "Risk-Off / Defensive",
        environment: market === 'Tadawul' ? "Choppy / Rotational" : "High Volatility Distribution",
        macroNote: market === 'Tadawul' 
          ? "TASI holding 12k support. Oil volatility driving rotation into financials. Breadth narrowing."
          : "VIX expanded > 25. S&P breaking 50 EMA. Institutional distribution detected across all sectors.",
        riskMultiplier: market === 'Tadawul' ? 0.5 : 0.0,
        action: market === 'Tadawul' ? "Reduced Sizing (50%). Strict entry zones." : "NO TRADE. Preserve capital."
      }), 800);
    });
  },
  
  fetchTopSetups: async (market) => {
    return new Promise(resolve => setTimeout(() => resolve(
      market === 'Tadawul' ? [
        {
          id: '2222.SR', name: 'Saudi Aramco', sector: 'Energy', grade: 'A+', type: 'VCP Breakout',
          lastPrice: 27.45, entryZone: '27.40 - 27.60', entryAvg: 27.50, atr: 0.40,
          stopLoss: 26.90, target1: 28.50,
          aiContext: 'Tight consolidation above rising 50 EMA with improving relative strength versus sector peers. Volume contraction suggests institutional absorption.'
        },
        {
          id: '1120.SR', name: 'Al Rajhi Bank', sector: 'Financials', grade: 'A', type: 'Pullback Into Trend',
          lastPrice: 84.10, entryZone: '83.50 - 84.20', entryAvg: 83.85, atr: 1.20,
          stopLoss: 81.50, target1: 88.00,
          aiContext: 'Holding critical institutional support on light volume. Mean reversion probability high as selling pressure exhausts.'
        }
      ] : []
    ), 1200));
  },

  saveJournalEntry: async (entryData) => {
    return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1000));
  }
};

/**
 * ------------------------------------------------------------------
 * MAIN APPLICATION (Frontend Display Layer)
 * ------------------------------------------------------------------
 */
export default function TradingOS() {
  // --- CORE STATE ---
  const [market, setMarket] = useState('Tadawul');
  const [accountBalance, setAccountBalance] = useState(50000);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // --- DATA & SYSTEM STATE ---
  const [regime, setRegime] = useState(null);
  const [setups, setSetups] = useState([]);
  const [systemStatus, setSystemStatus] = useState({ state: 'loading', message: 'Initializing Intelligence Engine...' });
  
  // --- UI STATE ---
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [journalStatus, setJournalStatus] = useState('idle');

  // --- INSTITUTIONAL RISK RULES (Step 6) ---
  const currency = market === 'Tadawul' ? 'SAR' : 'USD';
  const riskRules = {
    maxRiskPerTrade: 0.02,    // 2%
    maxDailyDrawdown: 0.04,   // 4%
    maxSectorExposure: 0.25,  // 25%
  };

  // --- DATA FETCHING (Step 9: Error Handling Integration) ---
  useEffect(() => {
    let isMounted = true;
    setSystemStatus({ state: 'loading', message: 'Querying Supabase Edge Functions...' });
    
    const loadData = async () => {
      try {
        const regimeData = await SupabaseEdgeFunctions.fetchRegime(market);
        const setupsData = await SupabaseEdgeFunctions.fetchTopSetups(market);
        
        if (isMounted) {
          setRegime(regimeData);
          setSetups(regimeData.riskMultiplier === 0 ? [] : setupsData);
          setSystemStatus({ state: 'operational', message: 'All Systems Nominal' });
        }
      } catch (error) {
        console.error("API Failure:", error);
        if (isMounted) {
          setSystemStatus({ state: 'degraded', message: 'Market Data Feed Delayed. Using last known state.' });
          // Fallback static state on error to prevent UI crashing
          setRegime({ score: 0, status: "System Degraded", environment: "API Timeout", riskMultiplier: 0, action: "Standby." });
          setSetups([]);
        }
      }
    };

    loadData();
    return () => { isMounted = false; };
  }, [market]);

  // --- CLOCK & EXECUTION ENGINE (Step 10: Robust Timezones) ---
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const executionState = useMemo(() => {
    // Strictly enforcing Asia/Riyadh timezone logic via standard Intl API
    const saudiFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Riyadh',
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'short'
    });
    
    const parts = saudiFormatter.formatToParts(currentTime);
    const hour = parseInt(parts.find(p => p.type === 'hour').value, 10);
    const minute = parseInt(parts.find(p => p.type === 'minute').value, 10);
    const weekday = parts.find(p => p.type === 'weekday').value;
    const timeValue = hour + (minute / 60);

    if (weekday === 'Fri' || weekday === 'Sat') return { status: "WEEKEND REVIEW", action: "Markets closed. Focus on weekly charting.", color: "text-slate-400 bg-slate-900/50 border-slate-800" };
    if (timeValue < 10) return { status: "PRE-MARKET PREP", action: "Review levels. Do not place orders yet.", color: "text-amber-500 bg-[#15110a] border-amber-900/40" };
    if (timeValue >= 10 && timeValue < 11.5) return { status: "WAIT / NO CONFIRMATION", action: "Morning volatility zone. Let flow establish.", color: "text-rose-400 bg-[#150a0a] border-rose-900/40" };
    if (timeValue >= 11.5 && timeValue < 13.5) return { status: "MONITOR PULLBACKS", action: "Watch for volume dry-up at entry zones.", color: "text-blue-400 bg-[#0a1115] border-blue-900/40" };
    if (timeValue >= 13.5 && timeValue < 14.75) return { status: "EXECUTION WINDOW", action: "Optimal swing trade entry time.", color: "text-emerald-400 bg-[#0a1511] border-emerald-900/40" };
    if (timeValue >= 14.75 && timeValue <= 15) return { status: "CLOSING AUCTION", action: "Market closing. No new entries.", color: "text-orange-400 bg-[#150f0a] border-orange-900/40" };
    
    return { status: "POST-MARKET REVIEW", action: "Evaluate closes, update journal.", color: "text-indigo-400 bg-[#0a0a15] border-indigo-900/40" };
  }, [currentTime]);

  // --- HANDLERS ---
  const handleJournalSubmit = async (e) => {
    e.preventDefault();
    setJournalStatus('submitting');
    await SupabaseEdgeFunctions.saveJournalEntry({}); 
    setJournalStatus('success');
    setTimeout(() => { setIsJournalOpen(false); setJournalStatus('idle'); }, 1500);
  };

  // --- UI COMPONENTS ---

  const SystemStatusIndicator = () => (
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
      {systemStatus.state === 'loading' && <><Activity size={12} className="animate-spin text-indigo-400" /> <span className="text-indigo-400">{systemStatus.message}</span></>}
      {systemStatus.state === 'operational' && <><CheckCircle size={12} className="text-emerald-500" /> <span className="text-emerald-500">{systemStatus.message}</span></>}
      {systemStatus.state === 'degraded' && <><WifiOff size={12} className="text-rose-500 animate-pulse" /> <span className="text-rose-500">{systemStatus.message}</span></>}
    </div>
  );

  const JournalModal = () => (
    <div className="fixed inset-0 bg-[#060608]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <form onSubmit={handleJournalSubmit} className="bg-[#0b0d10] border border-slate-800 rounded-xl w-full max-w-lg overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b border-slate-800/60 bg-slate-900/20">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2 uppercase tracking-widest">
            <BookOpen size={16} className="text-indigo-400"/> Immutable Journal Log
          </h3>
          <button type="button" onClick={() => setIsJournalOpen(false)} className="text-slate-500 hover:text-slate-200 transition-colors">
            <X size={18} />
          </button>
        </div>
        
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 block">Ticker</label>
              <input required type="text" placeholder="e.g. 2222.SR" className="w-full bg-[#060608] border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 text-sm outline-none focus:border-indigo-500/50 transition-colors" />
            </div>
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 block">Execution Quality</label>
              <select className="w-full bg-[#060608] border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 text-sm outline-none focus:border-indigo-500/50 transition-colors">
                <option>Systematic (Flawless)</option>
                <option>Late Entry / Chased</option>
                <option>Hesitated / Missed Fill</option>
                <option>Emotional / FOMO</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 block">Institutional Thesis & Deviations</label>
            <textarea 
              required rows={4} 
              placeholder="Record structural logic, volume confirmation, and any deviation from your core rules." 
              className="w-full bg-[#060608] border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm outline-none focus:border-indigo-500/50 resize-none transition-colors"
            />
          </div>
        </div>

        <div className="p-5 bg-slate-900/20 border-t border-slate-800/60 flex justify-between items-center">
          <span className="text-[10px] text-slate-500 flex items-center gap-1.5 uppercase tracking-widest"><Lock size={12}/> Secure DB Write</span>
          <button 
            type="submit"
            disabled={journalStatus !== 'idle'}
            className="flex items-center gap-2 bg-slate-100 hover:bg-white text-[#060608] disabled:opacity-50 px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all"
          >
            {journalStatus === 'idle' ? <><Send size={14} /> Commit Record</> : 
             journalStatus === 'submitting' ? <><Activity size={14} className="animate-spin" /> Committing...</> :
             <><CheckCircle2 size={14} /> Committed</>}
          </button>
        </div>
      </form>
    </div>
  );

  const SetupCard = ({ setup }) => {
    // LAYER 4: ADVANCED RISK CALCULATOR (Step 6)
    const maxRiskAmount = accountBalance * (riskRules.maxRiskPerTrade * (regime?.riskMultiplier || 1));
    const riskPerShare = setup.entryAvg - setup.stopLoss;
    const maxShares = Math.floor(maxRiskAmount / riskPerShare);
    const requiredCapital = maxShares * setup.entryAvg;
    
    const finalShares = requiredCapital > accountBalance ? Math.floor(accountBalance / setup.entryAvg) : maxShares;
    const rMultiple = ((setup.target1 - setup.entryAvg) / riskPerShare).toFixed(1);

    return (
      <div className="bg-[#0b0d10] border border-slate-800 rounded-xl p-6 flex flex-col h-full hover:border-slate-700 transition-colors">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100 tracking-tight">{setup.id}</h3>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{setup.name} <span className="mx-1">•</span> {setup.sector}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-emerald-400 font-bold px-2 py-0.5 rounded text-[10px] border border-emerald-500/20 uppercase tracking-widest">
              Tier {setup.grade}
            </div>
            <div className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">{setup.type}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-px bg-slate-800 mb-6 border border-slate-800 rounded-lg overflow-hidden">
          <div className="space-y-1 bg-[#060608] p-4">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Zone</p>
            <div className="font-mono text-sm text-blue-400">{setup.entryZone}</div>
          </div>
          <div className="space-y-1 bg-[#060608] p-4">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Price</p>
            <div className="font-mono text-sm text-slate-200">{setup.lastPrice.toFixed(2)}</div>
          </div>
          <div className="space-y-1 bg-[#060608] p-4">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest flex justify-between">
              Stop <span>ATR: {setup.atr.toFixed(2)}</span>
            </p>
            <div className="font-mono text-sm text-rose-400">{setup.stopLoss.toFixed(2)}</div>
          </div>
          <div className="space-y-1 bg-[#060608] p-4">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Target (R{rMultiple})</p>
            <div className="font-mono text-sm text-emerald-400">{setup.target1.toFixed(2)}</div>
          </div>
        </div>

        {/* LAYER 6: AI CONTEXT (Step 7) */}
        <div className="mb-6 flex-grow">
          <p className="text-[11px] text-slate-400 leading-relaxed font-medium pl-3 border-l border-indigo-500/50">
            <span className="text-indigo-400 font-bold uppercase tracking-widest block mb-1">AI Context</span>
            {setup.aiContext}
          </p>
        </div>

        {/* EXECUTION OUTPUT */}
        <div className="mt-auto bg-[#060608] p-4 rounded-lg border border-slate-800 flex justify-between items-center">
          <div>
            <span className="block text-[9px] text-slate-500 uppercase tracking-widest mb-1">Authorized Size</span>
            <span className="font-mono text-base text-slate-200">{finalShares > 0 ? finalShares : 0} <span className="text-[10px] text-slate-600 font-sans uppercase">Units</span></span>
          </div>
          <div className="text-right">
            <span className="block text-[9px] text-slate-500 uppercase tracking-widest mb-1">Allocated Capital</span>
            <span className="font-mono text-base text-slate-200">{(finalShares * setup.entryAvg).toFixed(0)} <span className="text-[10px] text-slate-600 font-sans uppercase">{currency}</span></span>
          </div>
        </div>
      </div>
    );
  };

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-[#060608] text-slate-200 font-sans selection:bg-indigo-500/30">
      {isJournalOpen && <JournalModal />}
      
      <div className="max-w-[1300px] mx-auto p-4 md:p-8 space-y-6">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Crosshair size={20} className="text-slate-100" />
              <h1 className="text-2xl font-bold tracking-tight text-white uppercase">Desk Intelligence</h1>
            </div>
            <SystemStatusIndicator />
          </div>
          
          <div className="flex flex-wrap items-end gap-6">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Data Feed</p>
              <div className="flex bg-[#0b0d10] p-1 rounded border border-slate-800">
                <button onClick={() => setMarket('Tadawul')} className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded transition-all ${market === 'Tadawul' ? 'bg-slate-200 text-[#060608]' : 'text-slate-500 hover:text-slate-300'}`}>
                  Tadawul (SAR)
                </button>
                <button onClick={() => setMarket('US')} className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded transition-all ${market === 'US' ? 'bg-slate-200 text-[#060608]' : 'text-slate-500 hover:text-slate-300'}`}>
                  US Equities
                </button>
              </div>
            </div>

            <div className="text-right flex flex-col items-end">
              <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-2 font-bold flex items-center gap-1.5">
                <Wallet size={12} /> Base Capital
              </p>
              <div className="flex items-center gap-2 bg-[#0b0d10] border border-slate-800 rounded focus-within:border-slate-500 transition-colors px-1">
                <input 
                  type="number" value={accountBalance} onChange={(e) => setAccountBalance(Number(e.target.value) || 0)}
                  className="bg-transparent px-3 py-1.5 w-28 text-right text-slate-200 font-mono text-sm outline-none"
                />
                <span className="text-slate-600 font-mono text-[10px] uppercase pr-3">{currency}</span>
              </div>
            </div>
          </div>
        </header>

        {systemStatus.state === 'loading' ? (
          <div className="h-64 flex flex-col items-center justify-center text-slate-600 gap-4 border border-slate-800 rounded-xl bg-[#0b0d10]/50">
            <Server size={24} className="animate-pulse text-slate-500" />
            <p className="text-[10px] uppercase tracking-widest font-bold">Synchronizing Architecture...</p>
          </div>
        ) : (
          <>
            {/* TOP METRICS (Layers 1, 6, 7) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* REGIME ENGINE */}
              <div className="bg-[#0b0d10] p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <Globe size={12} /> Market Regime
                  </h2>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${regime?.riskMultiplier > 0 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                    Risk: {regime?.riskMultiplier}x
                  </span>
                </div>
                
                <div className="mb-6">
                  <p className="text-2xl font-bold text-slate-100 tracking-tight mb-1">{regime?.status}</p>
                  <p className="text-xs text-slate-500 font-medium">{regime?.environment}</p>
                </div>
                
                <div className="mt-auto">
                  <div className={`text-[10px] px-3 py-2 rounded font-bold uppercase tracking-widest border flex items-center gap-2 ${regime?.riskMultiplier === 0 ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                    <AlertTriangle size={12} /> {regime?.action}
                  </div>
                </div>
              </div>

              {/* TIMING ASSISTANT */}
              <div className={`p-5 rounded-xl border flex flex-col justify-between transition-colors duration-700 ${executionState.color}`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-[9px] font-bold uppercase tracking-widest opacity-60 flex items-center gap-2">
                    <Clock size={12} /> Execution Window
                  </h2>
                </div>
                
                <div className="mb-6">
                  <p className="text-2xl font-bold mb-1 tracking-tight">{executionState.status}</p>
                  <p className="text-xs opacity-80 font-medium">{executionState.action}</p>
                </div>
                
                <div className="mt-auto text-[10px] font-mono opacity-60 flex justify-between items-center bg-black/20 p-2 rounded">
                  <span className="uppercase tracking-widest">AST Time</span>
                  <span>{new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Riyadh', hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false }).format(currentTime)}</span>
                </div>
              </div>

              {/* RISK & DISCIPLINE */}
              <div className="bg-[#0b0d10] p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <ShieldAlert size={12} /> Risk Architecture
                  </h2>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Max Daily Loss Limit</span>
                    <span className="text-xs font-mono text-slate-300">{(riskRules.maxDailyDrawdown * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Sector Exposure Cap</span>
                    <span className="text-xs font-mono text-slate-300">{(riskRules.maxSectorExposure * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Regime Adjusted Risk</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">{(riskRules.maxRiskPerTrade * (regime?.riskMultiplier || 1) * 100).toFixed(1)}%</span>
                  </div>
                </div>

                <button onClick={() => setIsJournalOpen(true)} className="mt-auto w-full bg-[#060608] hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center justify-center gap-2">
                  <BookOpen size={14} /> Open Journal
                </button>
              </div>

            </div>

            {/* SETUPS OR "NO TRADE TODAY" BLOCK (Step 13) */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-bold text-slate-100 uppercase tracking-widest flex items-center gap-2">
                  <BarChart size={16} className="text-slate-500" /> 
                  Institutional Opportunities
                </h2>
                <div className="text-[9px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
                  <Server size={10}/> Edge Filtered
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {regime?.riskMultiplier === 0 ? (
                  <div className="col-span-full py-20 text-center bg-[#0b0d10] rounded-xl border border-rose-900/30 flex flex-col items-center justify-center">
                    <div className="bg-rose-500/10 p-4 rounded-full mb-6">
                      <AlertOctagon size={48} className="text-rose-500" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-100 mb-4 tracking-tighter">NO TRADE TODAY</h2>
                    <p className="text-sm text-slate-400 max-w-lg mx-auto font-medium leading-relaxed mb-6">
                      Market regime metrics indicate a highly unfavorable risk/reward environment. 
                      Capital preservation is strictly enforced. The intelligence engine has deactivated all setup scans.
                    </p>
                    <div className="px-4 py-2 bg-[#060608] border border-slate-800 rounded text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      Action Required: Close charts. Retain cash balance.
                    </div>
                  </div>
                ) : setups.length > 0 ? (
                  setups.map((setup) => <SetupCard key={setup.id} setup={setup} />)
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
