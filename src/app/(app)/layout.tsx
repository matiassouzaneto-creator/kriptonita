import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#070707", minHeight: "100vh" }}>
      <Sidebar />
      <Navbar />
      <main
        className="page-enter"
        style={{ marginLeft: 228, paddingTop: 56, minHeight: "100vh" }}
      >
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
