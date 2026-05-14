import { esimPlans, smsPackages } from "@/lib/data";
import { Tag, TrendingUp, Sliders, Info } from "lucide-react";

export default function PricingPage() {
  const esimMarginAvg = (esimPlans.reduce((s, p) => s + parseFloat(p.margin), 0) / esimPlans.length).toFixed(0);
  const smsMarginAvg = (smsPackages.reduce((s, p) => s + parseFloat(p.margin), 0) / smsPackages.length).toFixed(0);

  return (
    <div className="space-y-6 max-w-[1100px]">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Precificação</h1>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Configure markups, regras de preço e descontos por plano e revendedor</p>
      </div>

      {/* Markup global */}
      <div
        className="k-card p-6"
        style={{ borderColor: "rgba(208,255,62,0.12)", boxShadow: "0 0 30px rgba(208,255,62,0.04)" }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(208,255,62,0.08)" }}>
            <Sliders size={16} style={{ color: "#D0FF3E" }} />
          </div>
          <div>
            <div className="text-sm font-bold" style={{ color: "#fff" }}>Markup Global</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Aplicado a todos os produtos quando não há regra específica</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: "rgba(255,255,255,0.3)" }}>
              Markup eSIM (%)
            </label>
            <div className="flex items-center gap-3">
              <input
                className="k-input text-2xl font-bold flex-1"
                defaultValue="68"
                style={{ color: "#D0FF3E", letterSpacing: "-0.03em" }}
              />
              <span className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.3)" }}>%</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <TrendingUp size={12} style={{ color: "#4ADE80" }} />
              <span className="text-xs" style={{ color: "#4ADE80" }}>Média atual: {esimMarginAvg}% de margem</span>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: "rgba(255,255,255,0.3)" }}>
              Markup SMS (%)
            </label>
            <div className="flex items-center gap-3">
              <input
                className="k-input text-2xl font-bold flex-1"
                defaultValue="52"
                style={{ color: "#D0FF3E", letterSpacing: "-0.03em" }}
              />
              <span className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.3)" }}>%</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <TrendingUp size={12} style={{ color: "#4ADE80" }} />
              <span className="text-xs" style={{ color: "#4ADE80" }}>Média atual: {smsMarginAvg}% de margem</span>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-4 flex justify-end gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <button className="k-btn-ghost text-xs px-4 py-2">Cancelar</button>
          <button className="k-btn-primary text-xs px-4 py-2">Salvar markup</button>
        </div>
      </div>

      {/* Regras por plano de revendedor */}
      <div className="k-card p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(167,139,250,0.1)" }}>
            <Tag size={16} style={{ color: "#A78BFA" }} />
          </div>
          <div>
            <div className="text-sm font-bold" style={{ color: "#fff" }}>Desconto por Plano de Revendedor</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Revendedores recebem desconto sobre o preço público</div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { plan: "Enterprise", discount: "25%", color: "#D0FF3E", badge: "badge-accent", min: "R$ 5.000/mês" },
            { plan: "Pro", discount: "15%", color: "#60A5FA", badge: "badge-blue", min: "R$ 1.000/mês" },
            { plan: "Starter", discount: "5%", color: "rgba(255,255,255,0.5)", badge: "badge-gray", min: "Sem mínimo" },
          ].map((r) => (
            <div
              key={r.plan}
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span className={`badge text-xs ${r.badge}`} style={{ minWidth: 80, justifyContent: "center" }}>{r.plan}</span>
              <div className="flex-1">
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Volume mínimo: {r.min}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Desconto</div>
                  <div className="text-lg font-bold" style={{ color: r.color, letterSpacing: "-0.03em" }}>{r.discount}</div>
                </div>
                <input
                  className="k-input w-20 text-center font-bold"
                  defaultValue={r.discount}
                  style={{ color: r.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Info size={12} />
            <span>Descontos aplicados sobre o preço público final</span>
          </div>
          <button className="k-btn-primary text-xs px-4 py-2">Salvar regras</button>
        </div>
      </div>

      {/* Simulador */}
      <div className="k-card p-6">
        <div className="text-sm font-bold mb-4" style={{ color: "#fff" }}>Simulador de Preço</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-medium mb-2 block" style={{ color: "rgba(255,255,255,0.4)" }}>Custo do provedor</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>$</span>
              <input className="k-input pl-7" defaultValue="4.90" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block" style={{ color: "rgba(255,255,255,0.4)" }}>Markup (%)</label>
            <input className="k-input" defaultValue="68" />
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block" style={{ color: "rgba(255,255,255,0.4)" }}>Preço final calculado</label>
            <div
              className="px-3 py-2 rounded-lg text-sm font-bold"
              style={{ background: "rgba(208,255,62,0.08)", border: "1px solid rgba(208,255,62,0.15)", color: "#D0FF3E" }}
            >
              $8.23 → vender por $14.90
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
