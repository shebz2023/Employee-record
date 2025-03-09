export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav className="w-full flex justify-between bg-green-400 p-4">
        <a href="/dashboard">Get change</a>
        <a href="/dashboard/settings">Settings</a>
      </nav>
      <div>{children}</div>
    </div>
  );
}
