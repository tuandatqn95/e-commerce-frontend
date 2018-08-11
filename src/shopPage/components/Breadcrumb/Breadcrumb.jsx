import React, { Component } from "react";

class Breadcrumb extends Component {
    render() {
        return (
            <div className="breadcrumb-area mt-30">
                <div className="container">
                    <div className="breadcrumb">
                        <ul className="d-flex align-items-center">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="shop.html">Shop</a>
                            </li>
                            <li className="active">
                                <a href="product.html">Products</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Container End */}
            </div>
        );
    }
}

export default Breadcrumb;
