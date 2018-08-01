import React, { Component } from "react";

class CustomerItem extends Component {
    render() {
        return (
            <tr>
                <td>name</td>
                <td>email</td>
                <td>phone</td>
                <td>address</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                    >
                        <i className="material-icons">library_books</i>
                    </button>{" "}
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CustomerItem;
