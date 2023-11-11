/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useDestinationsQuery } from "@/redux/api/destinationApi";
import ErrorPage from "@/app/error";
import Loading from "@/app/loading";
import { ApiResponse, IDestination } from "@/types";
import { useEffect } from "react";

const PopularSectionPage = () => {
	const { data, isLoading, isError, refetch } = useDestinationsQuery({
		transformResponse: (response: ApiResponse) => ({
			data: response.destination.data,
			meta: response.destination.meta,
		}),
	});

	useEffect(() => {
		refetch();
	}, [data, refetch]);
	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <ErrorPage />;
	}
	return (
		<div className="bg-sky-50">
			<div className="">
				<div className="w-full flex justify-center items-center flex-col">
					<div className="">
						<p>SIMPLY AMAZING PLACES</p>
					</div>
					<div>
						<h1>POPULAR DESTINATION</h1>
					</div>
				</div>
				<div className="flex justify-evenly flex-wrap">
					{data?.destination?.data?.map((destination: IDestination) => (
						<>
							<div className="mt-10 mx-0.5">
								<Image
									width={350}
									height={350}
									src={`${destination.image}`}
									alt=""
								/>
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
