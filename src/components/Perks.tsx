import React from "react";
interface Props {
	storage: string;
	usersAllowed: number;
	sendGB: number;
	borderColor: string;
}

export const Perks: React.FC<Props> = ({
	storage,
	usersAllowed,
	sendGB,
	borderColor,
}) => {
	return (
		<div className="flex flex-col justify-center items-center font-semibold text-base w-full">
			<div
				className={`border-t-2 border-dotted border-${borderColor} w-full m-4`}
			></div>
			<h5>{`${storage} Storage`}</h5>
			<div
				className={`border-t-2 border-dotted border-${borderColor} w-full m-4`}
			></div>
			<h5>{`${usersAllowed} Users Allowed`}</h5>
			<div
				className={`border-t-2 border-dotted border-${borderColor} w-full m-4`}
			></div>
			<h5>{`Send up to ${sendGB} GB`}</h5>
			<div
				className={`border-t-2 border-dotted border-${borderColor} w-full m-4`}
			></div>
		</div>
	);
};
