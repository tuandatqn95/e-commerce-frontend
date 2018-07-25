import React, { Component } from "react";
import { Styles } from "../../constants/Styles";
import { modalChangePasswordId } from "../../constants/ModalId";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusing: "",
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
        if (this.state.newPassword !== this.state.confPassword) return false;
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
            this.props.onUpdatePassword(
                this.props.user.id,
                this.state.oldPassword,
                this.state.newPassword
            );
        } else {
            console.log("invalidate input");
        }
        this.resetForm();
    };
    onResetPassword = () => {
        this.props.onResetPassword(this.props.user.id);
        this.resetForm();
    };

    render() {
        return (
            <div className="modal fade" id={modalChangePasswordId}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div
                            className="modal-header "
                            style={Styles.backgroundModalHeader}
                        >
                            <h4
                                className="modal-title"
                                style={Styles.colorModalHeader}
                            >
                                Change Password
                            </h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={this.resetForm}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form
                                onSubmit={this.onSubmit}
                                onReset={this.onReset}
                            >
                                <div className="row">
                                    <div className="col-md-12">
                                        <div
                                            className={`form-group bmd-form-group ${this
                                                .state.oldPassword &&
                                                "is-filled"} ${this.state
                                                .isFocusing === "oldPassword" &&
                                                "is-focused"}`}
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
                                            className={`form-group bmd-form-group ${this
                                                .state.newPassword &&
                                                "is-filled"} ${this.state
                                                .isFocusing === "newPassword" &&
                                                "is-focused"}`}
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
                                            className={`form-group bmd-form-group ${this
                                                .state.confPassword &&
                                                "is-filled"} ${this.state
                                                .isFocusing ===
                                                "confPassword" &&
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
                            <div className="modal-footer">
                                <button
                                    className="btn btn-danger pull-right"
                                    data-dismiss="modal"
                                    onClick={this.onResetPassword}
                                >
                                    Reset Password
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary pull-right"
                                    data-dismiss="modal"
                                    onClick={this.onSubmit}
                                >
                                    Save
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-default pull-right"
                                    data-dismiss="modal"
                                    onClick={this.resetForm}
                                >
                                    Cancel
                                </button>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
