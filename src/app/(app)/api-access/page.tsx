import { apiStats } from "@/lib/data";
import { Code2, Plus, Copy, Eye, Trash2, TrendingUp, Zap, Globe } from "lucide-react";

const keys = [
  { name: "Production API", key: "krp_live_4k9f...m2xQ", created: "Jan 12, 2025", requests: "2.4M", status: "active", permissions: ["read", "write", "transfer"] },
  { name: "Analytics Read-Only", key: "krp_live_8b2c...p7kL", created: "Feb 3, 2025", requests: "184K", status: "active", permissions: ["read"] },
  { name: "Webhook Signer", key: "krp_live_1e7d...a3nM", created: "Mar 18, 2025", requests: "7.2K", status: "active", permissions: ["webhooks"] },
  { name: "Dev Testing", key: "krp_test_9d3e...c4pX", created: "Apr 2, 2025", requests: "284", status: "restricted", permissions: ["read"] },
];

export default function APIAccessPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>API Access</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Manage API keys, permissions, and usage analytics</p>
        </div>
        <button className="k-btn-primary flex items-center gap-2">
          <Plus size={14} strokeWidth={2.5} />
          Generate Key
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: Zap, label: "Total Requests (30d)", value: "2.59M", color: "#D0FF3E", bg: "rgba(208,255,62,0.08)" },
          { icon: Globe, label: "Success Rate", value: "99.97%", color: "#4ADE80", bg: "rgba(74,222,128,0.08)" },
          { icon: TrendingUp, label: "Avg Latency (p99)", value: "88ms", color: "#60A5FA", bg: "rgba(96,165,250,0.08)" },
        ].map((s) => (
          <div key={s.label} className="k-card p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
              <s.icon size={18} style={{ color: s.color }} strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                {s.label}
              </div>
              <div className="text-xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* API Keys */}
      <div className="k-card overflow-hidden">
        <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>API Keys</div>
        </div>
        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          {keys.map((k, i) => (
            <div key={i} className="px-6 py-4 flex items-center gap-4 group hover:bg-white/[0.01] transition-colors">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(208,255,62,0.08)" }}>
                <Code2 size={15} style={{ color: "#D0FF3E" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold" style={{ color: "#fff" }}>{k.name}</span>
                  <span className={`badge text-[10px] ${k.status === "active" ? "badge-green" : "badge-orange"}`}>{k.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>{k.key}</code>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy size={10} style={{ color: "rgba(255,255,255,0.4)" }} />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {k.permissions.map((p) => (
                    <span key={p} className="badge badge-gray text-[10px]">{p}</span>
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs font-semibold" style={{ color: "#fff" }}>{k.requests}</div>
                <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>requests</div>
                <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>{k.created}</div>
              </div>
              <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <Eye size={12} style={{ color: "rgba(255,255,255,0.4)" }} />
                </button>
                <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(248,113,113,0.08)" }}>
                  <Trash2 size={12} style={{ color: "#F87171" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Endpoint stats */}
      <div className="k-card overflow-hidden">
        <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Endpoint Performance</div>
        </div>
        <table className="k-table w-full">
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Calls (30d)</th>
              <th>P99 Latency</th>
              <th>Error Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {apiStats.map((s, i) => (
              <tr key={i}>
                <td><code className="text-xs font-mono" style={{ color: "#D0FF3E" }}>{s.endpoint}</code></td>
                <td><span className="text-xs font-semibold" style={{ color: "#fff" }}>{s.calls.toLocaleString()}</span></td>
                <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{s.p99}</span></td>
                <td>
                  <span className="text-xs font-medium" style={{ color: s.errors > 0.1 ? "#FB923C" : "#4ADE80" }}>
                    {s.errors.toFixed(2)}%
                  </span>
                </td>
                <td><span className={`badge ${s.errors > 0.1 ? "badge-orange" : "badge-green"} text-[11px]`}>{s.errors > 0.1 ? "degraded" : "healthy"}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
