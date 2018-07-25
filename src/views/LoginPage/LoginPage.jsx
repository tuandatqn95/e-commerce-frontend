import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../../components/Login/LoginForm";

function mapStateToProps(state) {
    return {};
}

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                <link
                    href="../assets/css/material-kit.css?v=2.0.4"
                    rel="stylesheet"
                />
                <div
                    className="page-header header-filter"
                    style={{
                        backgroundImage: "url('../assets/img/bg7.jpg",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                                <div
                                    className="card card-login"
                                    style={{ marginTop: 100 }}
                                >
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(LoginPage);
