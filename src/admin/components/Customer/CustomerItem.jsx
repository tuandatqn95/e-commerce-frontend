import React, { Component } from "react";
import { Link } from "react-router-dom";

class CustomerItem extends Component {
    onSelectCustomer = () => {
        this.props.onSelectCustomer(this.props.customer);
    };
    onDeleteCustomer = () => {
        this.props.onDeleteCustomer(this.props.customer);
    };
    render() {
        const { id, name, email, phone, address } = this.props.customer;
        const { match } = this.props;

        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>
                    <Link to={`${match.path}/${id}`}>
                        <button
                            type="button"
                            className="btn btn-success"
                            style={{
                                paddingLeft: 15,
                                paddingRight: 15
                            }}
                            onClick={this.onSelectCustomer}
                        >
                            <i className="material-icons">library_books</i>
                        </button>{" "}
                    </Link>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onDeleteCustomer}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CustomerItem;
