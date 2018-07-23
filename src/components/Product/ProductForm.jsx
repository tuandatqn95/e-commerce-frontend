import React, { Component } from "react";
import { connect } from "react-redux";

import {
    fetchCategoriesRequest
} from "../../actions/categoryAction";

class ProductForm extends Component {
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
            price : 0,
            inventory: 0,
            category: ""
        });
    };

    // lưu
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
        this.props.categories.map((category) => {
            return (
                <option>{category.id}</option>
            );
        });

        return (
                <div className="modal fade col-md-12 display-none" id="myModal" tabIndex="-1" role="dialog" style={{ padding: 17 }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title text-center"><b> New Product</b></h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.onSubmit} onReset={this.onReset} >
                                    {this.state.id && (
                                    <div 
                                        className={`form-group  ${this
                                        .state.id && "is-filled"} ${this
                                        .state.isFocusing === "id" &&
                                        "is-focused"}`}
                                        >
                                            <label
                                                className="col-form-label col-md-2"> ID: 
                                            </label>

                                            <input
                                                name="id"
                                                id="idProduct"
                                                className="form-control"
                                                disabled="disabled"
                                                type="text"
                                                value={this.state.id}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                            />
                                        </div>
                                    )}
                                    <div className={`form-group ${this
                                        .state.name && "is-filled"} ${this.state
                                        .isFocusing === "name" &&
                                        "is-focused"}`}>
                                        <label className="col-form-label col-md-2"> Name: </label>
                                        <input 
                                            name="name"
                                            className="form-control"
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.onHandleChange}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}
                                            id="product-name"/>
                                    </div>
                                    <div className={`form-group ${this
                                        .state.description &&
                                        "is-filled"} ${this.state.isFocusing ===
                                        "description" && "is-focused"}`}>
                                        <label className="col-form-label col-md-2">
                                            Description:
                                        </label>
                                        <textarea 
                                            className="form-control" 
                                            id="description"
                                            name="description"
                                            rows="5"
                                            value={this.state.description}
                                            onChange={this.onHandleChange}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle}>
                                        </textarea>
                                    </div>
                                    <div className="form-row">
                                        <div className={`form-group col-md-4 ${this.state.price && "is-filled"} ${this.state.isFocusing === "price" && "is-focused"}`}>
                                            <label>
                                                Price:
                                            </label> 
                                            <input
                                                name="price"
                                                value={this.state.price}
                                                onChange={this.onHandleChange}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                                
                                                type="text" 
                                                className="form-control text-right"
                                                id="price" />
                                        </div>
                                        <div className={`form-group col-md-3    
                                        ${this.state.price && "is-filled"} 
                                        ${this.state.isFocusing === "inventory" && "is-focused"}`
                                        }>
                                            <label>Inventory:</label>
                                            <input
                                                name="inventory"
                                                value={this.state.inventory}
                                                onChange={this.onHandleChange}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                                type="text" 
                                                className="form-control text-right" 
                                                id="inventory" />
                                        </div>
                                        <div className={`form-group col-md-5   
                                        ${this.state.price && "is-filled"} 
                                        ${this.state.isFocusing === "inventory" && "is-focused"}`
                                        }>
                                            <label>Category</label>
                                            <select
                                                name="category"
                                                value={this.state.inventory}
                                                onChange={this.onHandleChange}
                                                onFocus={this.onHandleFocus}
                                                onBlur={this.onBlurHandle}
                                                className="form-control text-right"
                                                id="categories">
                                                    <option  selected>{this.state.category === null ? "Chưa phân loại" : this.state.category.id}</option>
                                                    <Categories />
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Image Url... :</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="linkImage"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onHandleChange}
                                            onFocus={this.onHandleFocus}
                                            onBlur={this.onBlurHandle} />
                                    </div>
                                    <div className="modal-body">
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                        <button type="submit" className="btn btn-primary" data-dismiss="modal">Save</button>
                                    </div>
                                    <div className="clearfix" />
                                </form>
                            </div>
                        </div>
                    </div>
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
) (ProductForm);
