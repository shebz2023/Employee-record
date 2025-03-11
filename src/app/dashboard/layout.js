"use client";

import SideBar from "@/components/sideBar";
import { MdEmail } from "react-icons/md";
import DropdownClient from "@/components/Dropdown";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <div className="h-screen">
      <nav className="w-full flex justify-between p-4">
        <div className="flex gap-1 cursor-pointer" onClick={handleNavigation}>
          <MdEmail size={18} className="text-green-400" />
          Get<span className="text-thin text-neutral-400">change</span>
        </div>
        <DropdownClient />
      </nav>
      <div className="h-full flex">
        <SideBar />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
