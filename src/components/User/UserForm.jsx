import React, { Component } from "react";
import { Styles } from "../../constants/Styles";
import { modalUserFormId } from "../../constants/ModalId";

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
        this.props.onCloseForm();
    };

    render() {
        return (
            <div className="modal fade " id={modalUserFormId}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div
                            className="modal-header card-header-primary"
                            style={Styles.backgroundModalHeader}
                        >
                            <h4
                                className="modal-title"
                                style={Styles.colorModalHeader}
                            >
                                Add User
                            </h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => this.onReset()}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form
                                className="form"
                                onSubmit={this.onSubmit}
                                onReset={this.onReset}
                            >
                                <div className="card-body">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <i className="material-icons">
                                                face
                                            </i>
                                        </span>
                                        <div
                                            className={`col-md-10 form-group bmd-form-group ${this
                                                .state.name &&
                                                "is-filled"} ${this.state
                                                .isFocusing === "name" &&
                                                "is-focused"}`}
                                        >
                                            <label className="bmd-label-floating">
                                                User Name
                                            </label>
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
                                            <i className="material-icons">
                                                mail
                                            </i>
                                        </span>
                                        <div
                                            className={`col-md-10 form-group bmd-form-group ${this
                                                .state.email &&
                                                "is-filled"} ${this.state
                                                .isFocusing === "email" &&
                                                "is-focused"}`}
                                        >
                                            <label className="bmd-label-floating">
                                                Email
                                            </label>
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
                                            className={`col-md-10 form-group bmd-form-group ${this
                                                .state.password &&
                                                "is-filled"} ${this.state
                                                .isFocusing === "password" &&
                                                "is-focused"}`}
                                        >
                                            <label className="bmd-label-floating">
                                                Password
                                            </label>
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
                                            <i className="material-icons">
                                                phone
                                            </i>
                                        </span>
                                        <div
                                            className={`col-md-10 form-group bmd-form-group ${this
                                                .state.phone &&
                                                "is-filled"} ${this.state
                                                .isFocusing === "phone" &&
                                                "is-focused"}`}
                                        >
                                            <label className="bmd-label-floating">
                                                Phone
                                            </label>
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
                                                className={`col-md-10 form-group bmd-form-group ${this
                                                    .state.address &&
                                                    "is-filled"} ${this.state
                                                    .isFocusing === "address" &&
                                                    "is-focused"}`}
                                            >
                                                <label className="bmd-label-floating">
                                                    Address
                                                </label>
                                                <input
                                                    name="address"
                                                    className="form-control"
                                                    type="text"
                                                    value={this.state.address}
                                                    onChange={
                                                        this.onHandleChange
                                                    }
                                                    onFocus={this.onHandleFocus}
                                                    onBlur={this.onBlurHandle}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="submit"
                                        className="btn btn-primary pull-right"
                                        data-toggle="modal"
                                        href={`#${modalUserFormId}`}
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-default pull-right"
                                        data-dismiss="modal"
                                        onClick={() => this.onReset()}
                                    >
                                        Cancel
                                    </button>
                                    <div className="clearfix" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserForm;
