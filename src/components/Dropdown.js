"use client";

import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

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
  },
];

export default function DropdownClient() {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hi, jon doe
          <DownOutlined className="text-sm"/>
        </Space>
      </a>
    </Dropdown>
  );
}
