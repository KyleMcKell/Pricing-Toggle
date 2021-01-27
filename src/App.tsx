import React from "react";
import { Cards } from "./components/Cards";
import { Title } from "./components/Title";
import { ToggleSwitch } from "./components/ToggleSwitch";

interface Props {}

const App = (props: Props) => {
	return (
		<div className="flex justify-center items-center h-screen w-screen flex-col bg-gradient-to-br from-purple-100 to-purple-300">
			<Title />
			<ToggleSwitch />
			<Cards />
		</div>
	);
};

export default App;
