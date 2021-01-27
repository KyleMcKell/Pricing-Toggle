import React, { useState, useEffect } from "react";
import { Perks } from "./Perks";
import { Button } from "./Button";
import { PricingCard } from "./Cards";

interface Props {
	card: PricingCard;
}

export const Card: React.FC<Props> = ({ card }) => {
	const [colors, setColors] = useState({
		bgColor: "gray-50",
		txtColor: "gray-600",
		btnColor: "purple-400",
		btnTxtColor: "gray-100",
	});

	useEffect(() => {
		if (card.isPrimary) {
			setColors({
				bgColor: "purple-400",
				txtColor: "gray-100",
				btnColor: "gray-50",
				btnTxtColor: "gray-600",
			});
		}
	}, []);

	return (
		<div
			className={`bg-${colors.bgColor} text-${colors.txtColor} flex flex-col items-center justify-center m-4`}
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
