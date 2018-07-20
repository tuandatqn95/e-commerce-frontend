import React, { Component } from "react";
import productForm from "./ProductForm";
import ProductForm from "./ProductForm";

class ProductList extends Component {
    render() {
        const { isFormOpen, size = 12 } = this.props;

        return (
            <div className={`col-md-${size}`}>
                 
                <div className="card">
                  
                    <div className="card-header card-header-primary">
                        <div className="pull-left">
                            <h4 className="card-title ">ProductList</h4>
                            <p className="card-category" />
                        </div>

                        <div className="nav nav-tabs pull-right">
                            <div className="nav-item">
                                    <button className="btn btn-block btn-info" data-toggle="modal" data-target="#myModal">
                                        <i className="material-icons">library_books</i>
                                        Classic
                                        <div className="ripple-container"></div>
                                    </button>

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
