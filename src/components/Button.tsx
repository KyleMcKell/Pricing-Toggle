import React from "react";
import { CardStyles } from "./Card";
interface Props {
	btnBgColor: string;
	btnTxtColor: string;
}

export const Button: React.FC<Props> = ({ btnBgColor, btnTxtColor }) => {
	return (
		<button
			className={`bg-${btnBgColor} text-${btnTxtColor} text-normal w-full h-12 rounded-lg font-semibold shadow-md`}
		>
			Learn More
			{/* another line */}
		</button>
	);
};
