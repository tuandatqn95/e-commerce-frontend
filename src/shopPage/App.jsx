import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Header/Banner";

import Cart from "./views/Cart/Cart";
import Home from "./views/Home/Home";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner />
                <Header />
                <Slider />
                <Switch>
                    <Route exact path="/" render={null} />
                    <Route path="/cart" component={Breadcrumb} />
                </Switch>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default App;
