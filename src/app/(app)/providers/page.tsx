import { providers } from "@/lib/data";
import { Plug2, Plus, RefreshCw, ExternalLink, CheckCircle2, AlertTriangle, Sim, MessageSquare, TrendingUp } from "lucide-react";

const providerDetails = [
  {
    name: "Airalo",
    type: "eSIM",
    desc: "Maior marketplace global de eSIM. Cobre 200+ países com planos de dados locais e regionais.",
    plans: 184,
    countries: 200,
    margin: "68%",
    status: "connected",
    color: "#60A5FA",
    icon: Sim,
    features: ["Ativação instantânea", "API REST v2", "Webhook de status", "Multi-IMSI"],
  },
  {
    name: "GlobaleSIM",
    type: "eSIM",
    desc: "Especializado em planos corporativos e de alto volume. Melhor custo por MB no segmento enterprise.",
    plans: 96,
    countries: 150,
    margin: "71%",
    status: "connected",
    color: "#A78BFA",
    icon: Sim,
    features: ["Planos corporativos", "API GraphQL", "SLA 99.9%", "Suporte 24/7"],
  },
  {
    name: "SpamLand",
    type: "SMS",
    desc: "Provedor de SMS com foco em OTP e mensagens transacionais. Alta taxa de entrega e latência baixa.",
    plans: 12,
    countries: 180,
    margin: "52%",
    status: "connected",
    color: "#D0FF3E",
    icon: MessageSquare,
    features: ["OTP otimizado", "Shortcodes", "DLR em tempo real", "Sender ID custom"],
  },
  {
    name: "Twilio",
    type: "SMS",
    desc: "Plataforma líder em comunicação em nuvem. Cobertura global com suporte a WhatsApp e Voice.",
    plans: 8,
    countries: 180,
    margin: "44%",
    status: "degraded",
    color: "#FB923C",
    icon: MessageSquare,
    features: ["Multi-canal", "WhatsApp API", "Verificação A2P", "Studio flow"],
  },
];

export default function ProvidersPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>Provedores</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            Fornecedores conectados de eSIM e SMS — compra no atacado, venda no varejo
          </p>
        </div>
        <button className="k-btn-primary flex items-center gap-2">
          <Plus size={14} strokeWidth={2.5} />
          Conectar Provedor
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Provedores Ativos", value: "3/4", sub: "1 degradado" },
          { label: "Planos Disponíveis", value: "300", sub: "eSIM + SMS" },
          { label: "Países Cobertos", value: "200+", sub: "cobertura global" },
          { label: "Margem Média", value: "59%", sub: "sobre custo" },
        ].map((s) => (
          <div key={s.label} className="k-card p-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
            <div className="text-xl font-bold" style={{ color: "#fff", letterSpacing: "-0.03em" }}>{s.value}</div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Provider cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {providerDetails.map((p) => (
          <div
            key={p.name}
            className="k-card p-6"
            style={p.status === "degraded" ? { borderColor: "rgba(251,146,60,0.15)" } : {}}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `${p.color}14`, border: `1px solid ${p.color}20` }}
                >
                  <p.icon size={20} style={{ color: p.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold" style={{ color: "#fff" }}>{p.name}</span>
                    <span className={`badge text-[10px] ${p.type === "eSIM" ? "badge-blue" : "badge-accent"}`}>{p.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {p.status === "connected"
                      ? <CheckCircle2 size={11} style={{ color: "#4ADE80" }} />
                      : <AlertTriangle size={11} style={{ color: "#FB923C" }} />
                    }
                    <span className="text-xs" style={{ color: p.status === "connected" ? "#4ADE80" : "#FB923C" }}>
                      {p.status === "connected" ? "Conectado" : "Degradado"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-all" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <RefreshCw size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center transition-all" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <ExternalLink size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                </button>
              </div>
            </div>

            <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Planos", value: p.plans },
                { label: "Países", value: p.countries },
                { label: "Margem", value: p.margin },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="text-base font-bold" style={{ color: s.label === "Margem" ? "#D0FF3E" : "#fff", letterSpacing: "-0.02em" }}>
                    {s.value}
                  </div>
                  <div className="text-[10px] mt-0.5 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.features.map((f) => (
                <span key={f} className="badge badge-gray text-[11px]">✓ {f}</span>
              ))}
            </div>
          </div>
        ))}

        {/* Add provider */}
        <div
          className="rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all"
          style={{ border: "1.5px dashed rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)", minHeight: 220 }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(208,255,62,0.2)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(208,255,62,0.08)" }}>
            <Plug2 size={22} style={{ color: "#D0FF3E" }} />
          </div>
          <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>Conectar novo provedor</div>
          <div className="text-[11px] text-center px-4" style={{ color: "rgba(255,255,255,0.2)" }}>
            Integre eSIM ou SMS de qualquer provedor via API REST ou XML
          </div>
        </div>
      </div>
    </div>
  );
}
