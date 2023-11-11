"use client";
import { useState } from "react";
import { Layout, Menu } from "antd";

import { SidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
const { Sider } = Layout;

const Sidebar = () => {
	const role = USER_ROLE.SUPER_ADMIN;
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div className="demo-logo-vertical" />
			<Menu
				theme="dark"
				defaultSelectedKeys={["1"]}
				mode="inline"
				items={SidebarItems(role)}
			/>
		</Sider>
	);
};

export default Sidebar;
