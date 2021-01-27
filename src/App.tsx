import React from "react";
import { Cards } from "./components/Cards";
import { Title } from "./components/Title";
import { ToggleSwitch } from "./components/ToggleSwitch";

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
