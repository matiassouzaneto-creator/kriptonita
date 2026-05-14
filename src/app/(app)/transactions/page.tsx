import { recentTransactions } from "@/lib/data";
import { Search, Filter, Download, ArrowDownLeft, ArrowUpRight, Repeat2, ExternalLink } from "lucide-react";

const typeIcon = {
  receive: { icon: ArrowDownLeft, color: "#4ADE80", bg: "rgba(74,222,128,0.08)" },
  send: { icon: ArrowUpRight, color: "#F87171", bg: "rgba(248,113,113,0.08)" },
  swap: { icon: Repeat2, color: "#60A5FA", bg: "rgba(96,165,250,0.08)" },
};

const statusBadge: Record<string, string> = {
  confirmed: "badge-green",
  pending: "badge-orange",
  failed: "badge-red",
};

// Expand mock data
const allTxs = [...recentTransactions, ...recentTransactions.map((t, i) => ({
  ...t, id: `0x${i}abc...${i}def`, time: `${i + 1}d ago`
}))];

export default function TransactionsPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Transactions</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Full history across all wallets and networks</p>
        </div>
        <button className="k-btn-ghost flex items-center gap-2">
          <Download size={13} />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="k-card p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-48 relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.3)" }} />
            <input className="k-input pl-8" placeholder="Search by hash, address, asset..." />
          </div>
          <div className="flex items-center gap-2">
            {["All", "Receive", "Send", "Swap"].map((f) => (
              <button
                key={f}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  background: f === "All" ? "rgba(208,255,62,0.1)" : "rgba(255,255,255,0.04)",
                  color: f === "All" ? "#D0FF3E" : "rgba(255,255,255,0.4)",
                  border: f === "All" ? "1px solid rgba(208,255,62,0.2)" : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="k-btn-ghost flex items-center gap-2">
            <Filter size={12} />
            Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="k-card overflow-hidden">
        <table className="k-table w-full">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Asset</th>
              <th>Network</th>
              <th>Amount (USD)</th>
              <th>Status</th>
              <th>Time</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {allTxs.map((tx, i) => {
              const cfg = typeIcon[tx.type as keyof typeof typeIcon];
              const Icon = cfg.icon;
              return (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cfg.bg }}>
                        <Icon size={14} style={{ color: cfg.color }} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold capitalize" style={{ color: "#fff" }}>{tx.type}</div>
                        <code className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>{tx.id}</code>
                      </div>
                    </div>
                  </td>
                  <td><span className="text-xs font-semibold" style={{ color: "#fff" }}>{tx.asset}</span></td>
                  <td><span className="badge badge-gray text-[11px]">{tx.network}</span></td>
                  <td>
                    <div className="text-xs font-semibold" style={{ color: "#fff" }}>{tx.usd}</div>
                    <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{tx.amount}</div>
                  </td>
                  <td>
                    <span className={`badge ${statusBadge[tx.status]}`}>
                      <span className="w-1 h-1 rounded-full inline-block mr-1" style={{
                        background: tx.status === "confirmed" ? "#4ADE80" : tx.status === "pending" ? "#FB923C" : "#F87171"
                      }} />
                      {tx.status}
                    </span>
                  </td>
                  <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{tx.time}</span></td>
                  <td>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <ExternalLink size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-6 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Showing 14 of 3,847 transactions</span>
          <div className="flex items-center gap-2">
            <button className="k-btn-ghost text-xs px-3 py-1.5">Previous</button>
            <button className="k-btn-ghost text-xs px-3 py-1.5">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
