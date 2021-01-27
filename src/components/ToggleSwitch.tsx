import React from "react";

interface Props {
	renewalLength: string;
	setRenewalLength: React.Dispatch<React.SetStateAction<string>>;
}

export const ToggleSwitch = (props: Props) => {
	return (
		<div>
			<h2>Annually</h2>
			<h2>Monthly</h2>
		</div>
	);
};
