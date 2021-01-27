import React, { useState, useEffect } from "react";
import { Perks } from "./Perks";
import { Button } from "./Button";
import { PricingCard } from "./Cards";

interface Props {
	card: PricingCard;
}

export type CardStyles = {
	bgColor: string;
	txtColor: string;
	btnColor: string;
	btnTxtColor: string;
	height: string;
};

const baseCardColors: CardStyles = {
	bgColor: "gray-50",
	txtColor: "gray-600",
	btnColor: "purple-400",
	btnTxtColor: "white",
	height: "11/12",
};

const primaryCardColors: CardStyles = {
	bgColor: "purple-400",
	txtColor: "white",
	btnColor: "white",
	btnTxtColor: "gray-600",
	height: "full",
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
			className={`bg-${colors.bgColor} text-${colors.txtColor} flex flex-col items-center justify-around h-${colors.height} m-1 w-1/6 p-8 rounded-2xl shadow-2xl`}
		>
			<h4 className="font-semibold text-lg">{card.model}</h4>
			<h3 className="font-bold text-7xl flex items-center">
				<span className="text-4xl mr-1">$</span>
				{`${card.monthlyPrice}`}
			</h3>
			<Perks
				storage={card.storage}
				usersAllowed={card.usersAllowed}
				sendGB={card.sendGB}
				colors={colors}
			/>
			<Button colors={colors} />
		</div>
	);
};
