import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/pages/Home/HomePage";
import StudioPage from "./containers/pages/Studio/StudioPage";
import TeachersPage from "./containers/pages/Teachers/TeachersPage";
import ClassesPage from "./containers/pages/Classes/ClassesPage";
import SchedulePage from "./containers/pages/Schedule/SchedulePage";
import ContactsPage from "./containers/pages/Contacts/ContactsPage";
import MainMenu from "./components/Navigation/MainMenu/MainMenu";
import { MenuState } from "./context/menu/MenuState";
import { TextState } from "./context/carousel/Text/TextState";
import { ImageState } from "./context/carousel/Image/ImageState";

function App() {
	return (
		<>
			<MenuState>
				<BrowserRouter>
					<Header />
					<MainMenu />
					<Switch>
						<Route path="/studio" component={StudioPage} />
						<Route path="/teachers" component={TeachersPage} />
						<Route path="/classes" component={ClassesPage} />
						<Route path="/schedule" component={SchedulePage} />
						<Route path="/contacts" component={ContactsPage} />
						<ImageState>
							<TextState>
								<Route path="/" exact component={HomePage} />
							</TextState>
						</ImageState>
					</Switch>
					<Footer />
				</BrowserRouter>
			</MenuState>
		</>
	);
}

export default App;
