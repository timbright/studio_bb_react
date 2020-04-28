import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import PostForm from "./components/PostForm/PostForm";
import HomePage from "./containers/pages/Home/HomePage";
import StudioPage from "./containers/pages/Studio/StudioPage";
import TeachersPage from "./containers/pages/Teachers/TeachersPage";
import ClassesPage from "./containers/pages/Classes/ClassesPage";
import SchedulePage from "./containers/pages/Schedule/SchedulePage";
import ContactsPage from "./containers/pages/Contacts/ContactsPage";
import MainMenu from "./components/Navigation/MainMenu/MainMenu";

import { MenuState } from "./context/menu/MenuState";
import { PostFormState } from "./context/postForm/PostFormState";

function App() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWidth = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleWidth);

		return () => {
			window.removeEventListener(`resize`, handleWidth);
		};
	}, [width]);

	return (
		<>
			<PostFormState>
				<MenuState>
					<BrowserRouter>
						<Header />
						<MainMenu />
						<Switch>
							<Route path="/studio" component={StudioPage} />
							<Route path="/teachers" component={TeachersPage} />
							<Route path="/classes" component={ClassesPage} />
							<Route path="/schedule" component={SchedulePage} />
							{window.innerWidth >= 1280 && (
								<Route path="/contacts" component={ContactsPage} />
							)}
							<Route path="/" exact component={HomePage} />
						</Switch>
						<Footer />
						{window.innerWidth <= 1280 && <PostForm />}
					</BrowserRouter>
				</MenuState>
			</PostFormState>
		</>
	);
}

export default App;
