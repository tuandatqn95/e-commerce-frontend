import React, { Component } from "react";

class UserList extends Component {
    render() {
        const { isFormOpen, size = 12 } = this.props;

        return (
            <div className={`col-md-${size}`}>
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="pull-left">
                            <h4 className="card-title ">UserList</h4>
                            <p className="card-category" />
                        </div>

                        <div className="nav nav-tabs pull-right">
                            <div className="nav-item">
                                <a  
                                    href="#"
                                    style={{ paddingTop: 2, paddingBottom: 2 }}
                                    className={`nav-link ${isFormOpen &&
                                        "active"}`}
                                    onClick={() => this.props.onToggleForm()}
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
                                        <th>ID</th>
                                        <th style={{ width: "34%" }}>Name</th>
                                        <th style={{ width: "34%" }}>Email</th>
                                        <th style={{ width: "34%" }}>Description</th>
                                        <th className="text-center">Image</th>
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
