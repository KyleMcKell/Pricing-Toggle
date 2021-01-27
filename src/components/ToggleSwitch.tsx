import React, { useEffect, useState } from "react";

interface Props {
	renewalLength: string;
	setRenewalLength: React.Dispatch<React.SetStateAction<string>>;
}

export const ToggleSwitch: React.FC<Props> = ({
	renewalLength,
	setRenewalLength,
}) => {
	const [switchPosition, setSwitchPosition] = useState("");

	const handleClick = () => {
		switch (renewalLength) {
			case "monthly":
				setRenewalLength("yearly");
				break;
			case "yearly":
				setRenewalLength("monthly");
				break;
			default:
				setRenewalLength("monthly");
				break;
		}
	};

	useEffect(() => {
		switch (renewalLength) {
			case "monthly":
				setSwitchPosition("");
				break;
			case "yearly":
				setSwitchPosition("translate-x-8");
				break;
			default:
				setSwitchPosition("");
				break;
		}
	}, [renewalLength]);

	return (
		<div className="flex justify-center w-full">
			<div className="flex justify-between items-center mx-6 mb-6 font-semibold text-gray-600">
				<h2>Monthly</h2>
				{/* switch container */}
				<div
					className="w-16 h-8 flex items-center rounded-full select-none p-1 bg-gradient-to-r from-purple-300 to-purple-500 mr-4 ml-4 cursor-pointer"
					onClick={() => handleClick()}
				>
					{/* switch */}
					<div
						className={`bg-white w-6 h-6 rounded-full shadow-md select-none transition-transform transform ${switchPosition}`}
					></div>
				</div>
				<h2>Yearly</h2>
			</div>
		</div>
	);
};
