import React, { Component } from "react";
import { Styles } from "../../constants/Styles";
import ChangePassword from "./ChangePassword";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChangePassword: false
        };
    }
    onChangePassword = () => {
        if (this.state.isChangePassword) {
            console.log("Change password");
        } else {
            this.changeState();
        }
    };
    changeState = () => {
        this.setState({
            isChangePassword: !this.state.isChangePassword
        });
    };
    render() {
        const { id, name, email, phone, address } = this.props.user;
        const { isChangePassword } = this.state;
        const Image = (
            <img
                className="img-raised rounded-circle img-fluid"
                alt=""
                style={Styles.circleImage}
                src="http://www.tombakintan.com/frontend/assets/round-account-button-with-user-inside.png"
            />
        );
        return (
            <div className="modal fade" id={`modal-profile-${id}`}>
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
                                    <tr>
                                        <td>Email: </td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone: </td>
                                        <td>{phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Address: </td>
                                        <td>{address}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {isChangePassword ? <ChangePassword /> : ""}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-primary pull-right"
                                onClick={this.onChangePassword}
                            >
                                Change Password
                            </button>
                            {isChangePassword ? (
                                <button
                                    className="btn btn-default pull-right"
                                    onClick={this.changeState}
                                >
                                    Cancel
                                </button>
                            ) : (
                                ""
                            )}
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
