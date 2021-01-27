import React from "react";
import { CardStyles } from "./Card";

interface Props {
	colors: CardStyles;
}

export const Button: React.FC<Props> = ({ colors }) => {
	return (
		<button
			className={`bg-${colors.btnColor} text-${colors.btnTxtColor} text-normal w-full h-12 rounded-lg font-semibold shadow-md`}
		>
			Learn More
			{/* another line */}
		</button>
	);
};
