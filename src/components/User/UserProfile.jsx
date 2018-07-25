import React, { Component } from "react";
import { Styles } from "../../constants/Styles";
import { modalUserProfileId } from "../../constants/ModalId";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusing: "",
            isEditing: false,
            user: undefined,
            id: "",
            name: "",
            email: "",
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
        const { user } = this.state;
        this.setState({
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
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
                address: this.state.address
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
    componentWillReceiveProps = nextProps => {
        if (nextProps.user) {
            this.setState({
                user: nextProps.user,
                id: nextProps.user.id,
                name: nextProps.user.name,
                email: nextProps.user.email,
                phone: nextProps.user.phone,
                address: nextProps.user.address
            });
        }
    };
    render() {
        const { name, email, phone, address, isEditing } = this.state;
        const Image = (
            <img
                className="img-raised rounded-circle img-fluid"
                alt=""
                style={Styles.circleImage}
                src="http://www.tombakintan.com/frontend/assets/round-account-button-with-user-inside.png"
            />
        );
        return (
            <div className="modal fade" id={modalUserProfileId}>
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
