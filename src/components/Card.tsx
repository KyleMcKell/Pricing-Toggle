import React, { useState } from "react";
import { Perks } from "./Perks";
import { Button } from "./Button";
import { PricingCard } from "./Cards";

interface Props {
	card: PricingCard;
}

export const Card: React.FC<Props> = ({ card }) => {
	const [isPrimary, setisPrimary] = useState(card.isPrimary);

	return (
		<div
			className={`${
				isPrimary ? "bg-purple-400 text-gray-100" : "bg-gray-50 text-gray-600"
			} flex flex-col items-center justify-center m-4`}
		>
			<h4 className="font-semibold">{card.model}</h4>
			<h3 className="font-bold text-5xl">{`$${card.monthlyPrice}`}</h3>
			<Perks
				storage={card.storage}
				usersAllowed={card.usersAllowed}
				sendGB={card.sendGB}
			/>
			<Button />
		</div>
	);
};
