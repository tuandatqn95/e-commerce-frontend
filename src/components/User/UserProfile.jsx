import React, { Component } from "react";
import { Styles } from "../../constants/Styles";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        const { id, name, email, phone, address } = this.props.user;
        this.state = {
            isFocusing: "",
            isEditing: false,
            id: id,
            name: name,
            email: email,
            phone: phone,
            address: address
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
        let { name, email, phone, address } = this.props.user;
        this.setState({
            name: name,
            email: email,
            phone: phone,
            address: address
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            this.props.onSubmitUser({
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                hashPassword: this.props.user.hashPassword,
                created_at: this.props.user.created_at,
                updated_at: this.props.user.updated_at,
                __v: this.props.user.__v
            });
            this.onReset();
        }
    };

    changeEditing = () => {
        if (this.state.isEditing) {
            this.resetForm();
        }
        this.setState({ isEditing: !this.state.isEditing });
    };

    onReset = () => {
        this.resetForm();
        this.changeEditing();
    };

    render() {
        const { id, name, email, phone, address, isEditing } = this.state;
        const { modalId } = this.props;
        const Image = (
            <img
                className="img-raised rounded-circle img-fluid"
                alt=""
                style={Styles.circleImage}
                src="http://www.tombakintan.com/frontend/assets/round-account-button-with-user-inside.png"
            />
        );
        return (
            <div className="modal fade" id={modalId}>
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
                                Profile Information
                            </h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit} onReset={this.onReset}>
                            <div className="modal-body">
                                <div className="container text-center">
                                    <div className="avatar">{Image}</div>
                                    <h3>
                                        <b>{name}</b>
                                    </h3>
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>ID: </td>
                                            <td>{id}</td>
                                        </tr>
                                        <tr hidden={isEditing ? false : true}>
                                            <td>Name: </td>
                                            <td>
                                                <input
                                                    name="name"
                                                    className="form-control"
                                                    type="text"
                                                    value={name}
                                                    onChange={
                                                        this.onHandleChange
                                                    }
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Email: </td>
                                            <td>
                                                <input
                                                    name="email"
                                                    className="form-control"
                                                    type="email"
                                                    disabled={
                                                        isEditing ? false : true
                                                    }
                                                    value={email}
                                                    onChange={
                                                        this.onHandleChange
                                                    }
                                                    onFocus={this.onHandleFocus}
                                                    onBlur={this.onBlurHandle}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Phone: </td>
                                            <td>
                                                <input
                                                    name="phone"
                                                    className="form-control"
                                                    type="text"
                                                    disabled={
                                                        isEditing ? false : true
                                                    }
                                                    value={phone}
                                                    onChange={
                                                        this.onHandleChange
                                                    }
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Address: </td>
                                            <td>
                                                <input
                                                    name="address"
                                                    className="form-control"
                                                    type="text"
                                                    disabled={
                                                        isEditing ? false : true
                                                    }
                                                    value={address}
                                                    onChange={
                                                        this.onHandleChange
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-primary pull-right"
                                data-dismiss="modal"
                                hidden={isEditing ? false : true}
                                onClick={this.onSubmit}
                            >
                                Update
                            </button>
                            <button
                                className="btn btn-success pull-right"
                                onClick={this.changeEditing}
                            >
                                {isEditing ? "Cancel" : "Edit"}
                            </button>
                            <button
                                type="reset"
                                className="btn btn-default pull-right"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
