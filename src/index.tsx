import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import { Store } from "redux";
import App from "./components/App/App";
import StoreSingleton from "./store/Store";

import "./index.less";

const store: Store = StoreSingleton.getStoreInstance({});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root")
);