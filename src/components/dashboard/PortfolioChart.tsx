"use client";
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { revenueChartData } from "@/lib/data";
import { TrendingUp } from "lucide-react";

const ranges = ["7D", "14D", "30D", "90D"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-sm px-3 py-2.5 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="text-[11px] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</div>
      <div className="text-sm font-semibold" style={{ color: "#fff" }}>
        R$ {payload[0].value.toLocaleString("pt-BR")}
      </div>
      <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
        {payload[1]?.value} pedidos
      </div>
    </div>
  );
};

export default function RevenueChart() {
  const [range, setRange] = useState("30D");
  const data = revenueChartData;
  const first = data[0].revenue;
  const last = data[data.length - 1].revenue;
  const change = last - first;
  const changePct = ((change / first) * 100).toFixed(1);
  const isUp = change >= 0;
  const totalRevenue = data.reduce((s, d) => s + d.revenue, 0);

  return (
    <div className="k-card p-6 h-full">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            Receita — 30 dias
          </div>
          <div className="text-3xl font-bold" style={{ color: "#fff", letterSpacing: "-0.04em" }}>
            R$ {(totalRevenue / 1000).toFixed(1)}k
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <TrendingUp size={13} style={{ color: isUp ? "#4ADE80" : "#F87171" }} />
            <span className="text-sm font-semibold" style={{ color: isUp ? "#4ADE80" : "#F87171" }}>
              {isUp ? "+" : ""}{changePct}%
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>vs período anterior</span>
          </div>
        </div>
        <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: range === r ? "#D0FF3E" : "transparent",
                color: range === r ? "#070707" : "rgba(255,255,255,0.4)",
                boxShadow: range === r ? "0 0 12px rgba(208,255,62,0.3)" : "none",
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D0FF3E" stopOpacity={0.25} />
              <stop offset="60%" stopColor="#D0FF3E" stopOpacity={0.04} />
              <stop offset="100%" stopColor="#D0FF3E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="rgba(255,255,255,0.04)" />
          <XAxis dataKey="date" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.25)" }} tickLine={false} axisLine={false} interval={4} />
          <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.25)" }} tickLine={false} axisLine={false} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} width={48} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.08)", strokeWidth: 1 }} />
          <Area type="monotone" dataKey="revenue" stroke="#D0FF3E" strokeWidth={2} fill="url(#revGrad)" dot={false} activeDot={{ r: 4, fill: "#D0FF3E", stroke: "#070707", strokeWidth: 2 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
