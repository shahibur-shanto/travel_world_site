/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import image from "../../assets/background.jpg";
import { useDestinationsQuery } from "@/redux/api/destinationApi";
import ErrorPage from "@/app/error";
import Loading from "@/app/loading";
import { IDestination } from "@/types";
import { Buffer } from "buffer";
import { useEffect } from "react";

import { Blob } from "blob-polyfill";

const PopularSectionPage = () => {
	const { data, isLoading, isError, refetch } = useDestinationsQuery({});
	useEffect(() => {
		// You can call refetch when the component mounts or whenever you want to refresh the data.
		// For example, you can call refetch after adding a new book.
		refetch();
	}, [data, refetch]);
	if (isLoading) {
		return <Loading />; // Show a loading indicator
	}

	if (isError) {
		return <ErrorPage />; // Show an error message
	}

	const destinationData = data?.destination;

	// const images = destinationData?.data.map((destination: IDestination) => {
	// 	const blob = new Blob(
	// 	  [new Uint8Array(Buffer.from(destination.image.data, "base64"))],
	// 	  { type: "image/jpeg" }
	// 	);

	// 	const imageElement = new Image();
	// 	imageElement.src = URL.createObjectURL(blob);

	// 	return imageElement;
	//   });

	const images = destinationData?.data.map((destination: IDestination) => {
		const dataURI = `data:image/jpeg;base64,${Buffer.from(
			destination.image.data,
			"base64"
		).toString()}`;

		return {
			src: dataURI,
			alt: destination.location,
			width: 350,
			height: 350,
		};
	});

	return (
		<div className="bg-sky-50">
			<div className="w-11/12">
				<div className="w-full flex justify-center items-center flex-col">
					<div className="">
						<p>SIMPLY AMAZING PLACES</p>
					</div>
					<div>
						<h1>POPULAR DESTINATION</h1>
					</div>
				</div>
				<div className="flex justify-around flex-wrap">
					{Array.isArray(destinationData?.data) &&
						destinationData?.data.map((destination: IDestination) => (
							<>
								<div className="mt-10 mx-0.5">
									<Image {...images[destination.id]} alt="" />
									<h1>{destination.location}</h1>
									<p>{destination.cost}</p>
								</div>
							</>
						))}
				</div>
			</div>
		</div>
	);
};

export default PopularSectionPage;
