import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

export default function LeftMainMenu() {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = useMemo(() => {
    return [
      getItem(<Link to="/food">food</Link>, "food", <PieChartOutlined />),
      getItem(<Link to="/tv">tv</Link>, "tv", <DesktopOutlined />),
      getItem("Personal services", "personal", <UserOutlined />, [
        getItem(<Link to="personal/massage">Massage</Link>, "personal/massage"),
        getItem(
          <Link to="personal/manicure">Manicure</Link>,
          "personal/manicure"
        ),
      ]),
      getItem("Сoaching", "coaching", <TeamOutlined />, [
        getItem(<Link to="personal/cooking">Cooking</Link>, "personal/cooking"),
        getItem(<Link to="personal/driving">Driving</Link>, "personal/driving"),
      ]),
    ];
  }, []);

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["0"]}
      mode="inline"
      items={items}
    />
  );
}
