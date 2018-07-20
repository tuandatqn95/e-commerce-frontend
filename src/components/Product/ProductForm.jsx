import React, { Component } from "react";
import Card from "../Card/Card";

class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "",
            image: "",
            description: ""
        };
    }

    render() {
        const { status = 12 } = this.props;
        return (
                <div className="modal fade col-md-12" id="myModal" tabindex="-1" role="dialog" style={{ padding: 17, display: "none" }}>
                {/* <div className="modal modal-dialog"  id="myModal" role="document"> */}
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h5 className="modal-title text-center" id="exampleModalLabel">New Product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="product-name" className="col-form-label col-md-2"> Name: </label>
                                        <input type="text" className="form-control" id="product-name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="description" className="col-form-label col-md-2">Description:</label>
                                        <textarea className="form-control" id="description"></textarea>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label for="inputPrice">Price:</label>
                                            <input type="text" className="form-control text-right" id="inputPrice" placeholder="VND" value="0"/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label for="inputInventory">Inventory:</label>
                                            <input type="text" className="form-control text-right" id="inputInventory" value="0"/>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label for="inputState">Category</label>
                                            <select id="inputState" className="form-control text-right">
                                                <option  selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="linkImage">Image Url... :</label>
                                        <input type="text" className="form-control" id="linkImage"/>
                                    </div>
                                    <div className="modal-body">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Reset</button>
                                        <button type="button" className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
    
}

export default ProductForm;
