import React, { Component } from "react";

class UserList extends Component {
    onToggleUserForm = () => {
        this.props.onToggleUserForm();
    };
    render() {
        const { isFormOpen } = this.props;
        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="pull-left">
                            <h4 className="card-title ">Users</h4>
                            <p className="card-category" />
                        </div>

                        <div className="nav nav-tabs pull-right">
                            <div className="nav-item">
                                <a
                                    style={{ paddingTop: 2, paddingBottom: 2 }}
                                    className={`nav-link ${isFormOpen &&
                                        "active"}`}
                                    onClick={this.onToggleUserForm}
                                >
                                    <i className="material-icons">
                                        {isFormOpen ? "cancel" : "add_circle"}
                                    </i>{" "}
                                    {isFormOpen ? "Close Form" : "Add User"}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className=" text-primary">
                                    <tr>
                                        <th style={{ width: "25%" }}>Name</th>
                                        <th style={{ width: "25%" }}>Email</th>
                                        <th style={{ width: "25%" }}>Phone</th>
                                        <th style={{ width: "25%" }}>
                                            Address
                                        </th>
                                        <th />
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>{this.props.children}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;
