import { resellers } from "@/lib/data";
import { UserPlus, MoreHorizontal, TrendingUp, ShoppingCart, Key, Mail } from "lucide-react";

const planColor: Record<string, string> = {
  Enterprise: "badge-accent",
  Pro: "badge-blue",
  Starter: "badge-gray",
};

const avatarColors = [
  "linear-gradient(135deg, #60A5FA, #3B82F6)",
  "linear-gradient(135deg, #D0FF3E, #84CC16)",
  "linear-gradient(135deg, #A78BFA, #7C3AED)",
  "linear-gradient(135deg, #4ADE80, #16A34A)",
  "linear-gradient(135deg, #FB923C, #EA580C)",
  "linear-gradient(135deg, #F87171, #DC2626)",
];

export default function ResellersPage() {
  const totalRevenue = resellers.reduce((s, r) => {
    const v = parseFloat(r.revenue.replace("$", "").replace(",", ""));
    return s + v;
  }, 0);

  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Revendedores</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Clientes que integram via API e revendem seus produtos</p>
        </div>
        <button className="k-btn-primary flex items-center gap-2">
          <UserPlus size={14} strokeWidth={2} />
          Convidar Revendedor
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Revendedores", value: "47", sub: "+3 este mês" },
          { label: "Receita Gerada", value: `$${totalRevenue.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}`, sub: "30 dias" },
          { label: "Enterprise", value: "8", sub: "clientes VIP" },
          { label: "Ativos via API", value: "38", sub: "integrados" },
        ].map((s) => (
          <div key={s.label} className="k-card p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
            <div className="text-xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{s.value}</div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Resellers table */}
      <div className="k-card overflow-hidden">
        <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
            Todos os Revendedores
          </div>
        </div>
        <table className="k-table w-full">
          <thead>
            <tr>
              <th>Revendedor</th>
              <th>Plano</th>
              <th>Receita (30d)</th>
              <th>Pedidos</th>
              <th>Status</th>
              <th>Desde</th>
              <th style={{ width: 80 }} />
            </tr>
          </thead>
          <tbody>
            {resellers.map((r, i) => (
              <tr key={i}>
                <td>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: avatarColors[i % avatarColors.length], color: "#070707" }}
                    >
                      {r.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "#fff" }}>{r.name}</div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Mail size={10} style={{ color: "rgba(255,255,255,0.25)" }} />
                        <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{r.email}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`badge text-[10px] ${planColor[r.plan]}`}>{r.plan}</span>
                </td>
                <td>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={12} style={{ color: "#4ADE80" }} />
                    <span className="text-xs font-bold" style={{ color: "#fff" }}>{r.revenue}</span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-1.5">
                    <ShoppingCart size={12} style={{ color: "rgba(255,255,255,0.35)" }} />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{r.orders}</span>
                  </div>
                </td>
                <td>
                  <span className={`badge text-[11px] ${r.status === "active" ? "badge-green" : "badge-orange"}`}>
                    <span className="w-1 h-1 rounded-full inline-block mr-1" style={{
                      background: r.status === "active" ? "#4ADE80" : "#FB923C"
                    }} />
                    {r.status === "active" ? "ativo" : "suspenso"}
                  </span>
                </td>
                <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{r.joined}</span></td>
                <td>
                  <div className="flex items-center gap-1.5">
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(208,255,62,0.08)" }} title="Ver API Keys">
                      <Key size={11} style={{ color: "#D0FF3E" }} />
                    </button>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <MoreHorizontal size={11} style={{ color: "rgba(255,255,255,0.4)" }} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
