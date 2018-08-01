import React from "react";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./admin/App";
import reducers from "./admin/reducers";

const history = createBrowserHistory();
// const store = createStore(reducers, applyMiddleware(routerMiddleware(history)));
const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <BrowserRouter basename="admin">
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);
