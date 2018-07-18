import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../../components/Product/ProductItem";
import ProductList from "../../components/Product/ProductList";
import ProductForm from "../../components/Product/ProductForm";

function mapStateToProps(state) {
    return {};
}

class Products extends Component {
    render() {
        return <ProductList />;
    }
}

export default connect(mapStateToProps)(Products);
