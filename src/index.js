import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
serviceWorkerRegistration.register();
reportWebVitals();
