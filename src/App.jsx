import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./routes/app";
import LoginPage from "./views/LoginPage/LoginPage";
import { connect } from "react-redux";

const switchRoutes = (
    <Switch>
        {appRoutes.map((route, index) => {
            if (route.redirect)
                return (
                    <Redirect
                        key={index}
                        path={route.path}
                        exact={true}
                        to={route.to}
                    />
                );
            return (
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                />
            );
        })}
    </Switch>
);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        render={() => {
                            if (this.props.isAuthentication) {
                                return <Redirect to="/" />;
                            } else {
                                return <LoginPage />;
                            }
                        }}
                    />
                    <Route
                        path="/"
                        render={() => {
                            if (this.props.isAuthentication) {
                                return (
                                    <div className="wrapper ">
                                        <SideBar routes={appRoutes} />
                                        <div className="main-panel">
                                            <Header routes={appRoutes} />
                                            <div className="content">
                                                {switchRoutes}
                                            </div>
                                            <Footer />
                                        </div>
                                    </div>
                                );
                            } else {
                                return <Redirect to="/login" />;
                            }
                        }}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
function mapStateToProps(state) {
    return {
        isAuthentication: state.isAuthentication
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
