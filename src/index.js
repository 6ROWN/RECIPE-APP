import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./App/Store";

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Fragment>,
	document.getElementById("root")
);
