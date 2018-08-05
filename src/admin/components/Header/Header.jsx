import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ChangePassword from "../User/ChangePassword";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChangePassModalOpen: false
        };
    }
    onToggleChangePassModal = () => {
        this.setState({
            isChangePassModalOpen: !this.state.isChangePassModalOpen
        });
    };
    NavbarName = () => (
        <Switch>
            {this.props.routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    render={() => (
                        <a className="navbar-brand">{route.navbarName}</a>
                    )}
                />
            ))}
        </Switch>
    );

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-wrapper">{this.NavbarName()}</div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        aria-controls="navigation-index"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar" />
                        <span className="navbar-toggler-icon icon-bar" />
                        <span className="navbar-toggler-icon icon-bar" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <form className="navbar-form">
                            <div className="input-group no-border">
                                <input
                                    defaultValue
                                    className="form-control"
                                    placeholder="Search..."
                                    type="text"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-white btn-round btn-just-icon"
                                >
                                    <i className="material-icons">search</i>
                                    <div className="ripple-container" />
                                </button>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#pablo">
                                    <i className="material-icons">dashboard</i>
                                    <p className="d-lg-none d-md-block">
                                        Stats
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link"
                                    href="http://example.com"
                                    id="navbarDropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="material-icons">person</i>

                                    <p className="d-lg-none d-md-block">
                                        Account
                                    </p>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <a className="dropdown-item">Profile</a>
                                    <a
                                        className="dropdown-item"
                                        onClick={this.onToggleChangePassModal}
                                    >
                                        Change Password
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        onClick={this.props.onLogout}
                                    >
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ChangePassword
                        isShow={this.state.isChangePassModalOpen}
                        onToggleModal={this.onToggleChangePassModal}
                    />
                </div>
            </nav>
        );
    }
}

export default Header;
