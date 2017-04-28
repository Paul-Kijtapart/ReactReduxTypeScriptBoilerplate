import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Redux
import { store } from "./store";

// Views
import { Home } from "./views/Home"

// Mock data


ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById("root")
);