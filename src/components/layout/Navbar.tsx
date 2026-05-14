"use client";
import { usePathname } from "next/navigation";
import { Search, Bell, Command } from "lucide-react";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/products": "Produtos",
  "/orders": "Pedidos",
  "/resellers": "Revendedores",
  "/providers": "Provedores",
  "/pricing": "Precificação",
  "/analytics": "Analytics",
  "/api-access": "API Access",
  "/logs": "Logs do Sistema",
  "/settings": "Configurações",
  "/security": "Segurança",
  "/vault": "Vault",
  "/team": "Equipe",
  "/monitoring": "Monitoramento",
};

export default function Navbar() {
  const pathname = usePathname();
  const title = titles[pathname] ?? "KRIPTONITA";

  return (
    <header
      className="fixed top-0 right-0 z-30 flex items-center gap-4 px-6"
      style={{
        left: 228,
        height: 56,
        background: "rgba(7,7,7,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold" style={{ color: "#fff", letterSpacing: "-0.01em" }}>{title}</span>
      </div>

      <div className="flex-1" />

      <div
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg"
        style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.12)" }}
      >
        <div className="status-dot" style={{ width: 5, height: 5 }} />
        <span className="text-xs font-medium" style={{ color: "#4ADE80" }}>Todos os provedores ativos</span>
      </div>

      <button
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)", fontSize: 13 }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
      >
        <Search size={13} />
        <span>Buscar</span>
        <div className="flex items-center gap-0.5 ml-3 px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
          <Command size={9} /><span>K</span>
        </div>
      </button>

      <button
        className="relative w-8 h-8 rounded-lg flex items-center justify-center transition-all"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
      >
        <Bell size={14} style={{ color: "rgba(255,255,255,0.5)" }} />
        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full" style={{ background: "#D0FF3E", boxShadow: "0 0 6px rgba(208,255,62,0.8)" }} />
      </button>

      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer" style={{ background: "linear-gradient(135deg, #D0FF3E, #84CC16)", color: "#070707" }}>
        RM
      </div>
    </header>
  );
}
