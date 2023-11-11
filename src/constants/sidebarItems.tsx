import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
export const SidebarItems = (role: string) => {
	const defaultSidebarItems: MenuProps["items"] = [
		{
			label: "Profile",
			key: "profile",
			icon: <UserOutlined />,
			children: [
				{
					label: "Account Profile",
					key: "profile",
				},
				{
					label: "Chagnge Password",
					key: "change_password",
				},
			],
		},
	];
	const adminSidebarItems: MenuProps["items"] = [
		{
			label: <Link href={`../${role}/add_destination`}>Add Destination</Link>,
			key: "add_destination",
		},
	];

	const superAdminSidebarItems: MenuProps["items"] = [
		...defaultSidebarItems,
		...adminSidebarItems,
		{
			label: <Link href={`../${role}/create-admin`}>Create Admin</Link>,
			key: "create-admin",
		},
	];

	if (role === "super_admin") return superAdminSidebarItems;
	else if (role === "admin") return adminSidebarItems;
};
