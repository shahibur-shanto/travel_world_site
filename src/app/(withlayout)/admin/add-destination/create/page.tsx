"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/ui/UploadImage";
import {
	transportOptions,
	categoryOptions,
	countryOptions,
} from "@/constants/global";
import {
	useAddDestinationWithFormDataMutation,
	useDestinationsQuery,
} from "@/redux/api/destinationApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useState } from "react";

const CreateDestinationPage = () => {
	// const [addDestinationWithFormData] = useAddDestinationWithFormDataMutation();
	const [imageFile, setImageFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setImageFile(event.target.files[0]);
		}
	};

	const handleSubmit = async (values: any) => {
		const obj = { ...values };
		const file = obj["file"];
		delete obj["file"];
		const data = JSON.stringify(obj);
		// console.log(data);
		const formData = new FormData();
		formData.append("file", imageFile as File);
		formData.append("data", data);

		try {
			const response = await fetch(
				"https://enjoy-the-world.vercel.app/api/v1/destination/image-upload",
				{
					// Updated the URL to the API route
					method: "POST",
					body: formData, // Send the FormData object
				}
			);

			if (response.ok) {
				const data = await response.json();
				console.log(data);
			} else {
				console.error("Error Uploading Image");
			}
		} catch (error) {
			console.error("Error uploading image:", error);
		}

		// try {
		// 	const res = await addDestinationWithFormData(formData);
		// 	console.log(res);
		// 	if (!!res) {
		// 		message.success("Destination created successfully!");
		// 	}
		// } catch (err: any) {
		// 	console.error(err.message);
		// }
		// };

		// const convertBase64File = (image: Blob) => {
		// 	return new Promise<string>((resolve, reject) => {
		// 		const fs = new FileReader();
		// 		fs.readAsDataURL(image);
		// 		fs.onload = () => {
		// 			resolve(fs.result as string);
		// 		};
		// 		fs.onerror = (error) => {
		// 			reject(error);
		// 		};
		// 	});
		// };

		const base = "admin";
	};
	return (
		<>
			{/* <UMBreadCrumb
				items={[
					{ label: `${base}`, link: `/${base}` },
					{ label: "manage-faculty", link: `/${base}/manage-faculty` },
				]}
			/> */}
			<h1>Create Destination</h1>
			<Form submitHandler={handleSubmit}>
				{/* faculty information */}
				<div
					style={{
						border: "1px solid #d9d9d9",
						borderRadius: "5px",
						padding: "15px",
						marginBottom: "10px",
					}}
				>
					<p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
						Destination information
					</p>
					<Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
						<Col span={8} style={{ margin: "10px 0" }}>
							<FormSelectField
								name="country"
								label="Country"
								options={countryOptions}
							/>
						</Col>

						<Col span={8} style={{ margin: "10px 0" }}>
							<FormTextArea name="description" label="Description" rows={2} />
						</Col>

						<Col span={8} style={{ margin: "10px 0" }}>
							<FormInput name="location" label="Location" size="large" />
						</Col>

						<Col span={8} style={{ margin: "10px 0" }}>
							<FormSelectField
								name="transport"
								label="Transport"
								options={transportOptions}
							/>
						</Col>

						<Col span={8} style={{ margin: "10px 0" }}>
							<FormSelectField
								name="category"
								label="Category"
								options={categoryOptions}
							/>
						</Col>
						<Col span={6} style={{ margin: "10px 0" }}>
							<FormInput name="cost" label="Cost" size="large" />
						</Col>

						<Col span={8} style={{ margin: "10px 0" }}>
							<input type="file" onChange={handleFileChange} />
							{/* <UploadImage name="image" /> */}
						</Col>
					</Row>
				</div>

				<Button htmlType="submit">submit</Button>
			</Form>
		</>
	);
};

export default CreateDestinationPage;
