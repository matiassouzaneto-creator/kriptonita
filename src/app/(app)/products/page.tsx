"use client";
import { esimPlans, smsPackages } from "@/lib/data";
import { Plus, Smartphone, MessageSquare, Edit2, ToggleRight, TrendingUp } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="space-y-8 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Produtos</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Catálogo de eSIMs e pacotes de SMS para revenda</p>
        </div>
        <button className="k-btn-primary flex items-center gap-2">
          <Plus size={14} strokeWidth={2.5} />
          Adicionar Produto
        </button>
      </div>

      {/* eSIM section */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(96,165,250,0.1)" }}>
            <Smartphone size={16} style={{ color: "#60A5FA" }} />
          </div>
          <div>
            <div className="text-base font-bold" style={{ color: "#fff" }}>eSIM Data Plans</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{esimPlans.length} planos ativos · Airalo + GlobaleSIM</div>
          </div>
        </div>

        <div className="k-card overflow-hidden">
          <table className="k-table w-full">
            <thead>
              <tr>
                <th>Região / Plano</th>
                <th>Dados</th>
                <th>Validade</th>
                <th>Custo</th>
                <th>Preço venda</th>
                <th>Margem</th>
                <th>Vendidos</th>
                <th>Provedor</th>
                <th>Status</th>
                <th style={{ width: 60 }} />
              </tr>
            </thead>
            <tbody>
              {esimPlans.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="text-base">{p.flag}</span>
                      <span className="text-xs font-semibold" style={{ color: "#fff" }}>{p.region}</span>
                    </div>
                  </td>
                  <td><span className="text-xs font-bold" style={{ color: "#D0FF3E" }}>{p.data}</span></td>
                  <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{p.validity}</span></td>
                  <td><span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{p.cost}</span></td>
                  <td><span className="text-xs font-bold" style={{ color: "#fff" }}>{p.price}</span></td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1 rounded-full w-12 overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div className="h-full rounded-full" style={{ width: p.margin, background: "#D0FF3E" }} />
                      </div>
                      <span className="text-xs font-semibold" style={{ color: "#D0FF3E" }}>{p.margin}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={11} style={{ color: "#4ADE80" }} />
                      <span className="text-xs font-semibold" style={{ color: "#fff" }}>{p.sold.toLocaleString("pt-BR")}</span>
                    </div>
                  </td>
                  <td><span className="badge badge-gray text-[11px]">{p.provider}</span></td>
                  <td>
                    <span className={`badge text-[11px] ${p.status === "active" ? "badge-green" : "badge-gray"}`}>
                      {p.status === "active" ? "ativo" : "rascunho"}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                        <Edit2 size={11} style={{ color: "rgba(255,255,255,0.4)" }} />
                      </button>
                      <button className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                        <ToggleRight size={11} style={{ color: p.status === "active" ? "#D0FF3E" : "rgba(255,255,255,0.4)" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SMS section */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(208,255,62,0.08)" }}>
            <MessageSquare size={16} style={{ color: "#D0FF3E" }} />
          </div>
          <div>
            <div className="text-base font-bold" style={{ color: "#fff" }}>SMS Shortcode Packages</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{smsPackages.length} pacotes · SpamLand + Twilio</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {smsPackages.map((pkg) => (
            <div key={pkg.id} className="k-card p-5 group">
              <div className="flex items-start justify-between mb-3">
                <span className={`badge text-[10px] ${pkg.type === "OTP" ? "badge-blue" : pkg.type === "Marketing" ? "badge-accent" : "badge-gray"}`}>
                  {pkg.type}
                </span>
                <span className={`badge text-[10px] ${pkg.status === "active" ? "badge-green" : "badge-gray"}`}>
                  {pkg.status === "active" ? "ativo" : "off"}
                </span>
              </div>
              <div className="text-base font-bold mb-0.5" style={{ color: "#fff", letterSpacing: "-0.02em" }}>{pkg.name}</div>
              <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>{pkg.messages} mensagens</div>
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>Preço</div>
                  <div className="text-xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{pkg.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>Margem</div>
                  <div className="text-sm font-bold" style={{ color: "#D0FF3E" }}>{pkg.margin}</div>
                </div>
              </div>
              <div className="pt-3 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {pkg.sold} vendas
                </div>
                <button className="k-btn-ghost text-[11px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Editar
                </button>
              </div>
            </div>
          ))}

          {/* Add package */}
          <div
            className="rounded-2xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all"
            style={{ border: "1.5px dashed rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)", minHeight: 180 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(208,255,62,0.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <Plus size={20} style={{ color: "rgba(208,255,62,0.5)" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Novo pacote SMS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
