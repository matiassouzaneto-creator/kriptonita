"use client";
import { recentOrders } from "@/lib/data";
import { Smartphone, MessageSquare, ExternalLink } from "lucide-react";

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

export default function RecentOrders() {
  return (
    <div className="k-card overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
          Pedidos Recentes
        </div>
        <button className="k-btn-ghost text-xs px-3 py-1.5">Ver todos</button>
      </div>

      <table className="k-table w-full">
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Produto</th>
            <th>Cliente</th>
            <th>Canal</th>
            <th>Total</th>
            <th>Status</th>
            <th style={{ width: 40 }} />
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => {
            const isESIM = order.product.includes("eSIM");
            return (
              <tr key={order.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: isESIM ? "rgba(96,165,250,0.1)" : "rgba(208,255,62,0.08)" }}
                    >
                      {isESIM
                        ? <Smartphone size={14} style={{ color: "#60A5FA" }} />
                        : <MessageSquare size={14} style={{ color: "#D0FF3E" }} />
                      }
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: "#fff" }}>{order.id}</div>
                      <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>{order.time}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-xs font-medium" style={{ color: "#fff" }}>{order.product}</div>
                  <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>Qtd: {order.qty}</div>
                </td>
                <td>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{order.customer}</div>
                </td>
                <td>
                  <span className="badge badge-gray text-[11px]">{order.channel}</span>
                </td>
                <td>
                  <div className="text-xs font-semibold" style={{ color: "#fff" }}>{order.total}</div>
                </td>
                <td>
                  <span className={`badge ${statusBadge[order.status]}`}>
                    <span className="w-1 h-1 rounded-full inline-block mr-1" style={{
                      background: order.status === "completed" ? "#4ADE80" : order.status === "processing" ? "#60A5FA" : "#F87171"
                    }} />
                    {statusLabel[order.status]}
                  </span>
                </td>
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
    </div>
  );
}
