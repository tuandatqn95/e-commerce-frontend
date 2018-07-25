import React, { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    };

    onSubmitForm = event => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmitForm}>
                <div className="card-header card-header-primary text-center">
                    <h4 className="card-title">Login</h4>
                </div>
                <p className="description text-center">Or Be classNameical</p>
                <div className="card-body">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="material-icons">mail</i>
                            </span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email..."
                            value={this.state.email}
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="material-icons">lock_outline</i>
                            </span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password..."
                            value={this.state.password}
                            onChange={this.onHandleChange}
                        />
                    </div>
                </div>
                <div
                    className="footer text-center"
                    style={{ display: "block" }}
                >
                    <input
                        type="submit"
                        className="btn btn-primary btn-link btn-wd btn-lg"
                        value="Login"
                    />
                </div>
            </form>
        );
    }
}

export default LoginForm;
