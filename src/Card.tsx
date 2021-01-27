import React from "react";
import { Perks } from "./Perks";
import { Button } from "./Button";

interface Props {}

export const Card = (props: Props) => {
	return (
		<div>
			<h4>Pricing Model</h4>
			<h3>Price</h3>
			<Perks />
			<Button />
		</div>
	);
};
