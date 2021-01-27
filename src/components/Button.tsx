import React from "react";
import { CardColors } from "./Card";

interface Props {
	colors: CardColors;
}

export const Button: React.FC<Props> = ({ colors }) => {
	return (
		<button className={`bg-${colors.btnColor} text-${colors.btnTxtColor}`}>
			Learn More
			{/* another line */}
		</button>
	);
};
