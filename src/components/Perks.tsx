import React from "react";

interface Props {
	storage: string;
	usersAllowed: number;
	sendGB: number;
}

export const Perks: React.FC<Props> = ({ storage, usersAllowed, sendGB }) => {
	return (
		<div className="flex flex-col justify-center items-center font-semibold text-normal">
			<h5>{`${storage} Storage`}</h5>
			<hr />
			<h5>{`${usersAllowed} Users Allowed`}</h5>
			<hr />
			<h5>{`Send up to ${sendGB} GB`}</h5>
		</div>
	);
};
