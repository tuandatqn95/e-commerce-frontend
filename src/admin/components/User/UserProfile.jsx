import React, { Component } from "react";
import { Styles } from "../../constants/Styles";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusing: "",
            isEditing: false,
            isShow: false,
            id: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            avatarURL: default_avatar_encode_base64
        };
    }
    onRemoveAvatar = () => {
        this.setState({ avatarURL: default_avatar_encode_base64 });
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
                avatarURL: URL.createObjectURL(target.files[0])
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
        const { name, email, phone, address } = this.props.selectedUser;
        this.setState({
            name,
            email,
            phone,
            address,
            avatarURL: default_avatar_encode_base64
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            const { id, name, email, phone, address } = this.state;
            this.props.onSubmitUser({
                id,
                name,
                email,
                phone,
                address
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
                src={avatarURL}
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
                                        {avatarURL !==
                                        default_avatar_encode_base64 ? (
                                            <span>Change</span>
                                        ) : (
                                            <span>Add Photo</span>
                                        )}

                                        <input
                                            type="file"
                                            onChange={this.onHandleChange}
                                        />
                                        <div className="ripple-container" />
                                    </span>
                                    <button
                                        hidden={
                                            avatarURL ===
                                            default_avatar_encode_base64
                                        }
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
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>
                                        {isEditing ? (
                                            <input
                                                name="email"
                                                className="form-control"
                                                type="email"
                                                value={email}
                                                onChange={this.onHandleChange}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                            />
                                        ) : (
                                            <div className="float-left">
                                                {email}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phone: </td>
                                    <td>
                                        {isEditing ? (
                                            <input
                                                name="phone"
                                                className="form-control"
                                                type="text"
                                                value={phone}
                                                onChange={this.onHandleChange}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                            />
                                        ) : (
                                            <div className="float-left">
                                                {phone}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address: </td>
                                    <td>
                                        {isEditing ? (
                                            <input
                                                name="address"
                                                className="form-control"
                                                type="text"
                                                value={address}
                                                onChange={this.onHandleChange}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                            />
                                        ) : (
                                            <div className="float-left">
                                                {address}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td />
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

const default_avatar_encode_base64 =
    "data:image/jpeg;base64,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EGA5EFn3en9jPfYajbJxmtQ5ATDvpo0auVfY2Nos+wv7CB6XAMuByA3U+sbm/gQGNkwAfF9zoVHGCc96WAGWxyXAciAywG5ubcVkCtmypCwHgLTQWIid7W17Bw6EAMsB2Yv+YFCG0kpKnAB4WI5UM+gPYry/n4DHYS3isU2K8/eqDVMW51erlFNDAPxAtmv0qwAbe6MHdbHwSwmwPLbcEI1H4+gPRmUILfEVgB8qDR3VvmLUnwRYdbA8DgGWAzEcj2NvPNq/BwDflyPUjMfDan9RBVjjhfOYFi5fveYQiMeSR9Gj0Sj+vz99FJ1Wy1E1AH9j0tl3J/73f/whlhaXjBvOYxFgeWy5+dnY3Io/fvRRtDud2BtbpQD4gSqsbm9tx7/9y+/j1MkTMRgMBFh+MQGWA5EboRyBwKYIgJ+SgWM8Hpdb43FOQ26vwS8jwHIgsmzAhgiAR2GfwePSiYsDYUMEwKOyz+BxCbAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBArQiwAADUigALAECtCLAAANSKAAsAQK0IsAAA1IoACwBAjUT8/2L8QoMHC+BxAAAAAElFTkSuQmCC";
