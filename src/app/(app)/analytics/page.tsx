"use client";
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { revenueChartData, hourlyChart, productMix } from "@/lib/data";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-sm px-3 py-2 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="text-[11px] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</div>
      <div className="text-sm font-semibold" style={{ color: "#fff" }}>
        {payload[0].value > 1000 ? `R$ ${payload[0].value.toLocaleString("pt-BR")}` : payload[0].value}
      </div>
    </div>
  );
};

const metrics = [
  { label: "Receita Total (30d)", value: "R$ 312.4k", change: "+23.4%", up: true },
  { label: "Ticket Médio", value: "R$ 81,20", change: "+8.1%", up: true },
  { label: "eSIMs Ativados", value: "3.841", change: "+14.2%", up: true },
  { label: "SMS Entregues", value: "2.1M", change: "+31.7%", up: true },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Analytics</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Performance de vendas, produtos e canais</p>
        </div>
        <div className="flex items-center gap-2">
          {["7D", "30D", "90D", "1A"].map((r) => (
            <button key={r} className="k-btn-ghost text-xs px-3 py-1.5"
              style={r === "30D" ? { background: "rgba(208,255,62,0.1)", color: "#D0FF3E", borderColor: "rgba(208,255,62,0.2)" } : {}}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="k-card p-5">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>{m.label}</div>
            <div className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{m.value}</div>
            <div className="text-xs mt-1.5 font-medium" style={{ color: m.up ? "#4ADE80" : "#F87171" }}>{m.change}</div>
          </div>
        ))}
      </div>

      <div className="k-card p-6">
        <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
          Receita Diária — 30 Dias
        </div>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={revenueChartData}>
            <defs>
              <linearGradient id="revGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D0FF3E" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#D0FF3E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0" vertical={false} stroke="rgba(255,255,255,0.04)" />
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.25)" }} tickLine={false} axisLine={false} interval={4} />
            <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.25)" }} tickLine={false} axisLine={false} tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} width={48} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.06)", strokeWidth: 1 }} />
            <Area type="monotone" dataKey="revenue" stroke="#D0FF3E" strokeWidth={2} fill="url(#revGrad2)" dot={false} activeDot={{ r: 4, fill: "#D0FF3E", stroke: "#070707", strokeWidth: 2 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="k-card p-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Pedidos por Hora (Hoje)
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={hourlyChart} barSize={8}>
              <CartesianGrid strokeDasharray="0" vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="hour" tick={{ fontSize: 10, fill: "rgba(255,255,255,0.25)" }} tickLine={false} axisLine={false} interval={3} />
              <YAxis tick={{ fontSize: 10, fill: "rgba(255,255,255,0.25)" }} tickLine={false} axisLine={false} width={36} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
              <Bar dataKey="orders" fill="#D0FF3E" opacity={0.8} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="k-card p-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            Receita por Produto
          </div>
          <div className="space-y-3">
            {productMix.map((p) => (
              <div key={p.code} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium" style={{ color: "#fff" }}>{p.name}</span>
                    <span className="text-xs font-bold" style={{ color: "#fff" }}>R$ {p.revenue.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full" style={{ width: `${p.percent}%`, background: p.color }} />
                  </div>
                </div>
                <span className="text-[11px] font-semibold flex-shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {p.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
