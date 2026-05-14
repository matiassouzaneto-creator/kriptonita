import { Shield, ShieldCheck, Smartphone, Globe, Clock, AlertTriangle, Lock, Key, Eye, CheckCircle2 } from "lucide-react";

const sessions = [
  { device: 'MacBook Pro 16"', location: "São Paulo, BR", ip: "177.92.142.11", browser: "Chrome 124", time: "Now", current: true },
  { device: "iPhone 15 Pro", location: "São Paulo, BR", ip: "177.92.142.11", browser: "Safari 17", time: "2h ago", current: false },
  { device: "Windows PC", location: "Campinas, BR", ip: "189.40.28.77", browser: "Edge 124", time: "Yesterday", current: false },
];

const events = [
  { event: "Login successful", detail: "MacBook Pro — Chrome", time: "2m ago", level: "success" },
  { event: "2FA verified", detail: "TOTP code accepted", time: "2m ago", level: "success" },
  { event: "API key created", detail: `Key "client-api-v2" generated`, time: "3h ago", level: "info" },
  { event: "IP whitelist updated", detail: "Added 177.92.0.0/16", time: "1d ago", level: "info" },
  { event: "Failed login attempt", detail: "Unknown IP: 185.20.10.49", time: "2d ago", level: "warning" },
];

const levelColor = { success: "#4ADE80", info: "#60A5FA", warning: "#FB923C" };

export default function SecurityPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Security</h1>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Monitor access, sessions, and threat activity</p>
      </div>

      {/* Score hero */}
      <div
        className="k-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        style={{ borderColor: "rgba(208,255,62,0.12)", boxShadow: "0 0 40px rgba(208,255,62,0.04)" }}
      >
        <div className="flex items-center gap-5">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(208,255,62,0.08)", border: "1px solid rgba(208,255,62,0.15)" }}
          >
            <ShieldCheck size={36} style={{ color: "#D0FF3E" }} strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
              Security Score
            </div>
            <div className="text-5xl font-black" style={{ color: "#D0FF3E", letterSpacing: "-0.05em" }}>98</div>
            <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>out of 100 — Excellent</div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Smartphone, label: "2FA Enabled", status: "Active", ok: true },
            { icon: Globe, label: "IP Whitelist", status: "3 ranges", ok: true },
            { icon: Eye, label: "Anomaly Detection", status: "Monitoring", ok: true },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <item.icon size={16} style={{ color: item.ok ? "#4ADE80" : "#FB923C" }} />
              <div>
                <div className="text-xs font-medium" style={{ color: "#fff" }}>{item.label}</div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{item.status}</div>
              </div>
              <CheckCircle2 size={14} style={{ color: "#4ADE80", marginLeft: "auto" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active sessions */}
        <div className="k-card overflow-hidden">
          <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Active Sessions</div>
            <button className="text-xs font-medium" style={{ color: "#F87171" }}>Revoke all others</button>
          </div>
          <div className="divide-y" style={{ '--tw-divide-opacity': 1, borderColor: "rgba(255,255,255,0.04)" } as any}>
            {sessions.map((s, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <Globe size={15} style={{ color: "rgba(255,255,255,0.4)" }} />
                  </div>
                  <div>
                    <div className="text-sm font-medium flex items-center gap-2" style={{ color: "#fff" }}>
                      {s.device}
                      {s.current && <span className="badge badge-accent text-[10px]">Current</span>}
                    </div>
                    <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {s.browser} · {s.location} · {s.ip}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{s.time}</div>
                  {!s.current && (
                    <button className="text-[11px] mt-0.5" style={{ color: "#F87171" }}>Revoke</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security log */}
        <div className="k-card overflow-hidden">
          <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Security Events</div>
          </div>
          <div className="p-5 space-y-3">
            {events.map((e, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: levelColor[e.level as keyof typeof levelColor] }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: "#fff" }}>{e.event}</span>
                    <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>{e.time}</span>
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{e.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
