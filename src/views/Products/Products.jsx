import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../../components/Product/ProductItem";
import ProductList from "../../components/Product/ProductList";
import ProductForm from "../../components/Product/ProductForm";



function mapStateToProps(state) {
    return {};
}


class Products extends Component {

    // onToggleForm = () => {
    //     this.setState({
    //         isFormOpen: !this.state.isFormOpen
    //         // selectedCategory: undefined
    //     });
    // };

    // onCloseForm = () => {
    //     this.setState({
    //         isFormOpen: false
    //         // selectedCategory: {}
    //     });
    // };
    // onSubmitProduct = product => {
    //     if (product.id) {
    //         this.props.onUpdateProduct(product);
    //     } else {
    //         this.props.onAddProduct(product);
    //     }
    //     this.onToggleForm();
    // };

    // onEditProduct = product => {
    //     this.setState({
    //         isFormOpen: true,
    //         selectedProduct: product
    //     });
    // };

    // onDeleteProduct = product => {
    //     if (window.confirm(`Are you sure to delete '${product.name}'?`))
    //         this.props.onDeleteProduct(product.id);
    //     this.onCloseForm();
    // };

    // onClearSelectedProduct = () => {
    //     this.setState({
    //         selectedProduct: undefined
    //     });
    // };

    render() {
        return( 
            <div className="container-fluid">
                <div className="row">
                    <ProductList/>
                    <ProductForm />
                </div>
               
            </div>
        )
    }
}

export default connect(mapStateToProps)(Products);
