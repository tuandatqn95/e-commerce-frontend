import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../../components/Login/LoginForm";
import { loginRequest } from "../../actions/authAction";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            isLoading: false
        };
    }

    onLogin = user => {
        this.setState({
            error: "",
            isLoading: true
        });
        this.props.onLogin(user, err => {
            this.setState({
                error: err
                    ? err.data.message
                    : "Cannot login due to system error.",
                isLoading: false
            });
        });
    };

    render() {
        return (
            <div className="login-page">
                <div
                    className="page-header header-filter"
                    style={{
                        backgroundImage: "url('../admin/img/bg7.jpg",
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
                                    <LoginForm
                                        onLogin={this.onLogin}
                                        error={this.state.error}
                                        isLoading={this.state.isLoading}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (user, cb) => dispatch(loginRequest(user, cb))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);
