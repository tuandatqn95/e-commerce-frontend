import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
                    <option key={index}>{category.name}</option>
                );
            });
    
            return (
                <div className={`container col-md-10`}>
                <h3>Add Product</h3>
                <form>
                    <div className="row">
                        <div className="col-md-5 col-sm-5">
                            <h6>Product Image</h6>
                            <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                                <div className="fileinput-new thumbnail img-no-padding" style={{ maxWidth:370, maxHeight:250}}>
                                    <img src="https://demos.creative-tim.com/paper-kit-pro/assets/img/image_placeholder.jpg" alt="..."/>
                                </div>
                                <div className="fileinput-preview fileinput-exists thumbnail img-no-padding" style={{ maxWidth:370, maxHeight:250}}></div>
                                <div>
                                    <span className="btn btn-default btn-file">
                                        <span className="fileinput-new">Select image</span>
                                        <span className="fileinput-exists">Change</span>
                                        <input name="..." type="file"/>
                                    </span>
                                    <a href="#" className="btn btn-simple btn-danger fileinput-exists" data-dismiss="fileinput">
                                        <i className="fa fa-times"></i> Remove
                                    </a>
                                </div>
                            </div>

                            <h6>Tags</h6>
                            <div id="tags">
                                <div id="tags1533283739412_tagsinput" className="tagsinput " style={{height:"100%"}}>
                                    <span className="btn btn-rose">
                                        <span>Minimal&nbsp;&nbsp;</span>
                                    </span>
                                    <span className="btn btn-rose">
                                        <span>Light&nbsp;&nbsp;</span>
                                    </span>
                                    <span className="btn btn-rose">
                                        <span>New&nbsp;&nbsp;</span>
                                    </span>
                                </div>
                            </div>
                            <h6>Categories</h6>
                            <div className="form-group " >
                                        <select
                                            style={{backgroundColor:"#C0D4D8", margin:10}}
                                            width="50px"
                                            name="category"
                                            value="Chưa phân loại"
                                            className="form-control rounded"
                                            id="categories">
                                            <Categories />
                                        </select>
                                    </div>
                            <br/>
                            <br/>

                            <h6>Format <span className="icon-danger">*</span></h6>
                            <div class="form-check form-check-radio">
                                <label class="form-check-label">
                                    <input
                                        data-toggle="radio" 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="exampleRadios" 
                                        id="exampleRadios1" 
                                        value="option1" />
                                    Digital
                                    <span class="circle">
                                        <span class="check"></span>
                                    </span>
                                </label>
                            </div>
                            <div class="form-check form-check-radio">
                                <label class="form-check-label">
                                    <input 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="exampleRadios" 
                                        id="exampleRadios1" 
                                        value="option1" />
                                    Print
                                    <span class="circle">
                                        <span class="check"></span>
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="col-md-7 col-sm-7">
                            <div className="form-group">
                                <h6>Name <span className="icon-danger">*</span></h6>
                                <input 
                                    className="form-control border-input" 
                                    placeholder="enter the product name here..." 
                                    type="text"/>
                            </div>
                            <div className="form-group">
                                <h6>Slug <span className="icon-danger">*</span></h6>
                                <input 
                                    className="form-control border-input" 
                                    placeholder="enter the product tagline here..." 
                                    type="text"/>
                            </div>
                            <div className="form-group">
                                <h6>Tagline <span className="icon-danger">*</span></h6>
                                <input 
                                    className="form-control border-input" 
                                    placeholder="enter the product tagline here..." 
                                    type="text"/>
                            </div>
                            <div className="row price-row">
                                <div className="col-md-8">
                                    <h6>Price <span className="icon-danger">*</span></h6>
                                    <div className="input-group border-input">
                                        <input 
                                        value=""
                                        placeholder="enter price" 
                                        className="form-control border-input" 
                                        type="text"/>
                                        <span className="input-group-addon"><i className="fa fa-euro"></i></span>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <h6>Inventory</h6>
                                    <div className="input-group border-input">
                                        <input 
                                            value="" 
                                            placeholder="enter amount" 
                                            className="form-control border-input" 
                                            type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h6>Description</h6>
                                <textarea 
                                    className="form-control rounded" 
                                    placeholder="This is a textarea limited to 150 characters." 
                                    rows="5" 
                                    data-limit="150"
                                    style={{ backgroundColor: "#CCC", opacity: "0.5", padding: 10 }}>
                                </textarea>
                                <h5>
                                    <small>
                                        <span id="textarea-limited-message" className="pull-right"><i>150 characters</i></span>
                                    </small>
                                </h5>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input 
                                        class="form-check-input" 
                                        type="checkbox" 
                                        id="checkboxDisplay" 
                                        value="option1"/>
                                        Display on landing page
                                    <span class="form-check-sign">
                                        <span class="check"></span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="row buttons-row col-md-12">
                        <div className="col-md-6 col-sm-6">
                        <Link to="/products"
                            className="btn btn-danger btn-block">
                            Cancel
                        </Link>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <button className="btn btn-primary btn-block">Save</button>
                        </div>

                    </div>
                </form>
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
    