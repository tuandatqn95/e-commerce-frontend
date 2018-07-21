import React, { Component } from "react";

//const descriptionLength = 70;

class UserItem extends Component {
    onEditUser = () => {
        this.props.onEditUser(this.props.user);
    };
    onShowProfile = () => {
        // this.props.onShowProduct(id);
        console.log("onShowProfile");
    };
    render() {
        const { id, name, email, image } = this.props.user;

        // const Description =
        //     description.substring(
        //         0,
        //         description.indexOf(" ", descriptionLength)
        //     ) + (description.length > descriptionLength ? "..." : "");

        const Image = <img alt={name} style={{ maxHeight: 150 }} src={image} />;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{Image}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-success"
                        style={{
                            paddingLeft: 15,
                            paddingRight: 15
                        }}
                        onClick={this.onShowProfile}
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
                        onClick={this.onEditUser}
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
                        //onClick={}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default UserItem;
