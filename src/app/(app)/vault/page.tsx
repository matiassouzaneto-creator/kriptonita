"use client";
import { Lock, Plus, Key, FileText, CreditCard, Eye, EyeOff, Shield } from "lucide-react";

const vaultItems = [
  { type: "key", name: "Hardware Wallet Seed #1", desc: "24-word mnemonic · AES-256 encrypted", updated: "3 months ago", icon: Key, color: "#D0FF3E" },
  { type: "key", name: "Hardware Wallet Seed #2", desc: "24-word mnemonic · AES-256 encrypted", updated: "3 months ago", icon: Key, color: "#D0FF3E" },
  { type: "doc", name: "Exchange Recovery Codes", desc: "Binance, Coinbase, Kraken", updated: "1 month ago", icon: FileText, color: "#60A5FA" },
  { type: "card", name: "Corporate Card Details", desc: "Visa Business · ending 4291", updated: "2 weeks ago", icon: CreditCard, color: "#A78BFA" },
  { type: "key", name: "SSH Private Keys", desc: "3 keys — production servers", updated: "1 week ago", icon: Key, color: "#4ADE80" },
];

export default function VaultPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Vault</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>End-to-end encrypted secret storage</p>
        </div>
        <button className="k-btn-primary flex items-center gap-2">
          <Plus size={14} strokeWidth={2.5} />
          Add Secret
        </button>
      </div>

      {/* Encryption banner */}
      <div
        className="k-card p-5 flex items-center gap-4"
        style={{ borderColor: "rgba(208,255,62,0.12)", background: "rgba(208,255,62,0.02)" }}
      >
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(208,255,62,0.08)", border: "1px solid rgba(208,255,62,0.12)" }}>
          <Lock size={22} style={{ color: "#D0FF3E" }} strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-bold" style={{ color: "#fff" }}>Military-grade encryption active</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
            All secrets encrypted with AES-256-GCM · Keys derived with Argon2id · Zero-knowledge architecture
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <div className="text-center">
            <div className="text-lg font-bold" style={{ color: "#fff" }}>5</div>
            <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Secrets</div>
          </div>
          <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="text-center">
            <div className="text-lg font-bold" style={{ color: "#4ADE80" }}>AES-256</div>
            <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Cipher</div>
          </div>
        </div>
      </div>

      {/* Vault items */}
      <div className="space-y-3">
        {vaultItems.map((item, i) => (
          <div key={i} className="k-card p-5 flex items-center gap-4 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${item.color}14` }}
            >
              <item.icon size={16} style={{ color: item.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold" style={{ color: "#fff" }}>{item.name}</div>
              <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{item.desc}</div>
            </div>
            <div className="text-[11px] flex-shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>
              Updated {item.updated}
            </div>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(208,255,62,0.08)", border: "1px solid rgba(208,255,62,0.12)" }}>
                <Eye size={13} style={{ color: "#D0FF3E" }} />
              </button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <Shield size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add item card */}
      <div
        className="rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all"
        style={{
          border: "1.5px dashed rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.01)",
          minHeight: 100,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(208,255,62,0.2)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
      >
        <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.35)" }}>
          <Plus size={16} />
          <span className="text-sm font-medium">Store a new secret</span>
        </div>
        <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          Keys, passwords, documents, seeds — all encrypted client-side
        </div>
      </div>
    </div>
  );
}
