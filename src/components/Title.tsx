import React from "react";

interface Props {}

export const Title = (props: Props) => {
	return (
		<div className="flex flex-col justify-center items-center pb-2 border-b-2 border-solid border-purple-400">
			<h1 className="text-3xl text-gray-500 mb-4 font-bold tracking-wider">
				Our Pricing
			</h1>
			<h2 className="text-lg font-semibold text-gray-600">
				Select yearly and save $5 a month!
			</h2>
		</div>
	);
};
