import React, { useState } from "react";
import { Cards } from "./components/Cards";
import { Title } from "./components/Title";
import { ToggleSwitch } from "./components/ToggleSwitch";

interface Props {}

const App = (props: Props) => {
	const [renewalLength, setRenewalLength] = useState("monthly");

	return (
		<div className="mdlg:h-screen flex justify-center items-center flex-col bg-gradient-to-br from-purple-50 to-purple-300 w-screen">
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
