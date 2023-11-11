import React from "react";

const HomeSearchPage = () => {
	return (
		<div className="flex flex-col items-center justify-start">
			<div className="shadow-md rounded-lg w-100vw max-w-screen-lg">
				<div className="grid grid-cols-5 grid-rows-2 gap-4">
					<div className="col-span-10 row-span-1 text-center">
						<h1 className="text-white text-3xl font-semibold">Search for your trip</h1>
					</div>
					<div className="col-span-1 row-span-2">
						<input
							placeholder="City"
							type="text"
							id="city"
							name="city"
							className="mt-2 p-4 border rounded-md w-full"
						/>
					</div>

					<div className="col-span-1 row-span-2">
						<input
							placeholder="Departure"
							type="date"
							id="departure"
							name="departure"
							className="mt-2 p-4 border rounded-md w-full"
						/>
					</div>

					<div className="col-span-1 row-span-2">
						<input
							placeholder="Arrival"
							type="date"
							id="arrival"
							name="arrival"
							className="mt-2 p-4 border rounded-md w-full"
						/>
					</div>

					<div className="col-span-1 row-span-2">
						<input
							placeholder="Budget"
							type="number"
							id="budget"
							name="budget"
							className="mt-2 p-4 border rounded-md w-full"
						/>
					</div>
					<div className="col-span-1 row-span-2">
						<button className="bg-blue-500 text-white py-4 px-6 rounded-md hover:bg-blue-600 cursor-pointer w-full">
							SEARCH
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSearchPage;
