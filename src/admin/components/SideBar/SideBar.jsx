import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const SidebarLink = props => {
    const { path, icon, name } = props;
    return (
        <Route
            path={path}
            children={({ match }) => (
                <li className={`nav-item ${match ? "active" : ""} `}>
                    <Link className="nav-link" to={path}>
                        <i className="material-icons">{icon}</i>
                        <p>{name}</p>
                    </Link>
                </li>
            )}
        />
    );
};

const SidebarLinks = props => {
    return props.routes.filter(route => !route.redirect).map((route, index) => {
        return (
            <SidebarLink
                key={index}
                active={false}
                path={route.path}
                icon={route.icon}
                name={route.sidebarName}
            />
        );
    });
};

class SideBar extends Component {
    render() {
        const { routes } = this.props;

        return (
            <div
                className="sidebar"
                data-color="green"
                data-background-color="white"
                data-image="../admin/img/sidebar-1.jpg"
            >
                {/*
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
      */}
                <div className="logo">
                    <Link
                        to="/"
                        className="simple-text logo-normal text-center"
                    >
                        AdminCP
                    </Link>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {routes
                            .filter(route => !route.redirect)
                            .map((route, index) => {
                                return (
                                    <SidebarLink
                                        key={index}
                                        active={false}
                                        path={route.path}
                                        icon={route.icon}
                                        name={route.sidebarName}
                                    />
                                );
                            })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
