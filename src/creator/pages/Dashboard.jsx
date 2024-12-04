import { WalletDashboard } from "../components/wallet-dashboard";
import { Header } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen ">
      <Sidebar className="hidden lg:block" />
      <div className="flex-1 ml-72">
        <Header />
        <WalletDashboard />
      </div>
    </div>
  );
}