import React, { useState } from "react";
import { Cards } from "./components/Cards";
import { Title } from "./components/Title";
import { ToggleSwitch } from "./components/ToggleSwitch";

interface Props {}

const App = (props: Props) => {
	const [renewalLength, setRenewalLength] = useState("monthly");

	return (
		<div className="flex justify-center items-center h-screen w-screen flex-col bg-gradient-to-br from-purple-100 to-purple-200">
			<Title />
			<ToggleSwitch
				setRenewalLength={setRenewalLength}
				renewalLength={renewalLength}
			/>
			<Cards renewalLength={renewalLength} />
		</div>
	);
};

export default App;
