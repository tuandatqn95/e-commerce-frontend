import React, { Component } from "react";
import UserProfile from "./UserProfile";
import ModalConfirm from "./ModalComfirm";
import ChangePassword from "./ChangePassword";

class UserItem extends Component {
    onDeleteUser = () => {
        this.props.onDeleteUser(this.props.user);
    };
    render() {
        const { id, name, email, phone } = this.props.user;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        data-toggle="modal"
                        href={`#modal-profile-${id}`}
                    >
                        <i className="material-icons">library_books</i>
                    </button>{" "}
                    <button
                        type="button"
                        className="btn btn-warning"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        data-toggle="modal"
                        href={`#modal-change-password-${id}`}
                    >
                        <i className="material-icons">edit</i>
                    </button>{" "}
                    <button
                        type="button"
                        className="btn btn-danger"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                    >
                        <i
                            className="material-icons"
                            data-toggle="modal"
                            href={`#modal-confirm-${id}`}
                        >
                            delete
                        </i>
                    </button>
                </td>
                <td>
                    <ChangePassword
                        user={this.props.user}
                        modalId={`modal-change-password-${id}`}
                    />
                </td>
                <td>
                    <ModalConfirm
                        modalId={`modal-confirm-${id}`}
                        name={name}
                        onConfirm={this.onDeleteUser}
                    />
                </td>
                <td>
                    <UserProfile
                        user={this.props.user}
                        modalId={`modal-profile-${id}`}
                        onSubmitUser={this.props.onSubmitUser}
                    />
                </td>
            </tr>
        );
    }
}

export default UserItem;
