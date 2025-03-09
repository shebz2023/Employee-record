import SideBar from "@/components/sideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen">
      <nav className="w-full flex justify-between bg-green-400 p-4">
        <a href="/dashboard">Get change</a>
        <a href="/dashboard/settings">Settings</a>
      </nav>
      <div className="h-full flex">
        <SideBar />
        <div className="bg-black w-full h-full">{children}</div>
      </div>
    </div>
  );
}
