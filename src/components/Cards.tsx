import React from "react";
import { Card } from "./Card";

interface Props {}

export type PricingCard = {
	model: string;
	monthlyPrice: number;
	storage: string;
	usersAllowed: number;
	sendGB: number;
	isPrimary: boolean;
};

const pricingCards: PricingCard[] = [
	{
		model: "Basic",
		monthlyPrice: 19.99,
		storage: "500 GB",
		usersAllowed: 2,
		sendGB: 3,
		isPrimary: false,
	},
	{
		model: "Professional",
		monthlyPrice: 24.99,
		storage: "1 TB",
		usersAllowed: 5,
		sendGB: 10,
		isPrimary: true,
	},
	{
		model: "Master",
		monthlyPrice: 39.99,
		storage: "2 TB",
		usersAllowed: 10,
		sendGB: 20,
		isPrimary: false,
	},
];

export const Cards = (props: Props) => {
	return (
		<div className="flex flex-row h-1/2 w-full justify-center items-center">
			{pricingCards.map((card) => {
				return <Card card={card} />;
			})}
		</div>
	);
};
