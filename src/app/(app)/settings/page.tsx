"use client";
import { Settings, Bell, Globe, Moon, Shield, Webhook, Zap } from "lucide-react";

const sections = [
  {
    icon: Globe,
    title: "General",
    desc: "Account name, timezone, language preferences",
    fields: [
      { label: "Platform Name", value: "KRIPTONITA", type: "text" },
      { label: "Timezone", value: "America/Sao_Paulo (GMT-3)", type: "select" },
      { label: "Language", value: "English (US)", type: "select" },
    ],
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Configure alerts and notification channels",
    toggles: [
      { label: "Large transactions (>$10K)", enabled: true },
      { label: "Failed transactions", enabled: true },
      { label: "Security events", enabled: true },
      { label: "Weekly portfolio report", enabled: false },
      { label: "API rate limit warnings", enabled: true },
    ],
  },
  {
    icon: Webhook,
    title: "Webhooks",
    desc: "Receive real-time event notifications",
    fields: [
      { label: "Endpoint URL", value: "https://api.yourapp.com/kriptonita/webhook", type: "text" },
      { label: "Secret", value: "whsec_•••••••••••••••••", type: "password" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-[800px]">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Settings</h1>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Manage your platform configuration</p>
      </div>

      {sections.map((s) => (
        <div key={s.title} className="k-card p-6">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(208,255,62,0.08)" }}>
              <s.icon size={16} style={{ color: "#D0FF3E" }} />
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: "#fff" }}>{s.title}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{s.desc}</div>
            </div>
          </div>

          <div className="space-y-4">
            {"fields" in s && s.fields?.map((f) => (
              <div key={f.label} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="text-xs font-medium flex-shrink-0" style={{ color: "rgba(255,255,255,0.5)", minWidth: 160 }}>
                  {f.label}
                </label>
                <input className="k-input flex-1" defaultValue={f.value} type={f.type === "password" ? "password" : "text"} />
              </div>
            ))}

            {"toggles" in s && (
              <div className="space-y-3">
                {s.toggles?.map((t) => (
                  <div key={t.label} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{t.label}</span>
                    <button
                      className="w-10 h-5 rounded-full transition-all relative"
                      style={{
                        background: t.enabled ? "#D0FF3E" : "rgba(255,255,255,0.1)",
                        boxShadow: t.enabled ? "0 0 10px rgba(208,255,62,0.3)" : "none",
                      }}
                    >
                      <div
                        className="w-3.5 h-3.5 rounded-full absolute top-0.5 transition-all"
                        style={{
                          background: t.enabled ? "#070707" : "rgba(255,255,255,0.4)",
                          left: t.enabled ? "calc(100% - 18px)" : "3px",
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-5 pt-4 flex justify-end gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <button className="k-btn-ghost text-xs px-4 py-2">Cancel</button>
            <button className="k-btn-primary text-xs px-4 py-2">Save changes</button>
          </div>
        </div>
      ))}

      {/* Danger zone */}
      <div className="k-card p-6" style={{ borderColor: "rgba(248,113,113,0.1)" }}>
        <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#F87171" }}>
          Danger Zone
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium" style={{ color: "#fff" }}>Delete account</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Permanently delete your account and all associated data
            </div>
          </div>
          <button
            className="px-4 py-2 rounded-lg text-xs font-semibold transition-all"
            style={{ background: "rgba(248,113,113,0.08)", color: "#F87171", border: "1px solid rgba(248,113,113,0.15)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(248,113,113,0.15)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(248,113,113,0.08)"; }}
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
