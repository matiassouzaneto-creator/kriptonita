// ─── Revenue chart (30 days) ──────────────────────────────────────────────
export const revenueChartData = (() => {
  const data = [];
  let value = 18_400;
  const now = Date.now();
  const seed = [1.2, -0.4, 2.1, 0.8, -0.6, 3.0, 1.5, -0.3, 2.4, 0.9, -0.5, 1.8, 2.8, 0.6, -0.2, 3.4, 1.1, 0.7, -0.4, 2.6, 1.3, 0.5, 1.9, -0.3, 2.2, 1.0, 0.8, 2.7, 1.4, 1.6];
  for (let i = 29; i >= 0; i--) {
    value = Math.max(8000, Math.round(value + seed[29 - i] * 1200));
    data.push({
      date: new Date(now - i * 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      revenue: value,
      orders: Math.round(value / 14.2),
    });
  }
  return data;
})();

// ─── Product mix (donut) ──────────────────────────────────────────────────
export const productMix = [
  { name: "eSIM Europa", code: "ESIM-EU", revenue: 48_290, percent: 38.2, color: "#60A5FA", change: 12.4 },
  { name: "eSIM Global", code: "ESIM-GL", revenue: 32_840, percent: 26.0, color: "#D0FF3E", change: 8.1 },
  { name: "eSIM Américas", code: "ESIM-AM", revenue: 18_390, percent: 14.6, color: "#A78BFA", change: 3.2 },
  { name: "SMS OTP", code: "SMS-OTP", revenue: 15_920, percent: 12.6, color: "#4ADE80", change: 21.7 },
  { name: "SMS Bulk", code: "SMS-BLK", revenue: 10_840, percent: 8.6, color: "#FB923C", change: -2.1 },
];

// ─── Recent orders ──────────────────────────────────────────────────────
export const recentOrders = [
  { id: "#48291", customer: "Loja Digital BR", product: "eSIM Europa 5GB/30d", qty: 12, total: "$178.80", status: "completed", channel: "API", time: "1m ago" },
  { id: "#48290", customer: "TechStore SP", product: "SMS OTP Pack 1000", qty: 5, total: "$60.00", status: "completed", channel: "Dashboard", time: "8m ago" },
  { id: "#48289", customer: "Viagens Premium", product: "eSIM Global 1GB", qty: 30, total: "$297.00", status: "processing", channel: "API", time: "22m ago" },
  { id: "#48288", customer: "StartupXYZ", product: "SMS Bulk 50k", qty: 1, total: "$390.00", status: "completed", channel: "API", time: "1h ago" },
  { id: "#48287", customer: "App Fintech", product: "SMS OTP Pack 5000", qty: 3, total: "$147.00", status: "completed", channel: "API", time: "2h ago" },
  { id: "#48286", customer: "Agência Travel", product: "eSIM Ásia 3GB/15d", qty: 8, total: "$103.20", status: "failed", channel: "Dashboard", time: "3h ago" },
  { id: "#48285", customer: "Marketplace MG", product: "eSIM Europa 10GB/30d", qty: 20, total: "$578.00", status: "completed", channel: "API", time: "4h ago" },
];

// ─── Providers (suppliers) ───────────────────────────────────────────────
export const providers = [
  { name: "Airalo", type: "eSIM", status: "connected", margin: "68%", costAvg: "$0.0028/MB", plans: 184, uptime: "99.9%", color: "#60A5FA" },
  { name: "SpamLand", type: "SMS", status: "connected", margin: "52%", costAvg: "$0.0082/msg", plans: 12, uptime: "99.8%", color: "#D0FF3E" },
  { name: "GlobaleSIM", type: "eSIM", status: "connected", margin: "71%", costAvg: "$0.0024/MB", plans: 96, uptime: "99.7%", color: "#A78BFA" },
  { name: "Twilio", type: "SMS", status: "degraded", margin: "44%", costAvg: "$0.0075/msg", plans: 8, uptime: "97.2%", color: "#FB923C" },
];

// ─── eSIM catalog ───────────────────────────────────────────────────────
export const esimPlans = [
  { id: 1, region: "Europa", flag: "🇪🇺", data: "5GB", validity: "30 dias", cost: "$4.90", price: "$14.90", margin: "67%", sold: 1284, provider: "Airalo", status: "active" },
  { id: 2, region: "Global", flag: "🌍", data: "1GB", validity: "7 dias", cost: "$3.10", price: "$9.90", margin: "69%", sold: 982, provider: "GlobaleSIM", status: "active" },
  { id: 3, region: "EUA", flag: "🇺🇸", data: "10GB", validity: "30 dias", cost: "$5.80", price: "$18.90", margin: "69%", sold: 847, provider: "Airalo", status: "active" },
  { id: 4, region: "Ásia-Pacífico", flag: "🌏", data: "3GB", validity: "15 dias", cost: "$3.90", price: "$12.90", margin: "70%", sold: 631, provider: "GlobaleSIM", status: "active" },
  { id: 5, region: "Brasil", flag: "🇧🇷", data: "5GB", validity: "30 dias", cost: "$2.90", price: "$8.90", margin: "67%", sold: 2184, provider: "Airalo", status: "active" },
  { id: 6, region: "Europa", flag: "🇪🇺", data: "10GB", validity: "30 dias", cost: "$8.90", price: "$28.90", margin: "69%", sold: 412, provider: "Airalo", status: "active" },
  { id: 7, region: "Global", flag: "🌍", data: "Ilimitado", validity: "7 dias", cost: "$9.90", price: "$29.90", margin: "67%", sold: 284, provider: "GlobaleSIM", status: "active" },
  { id: 8, region: "Américas", flag: "🌎", data: "3GB", validity: "15 dias", cost: "$3.50", price: "$11.90", margin: "71%", sold: 518, provider: "GlobaleSIM", status: "draft" },
];

// ─── SMS Shortcode packages ───────────────────────────────────────────────
export const smsPackages = [
  { id: 1, name: "OTP Pack 1000", type: "OTP", messages: "1.000", cost: "$8.20", price: "$12.00", margin: "46%", sold: 847, provider: "SpamLand", status: "active" },
  { id: 2, name: "OTP Pack 5000", type: "OTP", messages: "5.000", cost: "$38.50", price: "$59.00", margin: "53%", sold: 412, provider: "SpamLand", status: "active" },
  { id: 3, name: "Marketing 10k", type: "Marketing", messages: "10.000", cost: "$72.00", price: "$110.00", margin: "53%", sold: 284, provider: "SpamLand", status: "active" },
  { id: 4, name: "Bulk 50k", type: "Bulk", messages: "50.000", cost: "$284.00", price: "$390.00", margin: "37%", sold: 198, provider: "Twilio", status: "active" },
  { id: 5, name: "Enterprise 200k", type: "Bulk", messages: "200.000", cost: "$980.00", price: "$1.490.00", margin: "52%", sold: 47, provider: "SpamLand", status: "active" },
];

// ─── Resellers ──────────────────────────────────────────────────────────
export const resellers = [
  { name: "Loja Digital BR", email: "contato@lojadigital.com.br", revenue: "$4,284", orders: 147, plan: "Pro", status: "active", joined: "Jan 2025" },
  { name: "Viagens Premium", email: "ti@viagenspremium.com", revenue: "$3,891", orders: 98, plan: "Pro", status: "active", joined: "Feb 2025" },
  { name: "TechStore SP", email: "api@techstore.com.br", revenue: "$2,140", orders: 84, plan: "Starter", status: "active", joined: "Mar 2025" },
  { name: "App Fintech", email: "dev@fintech.io", revenue: "$5,720", orders: 312, plan: "Enterprise", status: "active", joined: "Jan 2025" },
  { name: "StartupXYZ", email: "hello@startupxyz.com", revenue: "$891", orders: 22, plan: "Starter", status: "active", joined: "Apr 2025" },
  { name: "Marketplace MG", email: "tech@marketplace.mg", revenue: "$1,284", orders: 41, plan: "Pro", status: "suspended", joined: "Mar 2025" },
];

// ─── Activity feed ──────────────────────────────────────────────────────
export const activityFeed = [
  { event: "Novo pedido via API", detail: "eSIM Europa 5GB × 12 — Loja Digital BR", time: "agora", level: "success" },
  { event: "eSIM ativado", detail: "ICCID: 8955...4821 — Airalo", time: "3m atrás", level: "info" },
  { event: "Limite de rate atingido", detail: "Reseller: App Fintech — /esim/activate", time: "11m atrás", level: "warning" },
  { event: "Webhook entregue", detail: "order.completed → fintech.io/webhook", time: "18m atrás", level: "info" },
  { event: "Novo reseller cadastrado", detail: "marketing@agency.com — plano Starter", time: "1h atrás", level: "success" },
];

// ─── Hourly orders chart ─────────────────────────────────────────────────
export const hourlyChart = (() => {
  const data = [];
  for (let i = 23; i >= 0; i--) {
    const h = new Date(Date.now() - i * 3600000);
    data.push({
      hour: h.getHours().toString().padStart(2, "0") + ":00",
      orders: Math.round(12 + Math.random() * 84),
      revenue: Math.round(180 + Math.random() * 1200),
    });
  }
  return data;
})();

// ─── Network / API stats ─────────────────────────────────────────────────
export const apiStats = [
  { endpoint: "POST /esim/activate", calls: 38_291, p99: "284ms", errors: 0.02 },
  { endpoint: "POST /esim/order", calls: 12_847, p99: "142ms", errors: 0.04 },
  { endpoint: "POST /sms/send", calls: 84_392, p99: "88ms", errors: 0.01 },
  { endpoint: "GET /catalog", calls: 184_392, p99: "18ms", errors: 0.0 },
  { endpoint: "GET /balance", calls: 48_821, p99: "12ms", errors: 0.0 },
  { endpoint: "POST /webhook/test", calls: 2_284, p99: "94ms", errors: 0.08 },
];
