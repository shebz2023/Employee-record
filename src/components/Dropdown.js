"use client";

import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useRouter } from "next/navigation"; // Correct import for Next.js App Router

export default function DropdownClient() {
  const router = useRouter(); // Move useRouter here

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, session, etc.)
    console.log("User logged out");

    // Navigate to the login page
    router.push("/login");
  };

  const items = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Profile",
      extra: "⌘P",
    },
    {
      key: "3",
      label: "Billing",
      extra: "⌘B",
    },
    {
      key: "4",
      label: "Logout",
      icon: <LogoutOutlined />,
      extra: "⌘S",
      onClick: handleLogout, // Use the handleLogout function
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hi, jon doe
          <DownOutlined className="text-sm" />
        </Space>
      </a>
    </Dropdown>
  );
}