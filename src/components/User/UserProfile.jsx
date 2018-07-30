import React, { Component } from "react";
import { Styles } from "../../constants/Styles";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusing: "",
            isEditing: false,
            isShow: false,
            user: undefined,
            id: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            avatarURL: undefined
        };
    }
    onRemoveAvatar = () => {
        this.setState({ avatarURL: undefined });
    };
    onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
        if (target.files)
            this.setState({
                avatarURL: URL.createObjectURL(event.target.files[0])
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
        this.setState({ isEditing: false, isShow: false });
        this.props.onClearSelectedUser();
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.selectedUser) {
            this.setState({
                isShow: true,
                user: nextProps.selectedUser,
                id: nextProps.selectedUser.id,
                name: nextProps.selectedUser.name,
                email: nextProps.selectedUser.email,
                phone: nextProps.selectedUser.phone,
                address: nextProps.selectedUser.address
            });
        } else {
            this.setState({ isShow: false });
        }
    };

    render() {
        const {
            name,
            email,
            phone,
            address,
            isEditing,
            isShow,
            avatarURL
        } = this.state;
        const Image = (
            <img
                className="img-raised rounded-circle img-fluid"
                alt="avatar"
                style={Styles.circleImage}
                src={this.state.avatarURL}
            />
        );
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
                    <h3>Profile Information</h3>
                    <div className="swal2-content" style={{ display: "block" }}>
                        <div className="container text-center">
                            <div className="text-center">
                                {Image}
                                <div hidden={!isEditing}>
                                    <span className="btn btn-primary btn-round btn-sm btn-file">
                                        {avatarURL ? (
                                            <span>Change</span>
                                        ) : (
                                            <span hidden={avatarURL}>
                                                Add Photo
                                            </span>
                                        )}

                                        <input
                                            type="file"
                                            onChange={this.onHandleChange}
                                        />
                                        <div className="ripple-container" />
                                    </span>
                                    <button
                                        hidden={!avatarURL}
                                        className="btn btn-danger btn-round btn-sm"
                                        onClick={this.onRemoveAvatar}
                                    >
                                        <i className="fa fa-times" /> Remove
                                    </button>
                                </div>
                            </div>
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
                                            onChange={this.onHandleChange}
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
                                            disabled={isEditing ? false : true}
                                            value={email}
                                            onChange={this.onHandleChange}
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
                                            disabled={isEditing ? false : true}
                                            value={phone}
                                            onChange={this.onHandleChange}
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
                                            disabled={isEditing ? false : true}
                                            value={address}
                                            onChange={this.onHandleChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr className="swal2-spacer" style={{ display: "block" }} />
                    <button
                        className="swal2-confirm btn btn-primary"
                        hidden={isEditing ? false : true}
                        onClick={this.onSubmit}
                    >
                        Update Profile
                    </button>
                    <button
                        className="swal2-confirm btn btn-success"
                        onClick={this.changeEditing}
                    >
                        {isEditing ? "Cancel" : "Edit"}
                    </button>
                    <button
                        className="swal2-cancel btn btn-danger"
                        onClick={this.onReset}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }
}

export default UserProfile;
