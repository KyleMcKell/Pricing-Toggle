import React, { useState, useEffect } from "react";
import { Perks } from "./Perks";
import { Button } from "./Button";
import { PricingCard } from "./Cards";

interface Props {
	card: PricingCard;
	renewalLength: string;
}

type CardStyles = {
	bgColor: string;
	txtColor: string;
	height: string;
	zIndex: string;
	btnStyles: {
		btnBgColor: string;
		btnTxtColor: string;
	};
};

const baseCardStyles: CardStyles = {
	bgColor: "gray-50",
	txtColor: "gray-600",
	height: "11/12",
	zIndex: "0",
	btnStyles: {
		btnBgColor: "purple-400",
		btnTxtColor: "white",
	},
};

const primaryCardStyles: CardStyles = {
	bgColor: "purple-400",
	txtColor: "white",
	height: "full",
	zIndex: "10",
	btnStyles: {
		btnBgColor: "white",
		btnTxtColor: "gray-600",
	},
};

export const Card: React.FC<Props> = ({ card, renewalLength }) => {
	const [style, setStyle] = useState(baseCardStyles);
	const [price, setPrice] = useState(card.monthlyPrice);

	useEffect(() => {
		if (card.isPrimary) {
			setStyle(primaryCardStyles);
		}
	}, []);

	useEffect(() => {
		switch (renewalLength) {
			case "monthly":
				setPrice(card.monthlyPrice);
				break;
			case "yearly":
				const yearlyPrice = Math.floor((card.monthlyPrice - 5) * 12) + 0.99;
				setPrice(yearlyPrice);
				break;
		}
	}, [renewalLength]);

	return (
		<div
			className={`bg-${style.bgColor} text-${style.txtColor} z-${style.zIndex} h-${style.height} w-1/6 flex flex-col items-center justify-around -m-2  p-8 rounded-2xl shadow-2xl`}
		>
			<h4 className="font-semibold text-lg">{card.model}</h4>
			<h3 className="font-bold text-7xl flex items-center">
				<span className="text-4xl mr-1">$</span>
				{`${price}`}
			</h3>
			<Perks
				storage={card.storage}
				usersAllowed={card.usersAllowed}
				sendGB={card.sendGB}
				borderColor={style.txtColor}
			/>
			<Button
				btnBgColor={style.btnStyles.btnBgColor}
				btnTxtColor={style.btnStyles.btnTxtColor}
			/>
		</div>
	);
};
