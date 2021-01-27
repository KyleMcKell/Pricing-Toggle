import React from "react";
import { CardColors } from "./Card";

interface Props {
	colors: CardColors;
}

export const Button: React.FC<Props> = ({ colors }) => {
	return (
		<button
			className={`bg-${colors.btnColor} text-${colors.btnTxtColor} w-full h-12 rounded-lg font-semibold shadow-md`}
		>
			Learn More
			{/* another line */}
		</button>
	);
};
