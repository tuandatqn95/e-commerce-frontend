import React, { Component } from "react";
import { connect } from "react-redux";

import {
    fetchCategoriesRequest
} from "../../actions/categoryAction";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            image: "",
            description: "",
            price: 0,
            inventory: 0,
            category: ""
        };
    }

    onHandleChange = event => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    };

    onHandleFocus = event => {
        let target = event.target;
        let name = target.name;
        this.setState({
            isFocusing: name
        });
    };

    onBlurFocus = () => {
        this.setState({
            isFocusing: undefined
        });
    };

    validateInput() {
        return true;
    }

    resetForm = () => {
        this.setState({
            id: "",
            name: "",
            image: "",
            description: "",
            price : "",
            inventory: "",
            category: null
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if (this.validateInput()) {
            this.props.onSubmitProduct({
                id: this.state.id,
                name: this.state.name,
                image: this.state.image,
                description: this.state.description,
                price: this.state.price,
                inventory: this.state.inventory,
                category: this.state.category
            });
            this.resetForm();
        }
    };

    onReset = () => {
        this.resetForm();
        this.props.onCloseForm();
    };

    onCloseForm = () =>{
        this.resetForm();
        this.props.onCloseForm();
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.selectedProduct) {
            this.setState({
                id: nextProps.selectedProduct.id,
                name: nextProps.selectedProduct.name,
                image: nextProps.selectedProduct.image,
                description: nextProps.selectedProduct.description,
                price: nextProps.selectedProduct.price,
                inventory: nextProps.selectedProduct.inventory,
                category: nextProps.selectedProduct.category
            });
            nextProps.onClearSelectedProduct();
        }
        if (nextProps.isOpen === false) {
            this.resetForm();
        }
    };

    componentDidMount() {
        this.props.onFetchCategories();
        }
        render() {
            const Categories = () =>
            this.props.categories.map((category,index) => {
                return (
                    <option key={index}>{category.id}</option>
                );
            });
    
            return (
                <div>
                </div>
            );
        }
        
    }
    
    function mapStateToProps(state) {
        return {
            categories: state.categories
        };
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            onFetchCategories: () => dispatch(fetchCategoriesRequest()),
        };
    }
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    ) (ProductDetail);
    