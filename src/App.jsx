import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./routes/app";
import LoginPage from "./views/LoginPage/LoginPage";
import { connect } from "react-redux";
import { authRequest } from "./actions/authAction";

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
    componentWillMount() {
        this.props.onAuthRequest();
    }

    render() {
        let { isLoggedIn } = this.props.auth;
        return (
            isLoggedIn !== undefined && (
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/login"
                            render={() => {
                                if (isLoggedIn) {
                                    return <Redirect to="/" />;
                                } else {
                                    return <LoginPage />;
                                }
                            }}
                        />
                        <Route
                            path="/"
                            render={() => {
                                if (isLoggedIn) {
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
            )
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAuthRequest: () => dispatch(authRequest())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
