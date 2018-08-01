import React, { Component } from "react";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            phone: "",
            address: ""
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
            name: "",
            email: "",
            password: "",
            phone: "",
            address: ""
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            this.props.onSubmitUser({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                address: this.state.address
            });
            this.onReset();
        }
    };

    onReset = () => {
        this.resetForm();
        this.props.onToggleUserForm();
    };
    render() {
        const { isShow } = this.props;
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
                        width: 500,
                        padding: 20,
                        background:
                            "rgb(255, 255, 255) none repeat scroll 0% 0%",
                        minHeight: "332"
                    }}
                    tabIndex="-1"
                >
                    <h3>Add User</h3>
                    <div className="swal2-content" style={{ display: "block" }}>
                        <form
                            className="form"
                            onSubmit={this.onSubmit}
                            onReset={this.onReset}
                        >
                            <div className="card-body">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="material-icons">face</i>
                                    </span>
                                    <div
                                        style={{ width: "80%" }}
                                        className={`form-group bmd-form-group ${this
                                            .state.name && "is-filled"} ${this
                                            .state.isFocusing === "name" &&
                                            "is-focused"}`}
                                    >
                                        <h5 className="bmd-label-floating">
                                            User Name
                                        </h5>
                                        <input
                                            name="name"
                                            className="form-control"
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.onHandleChange}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="material-icons">mail</i>
                                    </span>
                                    <div
                                        style={{ width: "80%" }}
                                        className={`form-group bmd-form-group ${this
                                            .state.email && "is-filled"} ${this
                                            .state.isFocusing === "email" &&
                                            "is-focused"}`}
                                    >
                                        <h5 className="bmd-label-floating">
                                            Email
                                        </h5>
                                        <input
                                            name="email"
                                            className="form-control"
                                            type="email"
                                            value={this.state.email}
                                            onChange={this.onHandleChange}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="material-icons">
                                            lock_outline
                                        </i>
                                    </span>
                                    <div
                                        style={{ width: "80%" }}
                                        className={`form-group bmd-form-group ${this
                                            .state.password &&
                                            "is-filled"} ${this.state
                                            .isFocusing === "password" &&
                                            "is-focused"}`}
                                    >
                                        <h5 className="bmd-label-floating">
                                            Password
                                        </h5>
                                        <input
                                            name="password"
                                            className="form-control"
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.onHandleChange}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="material-icons">phone</i>
                                    </span>
                                    <div
                                        style={{ width: "80%" }}
                                        className={`form-group bmd-form-group ${this
                                            .state.phone && "is-filled"} ${this
                                            .state.isFocusing === "phone" &&
                                            "is-focused"}`}
                                    >
                                        <h5 className="bmd-label-floating">
                                            Phone
                                        </h5>
                                        <input
                                            name="phone"
                                            className="form-control"
                                            type="text"
                                            value={this.state.phone}
                                            onChange={this.onHandleChange}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="material-icons">
                                                home
                                            </i>
                                        </span>
                                        <div
                                            style={{ width: "80%" }}
                                            className={`form-group bmd-form-group ${this
                                                .state.address &&
                                                "is-filled"} ${this.state
                                                .isFocusing === "address" &&
                                                "is-focused"}`}
                                        >
                                            <h5 className="bmd-label-floating">
                                                Address
                                            </h5>
                                            <input
                                                name="address"
                                                className="form-control"
                                                type="text"
                                                value={this.state.address}
                                                onChange={this.onHandleChange}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="swal2-confirm btn btn-primary"
                            >
                                Save
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

export default UserForm;
