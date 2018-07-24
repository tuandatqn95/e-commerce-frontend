import React, { Component } from "react";

class ProductList extends Component {


    render() {
        const { isFormOpen } = this.props;
        return (
            <div className={`col-md-12`}>
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="pull-left">
                            <h4 className="card-title ">ProductList</h4>
                            <p className="card-category" />
                        </div>
                        <div className="nav nav-tabs pull-right">
                            <div className="nav-item">
                                    <a
                                        href="#"
                                        style={{ paddingTop: 2, paddingBottom: 2 }}
                                        className={`nav-link ${isFormOpen &&
                                            "active"}`}
                                        onClick={this.props.onShowForm}
                                    >
                                        <i className="material-icons">add_circle</i>
                                        New Product
                                        <div className="ripple-container"></div>
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
                                        <th style={{ width: "33%" }}>Name</th>
                                        <th style={{ width: "67%" }}>
                                            Description
                                        </th>
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

export default ProductList;
