import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/Home/Home";
import StudioPage from "./components/Studio/Studio";
import Teachers from "./components/Teachers/Teachers";
import GroupClasses from "./components/Classes/GroupClasses/GroupClasses";
import PrivateClasses from "./components/Classes/PrivateClasses/PrivateClasses";

import SchedulePage from "./components/Schedule/SchedulePage";
import Contacts from "./components/Contacts/Contacts";

import Layout from "./hoc/Layout/Layout";

function App() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWidth = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleWidth);

		return () => {
			window.removeEventListener("resize", handleWidth);
		};
	}, [width]);

	return (
		<>
			<Layout>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/studio" component={StudioPage} />
					<Route path="/our-teachers" component={Teachers} />
					<Route path="/classes" />
					<Route path="/private-classes" component={PrivateClasses} />
					<Route path="/group-classes" component={GroupClasses} />
					<Route path="/schedule" component={SchedulePage} />
					<Route path="/contacts" component={Contacts} />;
				</Switch>
			</Layout>
		</>
	);
}

export default App;
