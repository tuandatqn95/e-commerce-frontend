import React, { Component } from "react";
import {
    modalChangePasswordId,
    modalConfirmId,
    modalUserProfileId
} from "../../constants/ModalId";
class UserItem extends Component {
    onDeleteUser = () => {
        this.props.onDeleteUser(this.props.user);
    };
    onEditUser = () => {
        this.props.onEditUser(this.props.user);
    };
    render() {
        const { name, email, phone, address } = this.props.user;
        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        data-toggle="modal"
                        href={`#${modalUserProfileId}`}
                        onClick={this.onEditUser}
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
                        href={`#${modalChangePasswordId}`}
                        onClick={this.onEditUser}
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
                        data-toggle="modal"
                        href={`#${modalConfirmId}`}
                        onClick={this.onEditUser}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserItem;
