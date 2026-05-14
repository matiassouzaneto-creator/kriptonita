"use client";
import { Wallet, Plus, ExternalLink, Copy, MoreHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { walletDistribution } from "@/lib/data";
import { formatUSD } from "@/lib/utils";

const wallets = [
  { id: 1, name: "Cold Storage #1", address: "0x7D2E...91AF", network: "Bitcoin", balance: "$1,284,392", asset: "1.842 BTC", type: "Hardware", status: "active", color: "#F59E0B" },
  { id: 2, name: "Hot Wallet ETH", address: "0x3B81...C002", network: "Ethereum", balance: "$854,211", asset: "243.1 ETH", type: "Software", status: "active", color: "#60A5FA" },
  { id: 3, name: "Treasury USDC", address: "0xA91F...3C44", network: "Ethereum", balance: "$427,840", asset: "427,840 USDC", type: "Multi-sig", status: "active", color: "#4ADE80" },
  { id: 4, name: "Solana Trading", address: "9xHf...mK2p", network: "Solana", balance: "$185,293", asset: "1,284.3 SOL", type: "Software", status: "active", color: "#A78BFA" },
  { id: 5, name: "Reserve Fund", address: "0xF44A...8821", network: "Ethereum", balance: "$62,841", asset: "17.9 ETH", type: "Multi-sig", status: "active", color: "#60A5FA" },
  { id: 6, name: "DeFi Yield", address: "0x2C77...B390", network: "Polygon", balance: "$32,815", asset: "Various", type: "Smart Contract", status: "degraded", color: "#FB923C" },
];

export default function WalletsPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Wallets</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Manage your connected wallets and addresses</p>
        </div>
        <button className="k-btn-primary flex items-center gap-2">
          <Plus size={14} strokeWidth={2.5} />
          Add Wallet
        </button>
      </div>

      {/* Summary bar */}
      <div className="k-card p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Total Wallets", value: "12", sub: "6 hardware" },
            { label: "Total Value", value: "$2,847,392", sub: "↑ 1.69% today" },
            { label: "Networks", value: "4", sub: "BTC, ETH, SOL, POL" },
            { label: "Pending Txs", value: "2", sub: "Est. 15min" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                {s.label}
              </div>
              <div className="text-xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{s.value}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wallets grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {wallets.map((w) => (
          <div key={w.id} className="k-card p-5 group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${w.color}18` }}
                >
                  <Wallet size={16} style={{ color: w.color }} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#fff" }}>{w.name}</div>
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{w.network}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`badge ${w.status === "active" ? "badge-green" : "badge-orange"} text-[10px]`}>
                  {w.status}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{w.balance}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{w.asset}</div>
            </div>

            <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-1.5">
                <code className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>{w.address}</code>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy size={11} style={{ color: "rgba(255,255,255,0.4)" }} />
                </button>
              </div>
              <div className="flex items-center gap-1">
                <button
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(74,222,128,0.08)" }}
                >
                  <ArrowDownLeft size={12} style={{ color: "#4ADE80" }} />
                </button>
                <button
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(248,113,113,0.08)" }}
                >
                  <ArrowUpRight size={12} style={{ color: "#F87171" }} />
                </button>
                <button
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <ExternalLink size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add wallet card */}
        <div
          className="rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all"
          style={{
            border: "1.5px dashed rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.01)",
            minHeight: 200,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(208,255,62,0.2)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(208,255,62,0.08)" }}>
            <Plus size={18} style={{ color: "#D0FF3E" }} />
          </div>
          <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Connect new wallet</div>
        </div>
      </div>
    </div>
  );
}
