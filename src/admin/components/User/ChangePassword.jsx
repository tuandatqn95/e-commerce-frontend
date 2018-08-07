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
        this.props.onToggleModal();
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            const { oldPassword, newPassword } = this.state;
            this.props.onUpdatePassword(oldPassword, newPassword);
        }
        this.resetForm();
    };

    render() {
        const { isShow } = this.props;
        const { oldPassword, newPassword, confPassword } = this.state;
        return (
            <div
                className={`swal2-container swal2-fade ${
                    isShow ? "swal2-in" : ""
                }`}
                style={{ overflowY: "auto" }}
            >
                <div
                    className="swal2-modal swal2-show"
                    style={{
                        display: isShow ? "block" : "none",
                        width: 536,
                        padding: 20,
                        background:
                            "rgb(255, 255, 255) none repeat scroll 0% 0%",
                        minHeight: "332px"
                    }}
                    tabIndex="-1"
                >
                    <h3>Change password</h3>
                    <div className="swal2-content" style={{ display: "block" }}>
                        <form
                            class="form-horizontal"
                            onSubmit={this.onSubmit}
                            onReset={this.resetForm}
                        >
                            <div class="row">
                                <label class="col-md-4 col-form-label">
                                    Old password
                                </label>
                                <div class="col-md-8">
                                    <div class="form-group has-default">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="oldPassword"
                                            value={oldPassword}
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-4 col-form-label">
                                    New password
                                </label>
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="newPassword"
                                            value={newPassword}
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-4 col-form-label">
                                    Confirm password
                                </label>
                                <div class="col-md-8">
                                    <div class="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confPassword"
                                            value={confPassword}
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr
                                className="swal2-spacer"
                                style={{ display: "block" }}
                            />
                            <button
                                type="submit"
                                className="swal2-confirm btn btn-success"
                            >
                                Change
                            </button>
                            <button
                                type="reset"
                                className="swal2-cancel btn btn-danger"
                                style={{ display: "inline-block" }}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
