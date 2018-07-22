import React, { Component } from "react";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confPassword: ""
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

    onHandleFocus = event => {
        let target = event.target;
        let name = target.name;
        this.setState({
            isFocusing: name
        });
    };

    onBlurFocus = () => {
        this.setState({
            isFocusing: undefined
        });
    };

    validateInput() {
        return true;
    }

    resetForm = () => {
        this.setState({
            oldPassword: "",
            newPassword: "",
            confPassword: ""
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            this.props.onSubmitUser({
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
                confPassword: this.state.confPassword
            });
            this.resetForm();
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} onReset={this.onReset}>
                <div className="row">
                    <div className="col-md-12">
                        <div
                            className={`form-group bmd-form-group ${this.state
                                .oldPassword && "is-filled"} ${this.state
                                .isFocusing === "oldPassword" && "is-focused"}`}
                        >
                            <label className="bmd-label-floating">
                                Old Password
                            </label>
                            <input
                                name="oldPassword"
                                className="form-control"
                                type="password"
                                value={this.state.oldPassword}
                                onChange={this.onHandleChange}
                                onFocus={this.onHandleFocus}
                                onBlur={this.onBlurHandle}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div
                            className={`form-group bmd-form-group ${this.state
                                .newPassword && "is-filled"} ${this.state
                                .isFocusing === "newPassword" && "is-focused"}`}
                        >
                            <label className="bmd-label-floating">
                                New Password
                            </label>
                            <input
                                name="newPassword"
                                className="form-control"
                                type="password"
                                value={this.state.newPassword}
                                onChange={this.onHandleChange}
                                onFocus={this.onHandleFocus}
                                onBlur={this.onBlurHandle}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div
                            className={`form-group bmd-form-group ${this.state
                                .confPassword && "is-filled"} ${this.state
                                .isFocusing === "confPassword" &&
                                "is-focused"}`}
                        >
                            <label className="bmd-label-floating">
                                Confirm New Password
                            </label>
                            <input
                                name="confPassword"
                                className="form-control"
                                type="password"
                                value={this.state.confPassword}
                                onChange={this.onHandleChange}
                                onFocus={this.onHandleFocus}
                                onBlur={this.onBlurHandle}
                            />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ChangePassword;
