import React, { Component } from "react";

class UserItem extends Component {
    onDeleteUser = () => {
        this.props.onDeleteUser(this.props.user.id);
    };
    onShowProfile = () => {
        // TODO: show user profile
        console.log("onShowProfile");
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
                        onClick={this.onShowProfile}
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
                            href={`#${id}`}
                        >
                            delete
                        </i>
                    </button>
                </td>
                <td>
                    <div className="modal fade" id={id}>
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
                                        href={`#${id}`}
                                        onClick={this.onDeleteUser}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default UserItem;
