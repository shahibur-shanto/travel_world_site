"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "../../assets/sign_in.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import {
	useDestinationsQuery,
	useUserLoginMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";

type FromValues = {
	email: string;
	password: string;
};

const LoginPage = () => {
	const [userLogin] = useUserLoginMutation();
	const router = useRouter();

	const onSubmit: SubmitHandler<FromValues> = async (data: any) => {
		try {
			const res = await userLogin({ ...data }).unwrap();
			if (res?.accessToken) {
				router.push("/super_admin");
				message.success("User logged in successfully!");
			}
			storeUserInfo({ accessToken: res?.accessToken });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Row
			justify="center"
			align="middle"
			style={{
				minHeight: "100vh",
			}}
		>
			<Col sm={12} md={16} lg={10}>
				<Image src={loginImage} width={500} alt="" />
			</Col>
			<Col sm={12} md={8} lg={8}>
				<h1
					style={{
						margin: "15px 0px",
					}}
				>
					First Login Your Account
				</h1>
				<div>
					<Form submitHandler={onSubmit}>
						<div>
							<FormInput name="email" type="text" size="large" label="Email" />
						</div>
						<div
							style={{
								margin: "15px 0px",
							}}
						>
							<FormInput
								name="password"
								type="password"
								size="large"
								label="password"
							/>
						</div>
						<Button type="primary" htmlType="submit">
							Login
						</Button>
					</Form>
				</div>
			</Col>
		</Row>
	);
};
export default LoginPage;
