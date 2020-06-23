import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./components/ScrollToTop /ScrollToTop";

// optional configuration
const options = {
	// you can also just use 'bottom center'
	position: positions.BOTTOM_CENTER,
	timeout: 5000,
	offset: "30px",
	// you can also just use 'scale'
	transition: transitions.SCALE,
};
//const store = createStore(
//	rootReducer,
//	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//);
const app = (
	<BrowserRouter>
		<ScrollToTop />
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
