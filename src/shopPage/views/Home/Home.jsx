import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        return (
           <React.Fragment>
                <div className="image-banner pb-30 off-white-bg">
                    <div className="container">
                        <div className="col-img">
                            <a href="#">
                                <img
                                    src="/shoppage/img/banner/h1-banner.jpg"
                                    alt="image banner"
                                />
                            </a>
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Brand Banner Area End Here */}
                {/* Trending Products End Here */}
                <div className="trendig-product pb-10 off-white-bg">
                    <div className="container">
                        <div className="trending-box">
                            <div className="title-box">
                                <h2>Trending Styles</h2>
                            </div>
                            <div className="product-list-box">
                                {/* Arrivals Product Activation Start Here */}
                                <div className="trending-pro-active owl-carousel">
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/1.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/2.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Work Lamp Silver Proin
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $320.45
                                                    </span>
                                                    <del className="prev-price">
                                                        $330.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    15
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/3.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/4.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Gpoly and Bark Eames
                                                        Style
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $150.30
                                                    </span>
                                                    <del className="prev-price">
                                                        $105.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    22
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/5.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/6.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Poly and Bark Vortex
                                                        Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $90.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/8.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/9.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Eames and Bark Style
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $90.45
                                                    </span>
                                                    <del className="prev-price">
                                                        $100.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    20
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/11.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/12.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Eames and Vortex Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $160.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/15.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/16.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Bark Vortex Side Eames
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $84.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/13.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/14.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Poly and Bark Vortex
                                                        Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $95.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/1.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/7.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Poly and Bark Vortex
                                                        Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $84.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                </div>
                                {/* Arrivals Product Activation End Here */}
                            </div>
                            {/* main-product-tab-area*/}
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Trending Products End Here */}
                {/* Trending Products End Here */}
                <div className="trendig-product pb-100 off-white-bg pb-sm-60">
                    <div className="container">
                        <div className="trending-box">
                            <div className="title-box">
                                <h2>Best Selling</h2>
                            </div>
                            <div className="product-list-box">
                                {/* Arrivals Product Activation Start Here */}
                                <div className="trending-pro-active owl-carousel">
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/17.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/18.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Eames and Vortex Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $160.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/19.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/20.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Work Lamp Silver Proin
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $320.45
                                                    </span>
                                                    <del className="prev-price">
                                                        $330.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    15
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/21.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/22.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Gpoly and Bark Eames
                                                        Style
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $150.30
                                                    </span>
                                                    <del className="prev-price">
                                                        $105.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    22
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/22.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/23.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Poly and Bark Vortex
                                                        Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $90.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/8.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/9.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Eames and Bark Style
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $90.45
                                                    </span>
                                                    <del className="prev-price">
                                                        $100.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    20
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/15.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/16.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Bark Vortex Side Eames
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $84.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/13.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/14.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Poly and Bark Vortex
                                                        Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $95.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                    {/* Single Product Start */}
                                    <div className="single-product">
                                        {/* Product Image Start */}
                                        <div className="pro-img">
                                            <a href="product.html">
                                                <img
                                                    className="primary-img"
                                                    src="/shoppage/img/products/1.jpg"
                                                    alt="single-product"
                                                />
                                                <img
                                                    className="secondary-img"
                                                    src="/shoppage/img/products/7.jpg"
                                                    alt="single-product"
                                                />
                                            </a>
                                            <a
                                                href="#"
                                                className="quick_view"
                                                data-toggle="modal"
                                                data-target="#myModal"
                                                title="Quick View"
                                            >
                                                <i className="lnr lnr-magnifier" />
                                            </a>
                                        </div>
                                        {/* Product Image End */}
                                        {/* Product Content Start */}
                                        <div className="pro-content">
                                            <div className="pro-info">
                                                <h4>
                                                    <a href="product.html">
                                                        Poly and Bark Vortex
                                                        Side
                                                    </a>
                                                </h4>
                                                <p>
                                                    <span className="price">
                                                        $84.45
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Product Content End */}
                                    </div>
                                    {/* Single Product End */}
                                </div>
                                {/* Arrivals Product Activation End Here */}
                            </div>
                            {/* main-product-tab-area*/}
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Trending Products End Here */}
                {/* Hot Deal Products Start Here */}
                <div className="hot-deal-products pt-100 pt-sm-60">
                    <div className="container">
                        <div className="all-border">
                            {/* Product Title Start */}
                            <div className="section-ttitle mb-30">
                                <h2>hot deals </h2>
                            </div>
                            {/* Product Title End */}
                            {/* Hot Deal Product Activation Start */}
                            <div className="hot-deal-active3 owl-carousel">
                                <div className="row">
                                    {/* Main Thumbnail Image Start */}
                                    <div className="col-lg-6 mb-all-40 hot-product2 ">
                                        {/* Thumbnail Large Image start */}
                                        <div className="tab-content">
                                            <div
                                                id="thumb1"
                                                className="tab-pane fade show active"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/35.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/35.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                id="thumb2"
                                                className="tab-pane fade"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/13.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/13.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                id="thumb3"
                                                className="tab-pane fade"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/15.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/15.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                id="thumb4"
                                                className="tab-pane fade"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/4.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/4.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Thumbnail Large Image End */}
                                        {/* Thumbnail Image End */}
                                        <div className="product-thumbnail">
                                            <div
                                                className="pro-tab-menu nav tabs-area"
                                                role="tablist"
                                            >
                                                <a
                                                    className="active"
                                                    data-toggle="tab"
                                                    href="#thumb1"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/35.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                                <a
                                                    data-toggle="tab"
                                                    href="#thumb2"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/13.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                                <a
                                                    data-toggle="tab"
                                                    href="#thumb3"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/15.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                                <a
                                                    data-toggle="tab"
                                                    href="#thumb4"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/4.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Thumbnail image end */}
                                    </div>
                                    {/* Main Thumbnail Image End */}
                                    {/* Thumbnail Description Start */}
                                    <div className="col-lg-6 hot-product2">
                                        <div className="thubnail-desc fix">
                                            <div
                                                className="countdown"
                                                data-countdown="2025/03/01"
                                            />
                                            <h3>
                                                <a href="product.html">
                                                    Light Inverted Pendant Qu...
                                                </a>
                                            </h3>
                                            <div className="pro-price mtb-30">
                                                <p>
                                                    <span className="price">
                                                        $90.45
                                                    </span>
                                                    <del className="prev-price">
                                                        $105.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    6
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="mb-30 pro-desc-details">
                                                {" "}
                                                Canon's press material for the
                                                EOS 5D states that it 'defines
                                                (a) new D-SLR category', while
                                                we're not typically too
                                                concerned with marketing talk
                                                this particular statement is
                                                clearly pretty accurate. The EOS
                                                5D is unlike any previous
                                                digital SLR in that it combines
                                                a full-frame (35 mm sized) high
                                                resolution sensor (12.8
                                                megapixels) with a relatively
                                                compact body (slightly larger
                                                than the EOS.
                                            </p>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Thumbnail Description End */}
                                </div>
                                <div className="row">
                                    {/* Main Thumbnail Image Start */}
                                    <div className="col-lg-6 mb-all-40 hot-product2 ">
                                        {/* Thumbnail Large Image start */}
                                        <div className="tab-content">
                                            <div
                                                id="thumb11"
                                                className="tab-pane fade show active"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/21.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/21.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                id="thumb21"
                                                className="tab-pane fade"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/22.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/22.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                id="thumb31"
                                                className="tab-pane fade"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/23.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/23.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                id="thumb41"
                                                className="tab-pane fade"
                                            >
                                                <a
                                                    data-fancybox="images"
                                                    href="img/products/24.jpg"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/24.jpg"
                                                        alt="product-view"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Thumbnail Large Image End */}
                                        {/* Thumbnail Image End */}
                                        <div className="product-thumbnail">
                                            <div
                                                className="pro-tab-menu nav tabs-area"
                                                role="tablist"
                                            >
                                                <a
                                                    className="active"
                                                    data-toggle="tab"
                                                    href="#thumb11"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/21.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                                <a
                                                    data-toggle="tab"
                                                    href="#thumb21"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/22.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                                <a
                                                    data-toggle="tab"
                                                    href="#thumb31"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/23.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                                <a
                                                    data-toggle="tab"
                                                    href="#thumb41"
                                                >
                                                    <img
                                                        src="/shoppage/img/products/24.jpg"
                                                        alt="product-thumbnail"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Thumbnail image end */}
                                    </div>
                                    {/* Main Thumbnail Image End */}
                                    {/* Thumbnail Description Start */}
                                    <div className="col-lg-6 hot-product2">
                                        <div className="thubnail-desc fix">
                                            <div
                                                className="countdown"
                                                data-countdown="2025/03/01"
                                            />
                                            <h3>
                                                <a href="product.html">
                                                    Flos Chasen S2 Suspension{" "}
                                                </a>
                                            </h3>
                                            <div className="pro-price mtb-30">
                                                <p>
                                                    <span className="price">
                                                        $84.45
                                                    </span>
                                                    <del className="prev-price">
                                                        $105.50
                                                    </del>
                                                </p>
                                                <div className="label-product l_sale">
                                                    20
                                                    <span className="symbol-percent">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="mb-30 pro-desc-details">
                                                {" "}
                                                Canon's press material for the
                                                EOS 5D states that it 'defines
                                                (a) new D-SLR category', while
                                                we're not typically too
                                                concerned with marketing talk
                                                this particular statement is
                                                clearly pretty accurate. The EOS
                                                5D is unlike any previous
                                                digital SLR in that it combines
                                                a full-frame (35 mm sized) high
                                                resolution sensor (12.8
                                                megapixels) with a relatively
                                                compact body (slightly larger
                                                than the EOS.
                                            </p>
                                            <div className="pro-actions">
                                                <div className="actions-primary">
                                                    <a
                                                        href="cart.html"
                                                        title="Add to Cart"
                                                    >
                                                        {" "}
                                                        + Add To Cart
                                                    </a>
                                                </div>
                                                <div className="actions-secondary">
                                                    <a
                                                        href="compare.html"
                                                        title="Compare"
                                                    >
                                                        <i className="lnr lnr-sync" />
                                                        <span>
                                                            Add To Compare
                                                        </span>
                                                    </a>
                                                    <a
                                                        href="wishlist.html"
                                                        title="WishList"
                                                    >
                                                        <i className="lnr lnr-heart" />
                                                        <span>
                                                            Add to WishList
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Thumbnail Description End */}
                                </div>
                            </div>
                            {/* Hot Deal Product Active End */}
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Hot Deal Products End Here */}
                {/* Big Banner Start Here */}
                <div className="big-banner mt-100 pb-85 mt-sm-60 pb-sm-45">
                    <div className="container banner-2">
                        <div className="banner-box">
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-1.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-2.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="banner-box">
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-3.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="banner-box">
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-4.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-5.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="banner-box">
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-6.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="banner-box">
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-7.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                            <div className="col-img">
                                <a href="#">
                                    <img
                                        src="/shoppage/img/banner/banner3-8.jpg"
                                        alt="banner 3"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Big Banner End Here */}
                {/* Arrivals Products Area Start Here */}
                <div className="arrivals-product pb-85 pb-sm-45">
                    <div className="container">
                        <div className="main-product-tab-area">
                            <div className="tab-menu mb-25">
                                <div className="section-ttitle">
                                    <h2>New Arrivals</h2>
                                </div>
                                {/* Nav tabs */}
                                <ul className="nav tabs-area" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#fshion"
                                        >
                                            Fashion
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#beauty"
                                        >
                                            Beauty
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#electronics"
                                        >
                                            Sport/Outdoor
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#kids"
                                        >
                                            Living
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#beauty"
                                        >
                                            Food
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#kids"
                                        >
                                            Baby/Kids
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#electronics"
                                        >
                                            Electronics{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Tab Contetn Start */}
                            <div className="tab-content">
                                <div id="fshion" className="tab-pane fade">
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="electronics-pro-active owl-carousel">
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/1.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/2.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Work Lamp Silver
                                                                Proin
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $320.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $400.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            30
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/3.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/4.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Gpoly and Bark
                                                                Eames Style
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $150.30
                                                            </span>
                                                            <del className="prev-price">
                                                                $175.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            10
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/5.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/6.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/8.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/9.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Eames and Bark
                                                                Style
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $180.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $200.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            18
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/11.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/12.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Eames and Vortex
                                                                Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $160.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $190.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            12
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/15.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/16.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Bark Vortex Side
                                                                Eames
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/13.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/14.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/1.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/7.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #fshion End Here */}
                                <div
                                    id="kids"
                                    className="tab-pane fade show active"
                                >
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="electronics-pro-active owl-carousel">
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/42.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/43.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Utensils and
                                                                Knives Block
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/40.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/41.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Terra Xpress HE
                                                                Cooking{" "}
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $300.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            25
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/39.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/38.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Robert Welch
                                                                Knife Block
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $100.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $150.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            30
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/36.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/37.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $90.50
                                                            </span>
                                                            <del className="prev-price">
                                                                $120.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            15
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/35.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/36.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Bark and Vortex
                                                                Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $69.20
                                                            </span>
                                                            <del className="prev-price">
                                                                $145.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/34.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/35.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Compary and Bark
                                                                Vortex Shewe
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/32.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/33.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                kallery kids
                                                                weare
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/1.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/7.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #fshion End Here */}
                                <div id="beauty" className="tab-pane fade">
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="electronics-pro-active owl-carousel">
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/43.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/42.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/41.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/39.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/5.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/6.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/9.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/10.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/11.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/12.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/3.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/4.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/43.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/42.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/1.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/7.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #beauty End Here */}
                                <div id="electronics" className="tab-pane fade">
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="electronics-pro-active owl-carousel">
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/17.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/18.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Flos Chasen S2
                                                                Suspension
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/19.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/20.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Country Squire
                                                                Florist
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/20.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/21.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Concord Fabric
                                                                Single
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/21.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/22.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Poly and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/23.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/24.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Gpoly and Bark
                                                                Eames Style
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/24.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/25.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Vortex and Bark
                                                                Vortex Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                        {/* Double Product Start */}
                                        <div className="double-product">
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/26.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/27.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Bark and Vortex
                                                                Side
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                            {/* Single Product Start */}
                                            <div className="single-product">
                                                {/* Product Image Start */}
                                                <div className="pro-img">
                                                    <a href="product.html">
                                                        <img
                                                            className="primary-img"
                                                            src="/shoppage/img/products/28.jpg"
                                                            alt="single-product"
                                                        />
                                                        <img
                                                            className="secondary-img"
                                                            src="/shoppage/img/products/29.jpg"
                                                            alt="single-product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="quick_view"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        title="Quick View"
                                                    >
                                                        <i className="lnr lnr-magnifier" />
                                                    </a>
                                                </div>
                                                {/* Product Image End */}
                                                {/* Product Content Start */}
                                                <div className="pro-content">
                                                    <div className="pro-info">
                                                        <h4>
                                                            <a href="product.html">
                                                                Electronic and
                                                                Bark Vortex
                                                            </a>
                                                        </h4>
                                                        <p>
                                                            <span className="price">
                                                                $84.45
                                                            </span>
                                                            <del className="prev-price">
                                                                $105.50
                                                            </del>
                                                        </p>
                                                        <div className="label-product l_sale">
                                                            20
                                                            <span className="symbol-percent">
                                                                %
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="pro-actions">
                                                        <div className="actions-primary">
                                                            <a
                                                                href="cart.html"
                                                                title="Add to Cart"
                                                            >
                                                                {" "}
                                                                + Add To Cart
                                                            </a>
                                                        </div>
                                                        <div className="actions-secondary">
                                                            <a
                                                                href="compare.html"
                                                                title="Compare"
                                                            >
                                                                <i className="lnr lnr-sync" />
                                                                <span>
                                                                    Add To
                                                                    Compare
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="wishlist.html"
                                                                title="WishList"
                                                            >
                                                                <i className="lnr lnr-heart" />
                                                                <span>
                                                                    Add to
                                                                    WishList
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Product Content End */}
                                                <span className="sticker-new">
                                                    new
                                                </span>
                                            </div>
                                            {/* Single Product End */}
                                        </div>
                                        {/* Double Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #electronics End Here */}
                            </div>
                            {/* Tab Content End */}
                        </div>
                        {/* main-product-tab-area*/}
                    </div>
                    {/* Container End */}
                </div>
                {/* Arrivals Products Area End Here */}
                {/* Arrivals Products Area Start Here */}
                <div className="second-arrivals-product pb-45 pb-sm-5">
                    <div className="container">
                        <div className="main-product-tab-area">
                            <div className="tab-menu mb-25">
                                <div className="section-ttitle">
                                    <h2>Best Seller</h2>
                                </div>
                                {/* Nav tabs */}
                                <ul className="nav tabs-area" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-toggle="tab"
                                            href="#electronics2"
                                        >
                                            Electronics{" "}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#beauty2"
                                        >
                                            Beauty
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#electronics2"
                                        >
                                            Sport/Outdoor
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#kids2"
                                        >
                                            Living
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#beauty2"
                                        >
                                            Food
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#kids2"
                                        >
                                            Baby/Kids
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            data-toggle="tab"
                                            href="#fshion2"
                                        >
                                            Fashion
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Tab Contetn Start */}
                            <div className="tab-content">
                                <div id="fshion2" className="tab-pane fade">
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="best-seller-pro-active owl-carousel">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/1.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/2.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Work Lamp Silver
                                                            Proin
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $320.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/3.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/4.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Gpoly and Bark Eames
                                                            Style
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $150.30
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/5.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/6.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $150.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/8.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/9.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Eames and Bark Style
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $180.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/11.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/12.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Eames and Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $160.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/15.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/16.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Bark Vortex Side
                                                            Eames
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/13.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/14.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $95.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/1.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/7.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #fshion End Here */}
                                <div id="kids2" className="tab-pane fade">
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="best-seller-pro-active owl-carousel">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/42.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/43.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Utensils and Knives
                                                            Block
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/40.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/41.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Terra Xpress HE
                                                            Cooking{" "}
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $63.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/39.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/38.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Robert Welch Knife
                                                            Block
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $100.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/36.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/37.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $90.50
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/35.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/36.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Bark and Vortex Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $69.20
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/34.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/35.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Compary and Bark
                                                            Vortex Shewe
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/32.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/33.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            kallery kids weare
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $98.50
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/1.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/7.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #fshion End Here */}
                                <div id="beauty2" className="tab-pane fade">
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="best-seller-pro-active owl-carousel">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/43.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/42.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/41.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/39.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/5.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/6.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/9.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/10.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/11.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/12.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/3.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/4.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #beauty End Here */}
                                <div
                                    id="electronics2"
                                    className="tab-pane fade show active"
                                >
                                    {/* Arrivals Product Activation Start Here */}
                                    <div className="best-seller-pro-active owl-carousel">
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/17.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/18.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Flos Chasen S2
                                                            Suspension
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/19.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/20.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Country Squire
                                                            Florist
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/20.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/21.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Concord Fabric
                                                            Single
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/21.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/22.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Poly and Bark Vortex
                                                            Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/23.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/24.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Gpoly and Bark Eames
                                                            Style
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/24.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/25.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Vortex and Bark
                                                            Vortex Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/26.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/27.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Bark and Vortex Side
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                        {/* Single Product Start */}
                                        <div className="single-product">
                                            {/* Product Image Start */}
                                            <div className="pro-img">
                                                <a href="product.html">
                                                    <img
                                                        className="primary-img"
                                                        src="/shoppage/img/products/28.jpg"
                                                        alt="single-product"
                                                    />
                                                    <img
                                                        className="secondary-img"
                                                        src="/shoppage/img/products/29.jpg"
                                                        alt="single-product"
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="quick_view"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                    title="Quick View"
                                                >
                                                    <i className="lnr lnr-magnifier" />
                                                </a>
                                            </div>
                                            {/* Product Image End */}
                                            {/* Product Content Start */}
                                            <div className="pro-content">
                                                <div className="pro-info">
                                                    <h4>
                                                        <a href="product.html">
                                                            Electronic and Bark
                                                            Vortex
                                                        </a>
                                                    </h4>
                                                    <p>
                                                        <span className="price">
                                                            $84.45
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="pro-actions">
                                                    <div className="actions-primary">
                                                        <a
                                                            href="cart.html"
                                                            title="Add to Cart"
                                                        >
                                                            {" "}
                                                            + Add To Cart
                                                        </a>
                                                    </div>
                                                    <div className="actions-secondary">
                                                        <a
                                                            href="compare.html"
                                                            title="Compare"
                                                        >
                                                            <i className="lnr lnr-sync" />
                                                            <span>
                                                                Add To Compare
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            title="WishList"
                                                        >
                                                            <i className="lnr lnr-heart" />
                                                            <span>
                                                                Add to WishList
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Product Content End */}
                                        </div>
                                        {/* Single Product End */}
                                    </div>
                                    {/* Arrivals Product Activation End Here */}
                                </div>
                                {/* #electronics End Here */}
                            </div>
                            {/* Tab Content End */}
                        </div>
                        {/* main-product-tab-area*/}
                    </div>
                    {/* Container End */}
                </div>
                {/* Arrivals Products Area End Here */}
                {/* Latest Blog Area Start Here */}
                <div className="blog-area ptb-95 off-white-bg ptb-sm-55">
                    <div className="container">
                        <div className="like-product-area">
                            <h2 className="section-ttitle2 mb-30">
                                Latest Blog Post{" "}
                            </h2>
                            {/* Latest Blog Active Start Here */}
                            <div className="latest-blog-active owl-carousel">
                                {/* Single Blog Start */}
                                <div className="single-latest-blog">
                                    <div className="blog-img">
                                        <a href="single-blog.html">
                                            <img
                                                src="/shoppage/img/blog/1.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h4>
                                            <a href="single-blog.html">
                                                At wisi enim ad minim veniam.
                                            </a>
                                        </h4>
                                        <ul className="meta-box d-flex">
                                            <li>
                                                <a href="#">By Truemart</a>
                                            </li>
                                        </ul>
                                        <p>
                                            Aenean vestibulum pretium enim vitae
                                            , non commodo urna volutpat .
                                            Pellentesque vel lacus eget est d...
                                        </p>
                                        <a
                                            className="readmore"
                                            href="single-blog.html"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                    <div className="blog-date">
                                        <span>28</span>
                                        June
                                    </div>
                                </div>
                                {/* Single Blog End */}
                                {/* Single Blog Start */}
                                <div className="single-latest-blog">
                                    <div className="blog-img">
                                        <a href="single-blog.html">
                                            <img
                                                src="/shoppage/img/blog/2.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h4>
                                            <a href="single-blog.html">
                                                Dt wisi enim ad minim veniam.
                                            </a>
                                        </h4>
                                        <ul className="meta-box d-flex">
                                            <li>
                                                <a href="#">By Truemart</a>
                                            </li>
                                        </ul>
                                        <p>
                                            Aenean vestibulum pretium enim vitae
                                            , non commodo urna volutpat .
                                            Pellentesque vel lacus eget est d...
                                        </p>
                                        <a
                                            className="readmore"
                                            href="single-blog.html"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                    <div className="blog-date">
                                        <span>28</span>
                                        June
                                    </div>
                                </div>
                                {/* Single Blog End */}
                                {/* Single Blog Start */}
                                <div className="single-latest-blog">
                                    <div className="blog-img">
                                        <a href="single-blog.html">
                                            <img
                                                src="/shoppage/img/blog/1.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h4>
                                            <a href="single-blog.html">
                                                At wisi enim ad minim veniam.
                                            </a>
                                        </h4>
                                        <ul className="meta-box d-flex">
                                            <li>
                                                <a href="#">By Truemart</a>
                                            </li>
                                        </ul>
                                        <p>
                                            Aenean vestibulum pretium enim vitae
                                            , non commodo urna volutpat .
                                            Pellentesque vel lacus eget est d...
                                        </p>
                                        <a
                                            className="readmore"
                                            href="single-blog.html"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                    <div className="blog-date">
                                        <span>28</span>
                                        June
                                    </div>
                                </div>
                                {/* Single Blog End */}
                                {/* Single Blog Start */}
                                <div className="single-latest-blog">
                                    <div className="blog-img">
                                        <a href="single-blog.html">
                                            <img
                                                src="/shoppage/img/blog/2.jpg"
                                                alt="blog-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="blog-desc">
                                        <h4>
                                            <a href="single-blog.html">
                                                Dt wisi enim ad minim veniam.
                                            </a>
                                        </h4>
                                        <ul className="meta-box d-flex">
                                            <li>
                                                <a href="#">By Truemart</a>
                                            </li>
                                        </ul>
                                        <p>
                                            Aenean vestibulum pretium enim vitae
                                            , non commodo urna volutpat .
                                            Pellentesque vel lacus eget est d...
                                        </p>
                                        <a
                                            className="readmore"
                                            href="single-blog.html"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                    <div className="blog-date">
                                        <span>28</span>
                                        June
                                    </div>
                                </div>
                                {/* Single Blog End */}
                            </div>
                            {/* Latest Blog Active End Here */}
                        </div>
                        {/* main-product-tab-area*/}
                    </div>
                    {/* Container End */}
                </div>
                {/* Latest Blog s Area End Here */}
                {/* Brand Banner Area Start Here */}
                <div className="main-brand-banner pt-95 pb-100 pb-sm-60 pt-sm-55">
                    <div className="container">
                        <div className="section-ttitle mb-30">
                            <h2>Hot Brands</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-3">
                                <div className="col-img">
                                    <img
                                        src="/shoppage/img/banner/h1-band1.jpg"
                                        alt
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/* Brand Banner Start */}
                                <div className="brand-banner owl-carousel">
                                    <div className="single-brand">
                                        <a href="#">
                                            <img
                                                className="img"
                                                src="/shoppage/img/brand/1.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/2.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/3.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="single-brand">
                                        <a href="#">
                                            <img
                                                className="img"
                                                src="/shoppage/img/brand/1.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/2.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/3.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="single-brand">
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/1.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/2.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/3.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="single-brand">
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/2.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/3.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/4.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="single-brand">
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/2.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/3.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/4.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="single-brand">
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/2.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/3.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/4.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                    </div>
                                    <div className="single-brand">
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/2.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/3.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/shoppage/img/brand/4.jpg"
                                                alt="brand-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* Brand Banner End */}
                            </div>
                            <div className="col-lg-3">
                                <div className="col-img">
                                    <img
                                        src="/shoppage/img/banner/h1-band2.jpg"
                                        alt
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Brand Banner Area End Here */}
                <div className="big-banner pb-100 pb-sm-60">
                    <div className="container big-banner-box">
                        <div className="col-img">
                            <a href="#">
                                <img src="/shoppage/img/banner/5.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-img">
                            <a href="#">
                                <img
                                    src="/shoppage/img/banner/h1-banner3.jpg"
                                    alt
                                />
                            </a>
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Support Area Start Here */}
                <div className="support-area bdr-top">
                    <div className="container">
                        <div className="d-flex flex-wrap text-center">
                            <div className="single-support">
                                <div className="support-icon">
                                    <i className="lnr lnr-gift" />
                                </div>
                                <div className="support-desc">
                                    <h6>Great Value</h6>
                                    <span>
                                        Nunc id ante quis tellus faucibus dictum
                                        in eget.
                                    </span>
                                </div>
                            </div>
                            <div className="single-support">
                                <div className="support-icon">
                                    <i className="lnr lnr-rocket" />
                                </div>
                                <div className="support-desc">
                                    <h6>Worlwide Delivery</h6>
                                    <span>
                                        Quisque posuere enim augue, in rhoncus
                                        diam dictum non
                                    </span>
                                </div>
                            </div>
                            <div className="single-support">
                                <div className="support-icon">
                                    <i className="lnr lnr-lock" />
                                </div>
                                <div className="support-desc">
                                    <h6>Safe Payment</h6>
                                    <span>
                                        Duis suscipit elit sem, sed mattis
                                        tellus accumsan.
                                    </span>
                                </div>
                            </div>
                            <div className="single-support">
                                <div className="support-icon">
                                    <i className="lnr lnr-enter-down" />
                                </div>
                                <div className="support-desc">
                                    <h6>Shop Confidence</h6>
                                    <span>
                                        Faucibus dictum suscipit eget metus.
                                        Duis elit sem, sed.
                                    </span>
                                </div>
                            </div>
                            <div className="single-support">
                                <div className="support-icon">
                                    <i className="lnr lnr-users" />
                                </div>
                                <div className="support-desc">
                                    <h6>24/7 Help Center</h6>
                                    <span>
                                        Quisque posuere enim augue, in rhoncus
                                        diam dictum non.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container End */}
                </div>
                {/* Support Area End Here */}
              
                {/* Quick View Content Start */}
                <div className="main-product-thumbnail quick-thumb-content">
                    <div className="container">
                        {/* The Modal */}
                        <div className="modal fade" id="myModal">
                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                        >
                                            ×
                                        </button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <div className="row">
                                            {/* Main Thumbnail Image Start */}
                                            <div className="col-lg-5 col-md-6 col-sm-5">
                                                {/* Thumbnail Large Image start */}
                                                <div className="tab-content">
                                                    <div
                                                        id="thumb-1"
                                                        className="tab-pane fade show active"
                                                    >
                                                        <a
                                                            data-fancybox="images"
                                                            href="img/products/35.jpg"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/35.jpg"
                                                                alt="product-view"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div
                                                        id="thumb-2"
                                                        className="tab-pane fade"
                                                    >
                                                        <a
                                                            data-fancybox="images"
                                                            href="img/products/13.jpg"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/13.jpg"
                                                                alt="product-view"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div
                                                        id="thumb-3"
                                                        className="tab-pane fade"
                                                    >
                                                        <a
                                                            data-fancybox="images"
                                                            href="img/products/15.jpg"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/15.jpg"
                                                                alt="product-view"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div
                                                        id="thumb-4"
                                                        className="tab-pane fade"
                                                    >
                                                        <a
                                                            data-fancybox="images"
                                                            href="img/products/4.jpg"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/4.jpg"
                                                                alt="product-view"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div
                                                        id="thumb-5"
                                                        className="tab-pane fade"
                                                    >
                                                        <a
                                                            data-fancybox="images"
                                                            href="img/products/5.jpg"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/5.jpg"
                                                                alt="product-view"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* Thumbnail Large Image End */}
                                                {/* Thumbnail Image End */}
                                                <div className="product-thumbnail mt-20">
                                                    <div
                                                        className="thumb-menu owl-carousel nav tabs-area"
                                                        role="tablist"
                                                    >
                                                        <a
                                                            className="active"
                                                            data-toggle="tab"
                                                            href="#thumb-1"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/35.jpg"
                                                                alt="product-thumbnail"
                                                            />
                                                        </a>
                                                        <a
                                                            data-toggle="tab"
                                                            href="#thumb-2"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/13.jpg"
                                                                alt="product-thumbnail"
                                                            />
                                                        </a>
                                                        <a
                                                            data-toggle="tab"
                                                            href="#thumb-3"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/15.jpg"
                                                                alt="product-thumbnail"
                                                            />
                                                        </a>
                                                        <a
                                                            data-toggle="tab"
                                                            href="#thumb-4"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/4.jpg"
                                                                alt="product-thumbnail"
                                                            />
                                                        </a>
                                                        <a
                                                            data-toggle="tab"
                                                            href="#thumb-5"
                                                        >
                                                            <img
                                                                src="/shoppage/img/products/5.jpg"
                                                                alt="product-thumbnail"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* Thumbnail image end */}
                                            </div>
                                            {/* Main Thumbnail Image End */}
                                            {/* Thumbnail Description Start */}
                                            <div className="col-lg-7 col-md-6 col-sm-7">
                                                <div className="thubnail-desc fix mt-sm-40">
                                                    <h3 className="product-header">
                                                        Printed Summer Dress
                                                    </h3>
                                                    <div className="pro-price mtb-30">
                                                        <p className="d-flex align-items-center">
                                                            <span className="prev-price">
                                                                16.51
                                                            </span>
                                                            <span className="price">
                                                                $15.19
                                                            </span>
                                                            <span className="saving-price">
                                                                save 8%
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <p className="mb-20 pro-desc-details">
                                                        Long printed dress with
                                                        thin adjustable straps.
                                                        V-neckline and wiring
                                                        under the bust with
                                                        ruffles at the bottom of
                                                        the dress.
                                                    </p>
                                                    <div className="product-size mb-20 clearfix">
                                                        <label>Size</label>
                                                        <select className>
                                                            <option>S</option>
                                                            <option>M</option>
                                                            <option>L</option>
                                                        </select>
                                                    </div>
                                                    <div className="color mb-20">
                                                        <label>color</label>
                                                        <ul className="color-list">
                                                            <li>
                                                                <a
                                                                    className="orange active"
                                                                    href="#"
                                                                />
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="paste"
                                                                    href="#"
                                                                />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="box-quantity d-flex">
                                                        <form action="#">
                                                            <input
                                                                className="quantity mr-40"
                                                                min={1}
                                                                defaultValue={1}
                                                                type="number"
                                                            />
                                                        </form>
                                                        <a
                                                            className="add-cart"
                                                            href="cart.html"
                                                        >
                                                            add to cart
                                                        </a>
                                                    </div>
                                                    <div className="pro-ref mt-15">
                                                        <p>
                                                            <span className="in-stock">
                                                                <i className="ion-checkmark-round" />{" "}
                                                                IN STOCK
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Thumbnail Description End */}
                                        </div>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="custom-footer">
                                        <div className="socila-sharing">
                                            <ul className="d-flex">
                                                <li>share</li>
                                                <li>
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-facebook"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-twitter"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-google-plus-official"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i
                                                            className="fa fa-pinterest-p"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
           </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(Home);