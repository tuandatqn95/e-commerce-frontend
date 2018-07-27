import React, { Component } from "react";

const descriptionLength = 70;

class ProductItem extends Component {
    onEditProduct = () => {
        this.props.onEditProduct(this.props.product);
    };

    onDeleteProduct = () => {
        this.props.onDeleteProduct(this.props.product);
    };

    // onShowProduct = () => {
    //     // this.props.onShowProduct(id);
    // };
    
    render() {
        const { id, name, description, image } = this.props.product;

        const Description =
            description.substring(0,descriptionLength) + " ...";

        const Image = <img alt={name} style={{ maxHeight: 150 }} src={image} />;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{Description}</td>
                <td>{Image}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onShowProduct}
                    >
                        <i className="material-icons">library_books</i>
                    </button>{" "}
                    <button
                        type="button"
                        className="btn btn-warning"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onEditProduct}
                    >
                        <i className="material-icons">edit</i>
                    </button>{" "}
                    <button
                        type="button"
                        className="btn btn-danger"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onDeleteProduct}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
