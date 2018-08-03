import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../../components/Product/ProductItem";
import ProductList from "../../components/Product/ProductList";
import ProductDetail from "../../components/Product/ProductDetail";
import { Route, Switch } from "react-router-dom";

import {
    fetchProductsRequest,
    addProductRequest,
    updateProductRequest,
    deleteProductRequest
} from "../../actions/productAction";
import DeleteConfirmModal from "../../components/Modal/DeleteConfirmModal";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false
        };
    }

    onShowForm = () => {
        this.setState({
            isFormOpen: true
        });
    };
    onCloseForm = () => {
        this.setState({
            isFormOpen: false
        });
    };

    onSubmitProduct = product => {
        if (product.id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
    };

    onEditProduct = product => {
        this.setState({
            isFormOpen: true,
            selectedProduct: product
        });
    };

    onDeleteProduct = product => {
        if (window.confirm(`Are you sure to delete '${product.name}'?`))
            this.props.onDeleteProduct(product.id);
        this.onCloseForm();
    };

    onClearSelectedProduct = () => {
        this.setState({
            selectedProduct: undefined
        });
    };

    componentDidMount() {
        this.props.onFetchProducts();
    }

    render() {
        const ProductItems = () =>
            this.props.products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        onEditProduct={this.onEditProduct}
                        onDeleteProduct={this.onDeleteProduct}
                    />
                );
            });
        console.log(this.props);

        const { match } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <Switch>
                        {" "}
                        <Route
                            exact
                            path={match.path}
                            render={() => (
                                <ProductList
                                    onClearSelectedProduct={
                                        this.state.onClearSelectedProduct
                                    }
                                    isFormOpen={this.state.isFormOpen}
                                    onShowForm={this.onShowForm}
                                >
                                    <ProductItems />
                                </ProductList>
                            )}
                        />
                        <Route
                            exact
                            path={`${match.path}/add`}
                            render={() => (
                                <ProductDetail
                                    isFormOpen={true}
                                    onCloseForm={this.onCloseForm}
                                    onEditProduct={this.onEditProduct}
                                    onSubmitProduct={this.onSubmitProduct}
                                    selectedProduct={this.state.selectedProduct}
                                    onClearSelectedProduct={
                                        this.onClearSelectedProduct
                                    }
                                />
                            )}
                        />
                    </Switch>
                </div>
                <DeleteConfirmModal
                    deleteObject={this.state.deleteCategory}
                    onConfirmDelete={this.onConfirmDelete}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchProducts: () => dispatch(fetchProductsRequest()),
        onAddProduct: product => dispatch(addProductRequest(product)),
        onUpdateProduct: product => dispatch(updateProductRequest(product)),
        onDeleteProduct: id => dispatch(deleteProductRequest(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
