import { Search, Filter, Download } from "lucide-react";

const logs = [
  { time: "14:32:18.421", level: "INFO", source: "api.gateway", message: "POST /v2/wallets/transfer → 200 OK", latency: "142ms" },
  { time: "14:32:12.089", level: "INFO", source: "webhook", message: "tx.confirmed dispatched → api.yourapp.com/webhook", latency: "88ms" },
  { time: "14:31:58.344", level: "WARN", source: "rate.limiter", message: "Rate limit 85% threshold reached for key krp_live_4k9f", latency: "—" },
  { time: "14:31:44.912", level: "INFO", source: "api.gateway", message: "GET /v2/prices → 200 OK (cached)", latency: "8ms" },
  { time: "14:30:22.771", level: "INFO", source: "api.gateway", message: "GET /v2/wallets → 200 OK", latency: "32ms" },
  { time: "14:29:11.234", level: "ERROR", source: "network.btc", message: "Bitcoin node connection timeout — failover to secondary", latency: "—" },
  { time: "14:29:10.199", level: "INFO", source: "api.gateway", message: "POST /v2/hlr/lookup → 200 OK", latency: "284ms" },
  { time: "14:28:55.088", level: "INFO", source: "security", message: "2FA verification successful for user rafael@kriptonita.io", latency: "—" },
  { time: "14:28:54.821", level: "INFO", source: "auth", message: "Login successful — IP: 177.92.142.11 (São Paulo, BR)", latency: "—" },
  { time: "14:27:33.441", level: "INFO", source: "api.gateway", message: "GET /v2/analytics/portfolio → 200 OK", latency: "210ms" },
  { time: "14:26:18.009", level: "WARN", source: "network.pol", message: "Polygon RPC latency elevated: 310ms avg (threshold: 200ms)", latency: "—" },
  { time: "14:25:02.771", level: "INFO", source: "api.gateway", message: "POST /v2/sms/send → 200 OK", latency: "188ms" },
];

const levelStyle: Record<string, { color: string; bg: string }> = {
  INFO: { color: "#60A5FA", bg: "rgba(96,165,250,0.08)" },
  WARN: { color: "#FB923C", bg: "rgba(251,146,60,0.08)" },
  ERROR: { color: "#F87171", bg: "rgba(248,113,113,0.08)" },
};

export default function LogsPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>System Logs</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Real-time structured logs from all services</p>
        </div>
        <button className="k-btn-ghost flex items-center gap-2">
          <Download size={13} />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="k-card p-4 flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-48 relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.3)" }} />
          <input className="k-input pl-8" placeholder="Filter logs..." />
        </div>
        <div className="flex items-center gap-2">
          {["All", "INFO", "WARN", "ERROR"].map((l) => (
            <button
              key={l}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: l === "All" ? "rgba(208,255,62,0.1)" : "rgba(255,255,255,0.04)",
                color: l === "All" ? "#D0FF3E" : l === "INFO" ? "#60A5FA" : l === "WARN" ? "#FB923C" : l === "ERROR" ? "#F87171" : "rgba(255,255,255,0.4)",
                border: l === "All" ? "1px solid rgba(208,255,62,0.2)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Log viewer */}
      <div
        className="k-card overflow-hidden"
        style={{ fontFamily: "JetBrains Mono, Fira Code, monospace" }}
      >
        <div className="px-4 py-3 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FB923C" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ADE80" }} />
          <span className="ml-3 text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>kriptonita-logs — live stream</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="status-dot" style={{ width: 5, height: 5 }} />
            <span className="text-[10px]" style={{ color: "#4ADE80" }}>streaming</span>
          </div>
        </div>

        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
          {logs.map((log, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-4 py-3 hover:bg-white/[0.01] transition-colors"
            >
              <span className="text-[11px] flex-shrink-0 tabular-nums" style={{ color: "rgba(255,255,255,0.2)", minWidth: 90 }}>
                {log.time}
              </span>
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                style={{
                  background: levelStyle[log.level]?.bg ?? "rgba(255,255,255,0.06)",
                  color: levelStyle[log.level]?.color ?? "rgba(255,255,255,0.5)",
                  minWidth: 42,
                  textAlign: "center",
                }}
              >
                {log.level}
              </span>
              <span className="text-[11px] flex-shrink-0" style={{ color: "#D0FF3E", minWidth: 100 }}>
                {log.source}
              </span>
              <span className="text-[11px] flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                {log.message}
              </span>
              {log.latency !== "—" && (
                <span className="text-[11px] flex-shrink-0" style={{ color: "rgba(255,255,255,0.2)" }}>
                  {log.latency}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
