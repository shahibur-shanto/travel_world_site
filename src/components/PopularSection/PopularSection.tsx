/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useDestinationsQuery } from "@/redux/api/destinationApi";
import ErrorPage from "@/app/error";
import Loading from "@/app/loading";
import { IDestination } from "@/types";
import { useEffect } from "react";

// import { Blob } from "blob-polyfill";

interface IPartialDestination {
	location: string;
	cost: number;
	image: string; // Assuming image is a string URL
}

const PopularSectionPage = () => {
	const { data, isLoading, isError, refetch } = useDestinationsQuery({});
	console.log(data);
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
	console.log(destinationData);

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
					{destinationData?.map((destination: IDestination) => (
						<>
							<div className="mt-10 mx-0.5">
								<Image src={`${destination.image}`} alt="" />
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
