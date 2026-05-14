"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { productMix } from "@/lib/data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="glass-sm px-3 py-2 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="text-xs font-semibold" style={{ color: "#fff" }}>{d.name}</div>
      <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>R$ {d.revenue.toLocaleString("pt-BR")}</div>
    </div>
  );
};

export default function ProductMix() {
  const total = productMix.reduce((s, p) => s + p.revenue, 0);
  return (
    <div className="k-card p-6 h-full flex flex-col">
      <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
        Mix de Produtos
      </div>

      <div className="relative" style={{ height: 150 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={productMix} cx="50%" cy="50%" innerRadius={48} outerRadius={68} strokeWidth={0} paddingAngle={2} dataKey="revenue">
              {productMix.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Total 30d</div>
          <div className="text-base font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>
            R$ {(total / 1000).toFixed(0)}k
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5 flex-1">
        {productMix.map((item) => (
          <div key={item.code} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold truncate" style={{ color: "#fff" }}>{item.name}</span>
                <span className="text-xs font-semibold ml-2" style={{ color: "#fff" }}>{item.percent}%</span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  R$ {item.revenue.toLocaleString("pt-BR")}
                </span>
                <div className="flex items-center gap-0.5">
                  {item.change >= 0
                    ? <ArrowUpRight size={10} style={{ color: "#4ADE80" }} />
                    : <ArrowDownRight size={10} style={{ color: "#F87171" }} />
                  }
                  <span className="text-[10px] font-medium" style={{ color: item.change >= 0 ? "#4ADE80" : "#F87171" }}>
                    {Math.abs(item.change)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
