import React from "react";
import { Cards } from "./Cards";
import { Title } from "./Title";
import { ToggleSwitch } from "./ToggleSwitch";

interface Props {}

const App = (props: Props) => {
	return (
		<>
			<Title />
			<ToggleSwitch />
			<Cards />
		</>
	);
};

export default App;
