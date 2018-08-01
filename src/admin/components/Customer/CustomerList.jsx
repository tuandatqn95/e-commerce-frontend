import React, { Component } from "react";

class CustomerList extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="pull-left">
                            <h4 className="card-title ">Customers</h4>
                            <p className="card-category" />
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

export default CustomerList;
