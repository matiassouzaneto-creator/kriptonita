import { teamMembers } from "@/lib/data";
import { UserPlus, MoreHorizontal, Mail, Shield, Clock } from "lucide-react";

const roleColor: Record<string, string> = {
  Owner: "badge-accent",
  Admin: "badge-blue",
  Developer: "badge-gray",
  Analyst: "badge-gray",
};

const avatarGradients = [
  "linear-gradient(135deg, #D0FF3E, #84CC16)",
  "linear-gradient(135deg, #60A5FA, #3B82F6)",
  "linear-gradient(135deg, #A78BFA, #7C3AED)",
  "linear-gradient(135deg, #FB923C, #EA580C)",
];

export default function TeamPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Team</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Manage access control and permissions</p>
        </div>
        <button className="k-btn-primary flex items-center gap-2">
          <UserPlus size={14} strokeWidth={2} />
          Invite Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Members", value: "4" },
          { label: "Active Now", value: "3" },
          { label: "Pending Invites", value: "1" },
        ].map((s) => (
          <div key={s.label} className="k-card p-5">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.25)" }}>
              {s.label}
            </div>
            <div className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Members */}
      <div className="k-card overflow-hidden">
        <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Members</div>
        </div>
        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
          {teamMembers.map((m, i) => (
            <div key={i} className="px-6 py-4 flex items-center gap-4 group hover:bg-white/[0.01] transition-colors">
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: avatarGradients[i % avatarGradients.length], color: "#070707" }}
                >
                  {m.avatar}
                </div>
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                  style={{
                    background: m.status === "online" ? "#4ADE80" : "rgba(255,255,255,0.2)",
                    borderColor: "#131313",
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold" style={{ color: "#fff" }}>{m.name}</span>
                  <span className={`badge text-[10px] ${roleColor[m.role]}`}>{m.role}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Mail size={10} style={{ color: "rgba(255,255,255,0.25)" }} />
                  <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{m.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-right">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                    Permissions
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{m.permissions}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>
                    Last seen
                  </div>
                  <div className="text-xs flex items-center gap-1" style={{ color: m.status === "online" ? "#4ADE80" : "rgba(255,255,255,0.35)" }}>
                    {m.status === "online" && <div className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                    {m.lastSeen}
                  </div>
                </div>
                <button className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <MoreHorizontal size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending invite */}
      <div className="k-card p-5 flex items-center gap-4" style={{ borderColor: "rgba(251,146,60,0.1)" }}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(251,146,60,0.08)" }}>
          <Clock size={18} style={{ color: "#FB923C" }} />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold" style={{ color: "#fff" }}>Pending Invite</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
            pedro@kriptonita.io · Developer · Sent 2 days ago
          </div>
        </div>
        <div className="flex gap-2">
          <button className="k-btn-ghost text-xs px-3 py-1.5">Resend</button>
          <button className="text-xs font-medium px-3 py-1.5 rounded-lg" style={{ color: "#F87171" }}>Revoke</button>
        </div>
      </div>
    </div>
  );
}
