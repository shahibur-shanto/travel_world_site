"use client";
import { Layout } from "antd";
import ETWBreadCumbs from "./ETWBreadCumbs";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
	const base = "admin";
	return (
		<Content
			style={{
				minHeight: "100vh",
			}}
		>
			<ETWBreadCumbs
				items={[
					{
						label: `${base}`,
						link: `${base}`,
					},
					{
						label: `admin`,
						link: `${base}`,
					},
				]}
			/>
			{children}
		</Content>
	);
};

export default Contents;
