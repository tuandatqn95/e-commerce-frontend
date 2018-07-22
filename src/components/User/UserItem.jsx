import React, { Component } from "react";
import UserProfile from "./UserProfile";
import ModalConfirm from "./ModalComfirm";

class UserItem extends Component {
    onDeleteUser = () => {
        this.props.onDeleteUser(this.props.user.id);
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
                    <ModalConfirm
                        user={this.props.user}
                        onDeleteUser={this.onDeleteUser}
                    />
                </td>
                <td>
                    <UserProfile user={this.props.user} />
                </td>
            </tr>
        );
    }
}

export default UserItem;
