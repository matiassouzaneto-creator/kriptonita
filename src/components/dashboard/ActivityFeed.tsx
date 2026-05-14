"use client";
import { activityFeed } from "@/lib/data";
import { Info, CheckCircle2, AlertTriangle } from "lucide-react";

const levelConfig = {
  info: { icon: Info, color: "#60A5FA", bg: "rgba(96,165,250,0.08)" },
  success: { icon: CheckCircle2, color: "#4ADE80", bg: "rgba(74,222,128,0.08)" },
  warning: { icon: AlertTriangle, color: "#FB923C", bg: "rgba(251,146,60,0.08)" },
};

export default function ActivityFeed() {
  return (
    <div className="k-card p-5 h-full">
      <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
        Atividade ao Vivo
      </div>
      <div className="space-y-3">
        {activityFeed.map((item, i) => {
          const cfg = levelConfig[item.level as keyof typeof levelConfig];
          const Icon = cfg.icon;
          return (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: cfg.bg }}>
                <Icon size={13} style={{ color: cfg.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold leading-snug" style={{ color: "#fff" }}>{item.event}</div>
                <div className="text-[11px] mt-0.5 truncate" style={{ color: "rgba(255,255,255,0.35)" }}>{item.detail}</div>
                <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.2)" }}>{item.time}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-4 flex items-center gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="status-dot" style={{ width: 5, height: 5 }} />
        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>Ao vivo · Atualiza em tempo real</span>
      </div>
    </div>
  );
}
