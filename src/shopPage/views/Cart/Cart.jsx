import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
    render() {
        return (
            <div className="cart-main-area ptb-100 ptb-sm-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            {/* Form Start */}
                            <form action="#">
                                {/* Table Content Start */}
                                <div className="table-content table-responsive mb-45">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">
                                                    Image
                                                </th>
                                                <th className="product-name">
                                                    Product
                                                </th>
                                                <th className="product-price">
                                                    Price
                                                </th>
                                                <th className="product-quantity">
                                                    Quantity
                                                </th>
                                                <th className="product-subtotal">
                                                    Total
                                                </th>
                                                <th className="product-remove">
                                                    Remove
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img
                                                            src="img/products/13.jpg"
                                                            alt="cart-image"
                                                        />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">
                                                        dictum idrisus
                                                    </a>
                                                </td>
                                                <td className="product-price">
                                                    <span className="amount">
                                                        £165.00
                                                    </span>
                                                </td>
                                                <td className="product-quantity">
                                                    <input
                                                        defaultValue={1}
                                                        type="number"
                                                    />
                                                </td>
                                                <td className="product-subtotal">
                                                    £165.00
                                                </td>
                                                <td className="product-remove">
                                                    {" "}
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-times"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img
                                                            src="img/products/23.jpg"
                                                            alt="cart-image"
                                                        />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">
                                                        Carte Postal Clock
                                                    </a>
                                                </td>
                                                <td className="product-price">
                                                    <span className="amount">
                                                        £50.00
                                                    </span>
                                                </td>
                                                <td className="product-quantity">
                                                    <input
                                                        defaultValue={1}
                                                        type="number"
                                                    />
                                                </td>
                                                <td className="product-subtotal">
                                                    £50.00
                                                </td>
                                                <td className="product-remove">
                                                    {" "}
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-times"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Table Content Start */}
                                <div className="row">
                                    {/* Cart Button Start */}
                                    <div className="col-md-8 col-sm-12">
                                        <div className="buttons-cart">
                                            <input
                                                defaultValue="Update Cart"
                                                type="submit"
                                            />
                                            <a href="#">Continue Shopping</a>
                                        </div>
                                    </div>
                                    {/* Cart Button Start */}
                                    {/* Cart Totals Start */}
                                    <div className="col-md-4 col-sm-12">
                                        <div className="cart_totals float-md-right text-md-right">
                                            <h2>Cart Totals</h2>
                                            <br />
                                            <table className="float-md-right">
                                                <tbody>
                                                    <tr className="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td>
                                                            <span className="amount">
                                                                $215.00
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Total</th>
                                                        <td>
                                                            <strong>
                                                                <span className="amount">
                                                                    $215.00
                                                                </span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="wc-proceed-to-checkout">
                                                <a href="#">
                                                    Proceed to Checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Cart Totals End */}
                                </div>
                                {/* Row End */}
                            </form>
                            {/* Form End */}
                        </div>
                    </div>
                    {/* Row End */}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Cart);
