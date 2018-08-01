import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ShopApp from "./shopPage/App";
import reducers from "./admin/reducers";

exports.admin = (req, res) => {
    res.render("admin");
};

exports.shopPage = (req, res) => {
    res.render("shoppage", {
        content: renderToStaticMarkup(
            <Provider store={createStore(reducers)}>
                <StaticRouter location={req.url} context={{}}>
                    <ShopApp />
                </StaticRouter>
            </Provider>
        )
    });
};
