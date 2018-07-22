import React, { Component } from "react";
import UserProfile from "./UserProfile";

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
                    <div className="modal fade" id={`modal-confirm-${id}`}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Confirm</h4>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h5>{`Are you sure to delete ${
                                        this.props.user.name
                                    } ?`}</h5>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-default"
                                        data-toggle="modal"
                                        href={`#modal-confirm-${id}`}
                                        onClick={this.onDeleteUser}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        className="btn btn-primary"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <UserProfile user={this.props.user} />
                </td>
            </tr>
        );
    }
}

export default UserItem;
