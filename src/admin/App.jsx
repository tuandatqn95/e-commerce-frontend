import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route, Redirect, Link, withRouter } from "react-router-dom";
import appRoutes from "./routes/app";
import LoginPage from "./views/LoginPage/LoginPage";
import { connect } from "react-redux";
import {
    authRequest,
    logoutRequest,
    updatePasswordRequest,
    resetPasswordRequest
} from "./actions/authAction";
import Loading from "./components/Loading/Loading";

class App extends Component {
    onUpdatePassword = (oldPassword, newPassword) => {
        const { id } = this.props.auth.loggedUser;
        this.props.onUpdatePasswordRequest(id, oldPassword, newPassword);
    };

    onResetPassword = () => {
        const { id } = this.props.auth.loggedUser;
        this.props.onResetPasswordRequest(id);
    };

    componentWillMount() {
        this.props.onAuthRequest();
    }

    render() {
        const { auth } = this.props;
        const { isLoggedIn } = auth;

        return isLoggedIn === undefined ? (
            <Loading />
        ) : (
            <Switch>
                <Route
                    exact
                    path="/login"
                    render={() => {
                        return !isLoggedIn ? (
                            <LoginPage />
                        ) : (
                            <Redirect to="/" />
                        );
                    }}
                />

                <Route
                    path="/"
                    render={() => {
                        return !isLoggedIn ? (
                            <Redirect to="/login" />
                        ) : (
                            <div className="wrapper ">
                                <SideBar routes={appRoutes} />
                                <div className="main-panel">
                                    <Header
                                        routes={appRoutes}
                                        onLogout={this.props.onLogoutRequest}
                                        onUpdatePassword={this.onUpdatePassword}
                                        onResetPassword={this.onResetPassword}
                                    />
                                    <div className="content">
                                        <SwitchRoutes routes={appRoutes} />
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        );
                    }}
                />
            </Switch>
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
        onLogoutRequest: () => dispatch(logoutRequest()),
        onAuthRequest: () => dispatch(authRequest()),
        onUpdatePasswordRequest: (id, oldPassword, newPassword) =>
            dispatch(updatePasswordRequest(id, oldPassword, newPassword)),
        onResetPasswordRequest: id => dispatch(resetPasswordRequest(id))
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);

const SwitchRoutes = props => (
    <Switch>
        {props.routes.map((route, index) => {
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
