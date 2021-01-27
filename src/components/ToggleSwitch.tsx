import React from "react";

interface Props {
	renewalLength: string;
	setRenewalLength: React.Dispatch<React.SetStateAction<string>>;
}

export const ToggleSwitch = (props: Props) => {
	return (
		<div className="flex justify-between items-center m-6 font-semibold text-gray-600">
			<h2>Annually</h2>
			{/* switch container */}
			<div className="w-16 h-8 flex items-center rounded-full p-1 bg-gradient-to-r from-purple-300 to-purple-500 mr-4 ml-4">
				{/* switch */}
				<div className="bg-white w-6 h-6 rounded-full shadow-md"></div>
			</div>
			<h2>Monthly</h2>
		</div>
	);
};
