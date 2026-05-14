"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Package, ShoppingCart, Users, Plug2,
  BarChart3, Code2, Tag, ScrollText, Settings, Zap, ChevronRight
} from "lucide-react";

const groups = [
  {
    label: "Operações",
    items: [
      { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { href: "/products", icon: Package, label: "Produtos" },
      { href: "/orders", icon: ShoppingCart, label: "Pedidos" },
      { href: "/resellers", icon: Users, label: "Revendedores" },
    ],
  },
  {
    label: "Fornecedores",
    items: [
      { href: "/providers", icon: Plug2, label: "Provedores" },
      { href: "/pricing", icon: Tag, label: "Precificação" },
    ],
  },
  {
    label: "Sistema",
    items: [
      { href: "/analytics", icon: BarChart3, label: "Analytics" },
      { href: "/api-access", icon: Code2, label: "API Access" },
      { href: "/logs", icon: ScrollText, label: "Logs" },
    ],
  },
  {
    label: "Conta",
    items: [
      { href: "/settings", icon: Settings, label: "Configurações" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed top-0 left-0 h-screen z-40 flex flex-col"
      style={{ width: 228, background: "rgba(10,10,10,0.98)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "#D0FF3E", boxShadow: "0 0 16px rgba(208,255,62,0.4)" }}
        >
          <Zap size={15} style={{ color: "#070707" }} strokeWidth={2.5} />
        </div>
        <div>
          <div className="text-sm font-bold tracking-tight" style={{ color: "#fff", letterSpacing: "-0.02em" }}>
            KRIPTONITA
          </div>
          <div className="text-[10px] font-medium" style={{ color: "rgba(208,255,62,0.7)", letterSpacing: "0.06em" }}>
            RESELLER HUB
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
        {groups.map((group) => (
          <div key={group.label}>
            <div
              className="px-3 mb-1.5 text-[10.5px] font-semibold tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {group.label}
            </div>
            <div className="space-y-0.5">
              {group.items.map(({ href, icon: Icon, label }) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link key={href} href={href} className={`nav-item ${active ? "active" : ""}`}>
                    <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
                    <span className="flex-1">{label}</span>
                    {active && <ChevronRight size={12} style={{ color: "rgba(208,255,62,0.5)" }} />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="p-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all"
          style={{ background: "rgba(255,255,255,0.03)" }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #D0FF3E, #84CC16)", color: "#070707" }}
          >
            RM
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate" style={{ color: "#fff", letterSpacing: "-0.01em" }}>
              Rafael Mendes
            </div>
            <div className="text-[11px] truncate" style={{ color: "rgba(255,255,255,0.3)" }}>
              Administrador
            </div>
          </div>
          <div className="status-dot flex-shrink-0" />
        </div>
      </div>
    </aside>
  );
}
