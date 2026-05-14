import { networkStats } from "@/lib/data";
import { Activity, Wifi, Clock, Layers, AlertTriangle, CheckCircle2 } from "lucide-react";

const uptimeBlocks = Array.from({ length: 90 }, (_, i) => ({
  day: i,
  status: i === 14 || i === 47 ? "degraded" : i === 23 ? "down" : "up",
}));

export default function MonitoringPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Monitoring</h1>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Real-time network health and infrastructure status</p>
      </div>

      {/* Overall status banner */}
      <div
        className="k-card p-5 flex items-center gap-4"
        style={{ borderColor: "rgba(74,222,128,0.15)", boxShadow: "0 0 30px rgba(74,222,128,0.04)" }}
      >
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(74,222,128,0.1)" }}>
          <CheckCircle2 size={24} style={{ color: "#4ADE80" }} strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-base font-bold" style={{ color: "#fff" }}>All Systems Operational</div>
          <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Last incident: 14 days ago · 99.97% uptime across all networks
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="status-dot" />
          <span className="text-xs font-medium" style={{ color: "#4ADE80" }}>Live</span>
        </div>
      </div>

      {/* Network grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {networkStats.map((n) => (
          <div
            key={n.name}
            className="k-card p-5"
            style={n.status === "degraded" ? { borderColor: "rgba(251,146,60,0.15)" } : {}}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: n.status === "operational" ? "rgba(74,222,128,0.08)" : "rgba(251,146,60,0.08)" }}
                >
                  <Wifi size={16} style={{ color: n.status === "operational" ? "#4ADE80" : "#FB923C" }} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#fff" }}>{n.name}</div>
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>Block #{n.block.toLocaleString()}</div>
                </div>
              </div>
              <span className={`badge text-[11px] ${n.status === "operational" ? "badge-green" : "badge-orange"}`}>
                {n.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Clock size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>Latency</span>
                </div>
                <div className="text-sm font-bold" style={{ color: "#fff" }}>{n.latency}</div>
              </div>
              <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Layers size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>Fee</span>
                </div>
                <div className="text-sm font-bold" style={{ color: "#fff" }}>{n.fee}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Uptime history */}
      <div className="k-card p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
            90-Day Uptime History
          </div>
          <div className="flex items-center gap-4 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm" style={{ background: "#4ADE80" }} />Operational</div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm" style={{ background: "#FB923C" }} />Degraded</div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm" style={{ background: "#F87171" }} />Down</div>
          </div>
        </div>
        <div className="flex gap-0.5 flex-wrap">
          {uptimeBlocks.map((b) => (
            <div
              key={b.day}
              className="w-2 h-6 rounded-sm transition-opacity hover:opacity-70 cursor-pointer"
              style={{
                background: b.status === "up" ? "#4ADE80" : b.status === "degraded" ? "#FB923C" : "#F87171",
                opacity: b.status === "up" ? 0.7 : 1,
              }}
              title={`Day ${90 - b.day} ago — ${b.status}`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          <span>90 days ago</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
