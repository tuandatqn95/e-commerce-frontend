import React, { Component } from "react";

class UserItem extends Component {
    onDeleteUser = () => {
        this.props.onDeleteUser(this.props.user);
    };
    onToggleModalConfirm = () => {
        this.props.onEditUser(this.props.user);
        this.props.onToggleModalConfirm();
    };
    onToggleUserProfile = () => {
        this.props.onEditUser(this.props.user);
        this.props.onToggleUserProfile();
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
                        onClick={this.onToggleUserProfile}
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
                        onClick={this.onToggleModalConfirm}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserItem;
