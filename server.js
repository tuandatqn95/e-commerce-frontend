import path from "path";
import express from "express";
import webpack from "webpack";
import middleware from "./src/middleware";

const port = 3000;

const app = express();

if (process.env.NODE_ENV === "development") {
    const config = require("./webpack.config.dev");
    const compiler = webpack(config);
    app.use(
        require("webpack-dev-middleware")(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
            stats: {
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false
            }
        })
    );
    app.use(require("webpack-hot-middleware")(compiler));
    app.use(express.static(path.resolve(__dirname, "src")));
} else if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "dist")));
}

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/admin/*", middleware.admin);
app.get("/*", middleware.shopPage);

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        console.info(`Listening at http://localhost:${port}`);
    }
});
