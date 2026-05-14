import { recentOrders } from "@/lib/data";
import { Search, Filter, Download, Sim, MessageSquare, ExternalLink } from "lucide-react";

const allOrders = [
  ...recentOrders,
  { id: "#48284", customer: "TechStore SP", product: "eSIM Brasil 5GB/30d", qty: 50, total: "$445.00", status: "completed", channel: "API", time: "5h atrás" },
  { id: "#48283", customer: "App Fintech", product: "SMS OTP Pack 5000", qty: 10, total: "$590.00", status: "completed", channel: "API", time: "6h atrás" },
  { id: "#48282", customer: "Viagens Premium", product: "eSIM Global Ilimitado 7d", qty: 4, total: "$119.60", status: "completed", channel: "Dashboard", time: "7h atrás" },
  { id: "#48281", customer: "Loja Digital BR", product: "SMS Bulk 50k", qty: 2, total: "$780.00", status: "processing", channel: "API", time: "8h atrás" },
];

const statusBadge: Record<string, string> = {
  completed: "badge-green",
  processing: "badge-blue",
  failed: "badge-red",
};

const statusLabel: Record<string, string> = {
  completed: "concluído",
  processing: "processando",
  failed: "falhou",
};

export default function OrdersPage() {
  const total = allOrders.reduce((s, o) => s + parseFloat(o.total.replace("$", "").replace(",", "")), 0);
  const completed = allOrders.filter(o => o.status === "completed").length;

  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Pedidos</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Histórico completo de pedidos de todos os revendedores</p>
        </div>
        <button className="k-btn-ghost flex items-center gap-2">
          <Download size={13} />
          Exportar CSV
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total de Pedidos", value: allOrders.length.toString(), sub: "hoje" },
          { label: "Receita", value: `$${total.toFixed(0)}`, sub: "hoje" },
          { label: "Concluídos", value: `${completed}/${allOrders.length}`, sub: `${Math.round(completed / allOrders.length * 100)}% taxa` },
          { label: "Via API", value: allOrders.filter(o => o.channel === "API").length.toString(), sub: "pedidos automáticos" },
        ].map((s) => (
          <div key={s.label} className="k-card p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
            <div className="text-xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{s.value}</div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="k-card p-4 flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-48 relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.3)" }} />
          <input className="k-input pl-8" placeholder="Buscar por ID, cliente, produto..." />
        </div>
        <div className="flex items-center gap-2">
          {["Todos", "eSIM", "SMS", "Concluídos", "Processando"].map((f) => (
            <button
              key={f}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                background: f === "Todos" ? "rgba(208,255,62,0.1)" : "rgba(255,255,255,0.04)",
                color: f === "Todos" ? "#D0FF3E" : "rgba(255,255,255,0.4)",
                border: f === "Todos" ? "1px solid rgba(208,255,62,0.2)" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="k-btn-ghost flex items-center gap-2 text-xs"><Filter size={12} />Filtros</button>
      </div>

      {/* Table */}
      <div className="k-card overflow-hidden">
        <table className="k-table w-full">
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Produto</th>
              <th>Cliente</th>
              <th>Qtd</th>
              <th>Canal</th>
              <th>Total</th>
              <th>Status</th>
              <th>Hora</th>
              <th style={{ width: 40 }} />
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, i) => {
              const isESIM = order.product.includes("eSIM");
              return (
                <tr key={i}>
                  <td>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: isESIM ? "rgba(96,165,250,0.1)" : "rgba(208,255,62,0.08)" }}
                      >
                        {isESIM
                          ? <Sim size={12} style={{ color: "#60A5FA" }} />
                          : <MessageSquare size={12} style={{ color: "#D0FF3E" }} />
                        }
                      </div>
                      <span className="text-xs font-bold" style={{ color: "#fff" }}>{order.id}</span>
                    </div>
                  </td>
                  <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{order.product}</span></td>
                  <td><span className="text-xs font-medium" style={{ color: "#fff" }}>{order.customer}</span></td>
                  <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>× {order.qty}</span></td>
                  <td><span className="badge badge-gray text-[11px]">{order.channel}</span></td>
                  <td><span className="text-xs font-bold" style={{ color: "#fff" }}>{order.total}</span></td>
                  <td>
                    <span className={`badge ${statusBadge[order.status]}`}>
                      <span className="w-1 h-1 rounded-full inline-block mr-1" style={{
                        background: order.status === "completed" ? "#4ADE80" : order.status === "processing" ? "#60A5FA" : "#F87171"
                      }} />
                      {statusLabel[order.status]}
                    </span>
                  </td>
                  <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{order.time}</span></td>
                  <td>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <ExternalLink size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-6 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Mostrando {allOrders.length} de 3.847 pedidos</span>
          <div className="flex items-center gap-2">
            <button className="k-btn-ghost text-xs px-3 py-1.5">Anterior</button>
            <button className="k-btn-ghost text-xs px-3 py-1.5">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
