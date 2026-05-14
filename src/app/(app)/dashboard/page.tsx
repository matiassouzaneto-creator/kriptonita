import StatsCards from "@/components/dashboard/StatsCards";
import RevenueChart from "@/components/dashboard/PortfolioChart";
import ProductMix from "@/components/dashboard/WalletDistribution";
import RecentOrders from "@/components/dashboard/RecentTransactions";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-[1440px]">
      <div className="flex items-end justify-between mb-2">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
            Bom dia, Rafael
          </div>
          <h1 className="text-3xl font-bold leading-tight" style={{ color: "#fff", letterSpacing: "-0.04em" }}>
            Sua plataforma está{" "}
            <span className="accent-gradient-text">vendendo acima da meta</span>
          </h1>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <button className="k-btn-ghost">Exportar Relatório</button>
          <button className="k-btn-primary">+ Novo Produto</button>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2"><RevenueChart /></div>
        <div><ProductMix /></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2"><RecentOrders /></div>
        <div><ActivityFeed /></div>
      </div>
    </div>
  );
}
