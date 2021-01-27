import React, { useState, useEffect } from "react";
import { Perks } from "./Perks";
import { Button } from "./Button";
import { PricingCard } from "./Cards";

interface Props {
	card: PricingCard;
}

export type CardColors = {
	bgColor: string;
	txtColor: string;
	btnColor: string;
	btnTxtColor: string;
};

const baseCardColors: CardColors = {
	bgColor: "gray-50",
	txtColor: "gray-600",
	btnColor: "purple-400",
	btnTxtColor: "gray-100",
};

const primaryCardColors: CardColors = {
	bgColor: "purple-400",
	txtColor: "gray-100",
	btnColor: "gray-50",
	btnTxtColor: "gray-600",
};

export const Card: React.FC<Props> = ({ card }) => {
	const [colors, setColors] = useState(baseCardColors);

	useEffect(() => {
		if (card.isPrimary) {
			setColors(primaryCardColors);
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
			<Button colors={colors} />
		</div>
	);
};
