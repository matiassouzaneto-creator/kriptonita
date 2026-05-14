"use client";
import { TrendingUp, Sim, MessageSquare, Users } from "lucide-react";

const stats = [
  {
    label: "Receita Hoje",
    value: "R$ 8.294",
    sub: "+23.4% vs ontem",
    subColor: "#4ADE80",
    icon: TrendingUp,
    iconBg: "rgba(74,222,128,0.1)",
    iconColor: "#4ADE80",
    accent: false,
  },
  {
    label: "eSIMs Ativos",
    value: "1.284",
    sub: "em 38 países",
    subColor: "rgba(255,255,255,0.35)",
    icon: Sim,
    iconBg: "rgba(96,165,250,0.1)",
    iconColor: "#60A5FA",
    accent: false,
  },
  {
    label: "SMS Enviados Hoje",
    value: "84.392",
    sub: "+12.1% vs ontem",
    subColor: "#D0FF3E",
    icon: MessageSquare,
    iconBg: "rgba(208,255,62,0.08)",
    iconColor: "#D0FF3E",
    accent: true,
  },
  {
    label: "Revendedores",
    value: "47",
    sub: "3 novos este mês",
    subColor: "rgba(255,255,255,0.35)",
    icon: Users,
    iconBg: "rgba(167,139,250,0.1)",
    iconColor: "#A78BFA",
    accent: false,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="k-card p-5"
          style={s.accent ? { borderColor: "rgba(208,255,62,0.12)", boxShadow: "0 0 30px rgba(208,255,62,0.05)" } : {}}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.iconBg }}>
              <s.icon size={16} style={{ color: s.iconColor }} strokeWidth={1.8} />
            </div>
            {s.accent && <div className="badge badge-accent text-[10px]">DESTAQUE</div>}
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.3)" }}>
            {s.label}
          </div>
          <div className="text-2xl font-bold leading-none mb-1.5" style={{ color: "#fff", letterSpacing: "-0.03em" }}>
            {s.value}
          </div>
          <div className="text-xs font-medium" style={{ color: s.subColor }}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
