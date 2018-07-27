import React, { Component } from "react";

class DeleteConfirmModal extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: false };
    }

    onConfirmDelete = object => {
        this.props.onConfirmDelete(object);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteObject) {
            this.setState({ isShow: true });
        } else {
            this.setState({ isShow: false });
        }
    }

    render() {
        const { isShow } = this.state;
        const { deleteObject } = this.props;

        return (
            <div
                className={`swal2-container swal2-fade ${
                    isShow ? "swal2-in" : ""
                }`}
                style={{ overflowY: "auto" }}
            >
                <div
                    className="swal2-modal swal2-show"
                    style={{
                        display: isShow ? "block" : "none",
                        width: 500,
                        padding: 20,
                        background:
                            "rgb(255, 255, 255) none repeat scroll 0% 0%",
                        minHeight: "332"
                    }}
                    tabIndex="-1"
                >
                    <div
                        className="swal2-icon swal2-warning pulse-warning"
                        style={{ display: "block" }}
                    >
                        !
                    </div>
                    <h2>Are you sure?</h2>
                    <div className="swal2-content" style={{ display: "block" }}>
                        You won't be able to revert this!
                    </div>
                    <hr className="swal2-spacer" style={{ display: "block" }} />
                    <button
                        type="button"
                        className="swal2-confirm btn btn-success"
                        onClick={() => this.onConfirmDelete(deleteObject)}
                    >
                        Yes, delete it!
                    </button>
                    <button
                        type="button"
                        className="swal2-cancel btn btn-danger"
                        style={{ display: "inline-block" }}
                        onClick={() => this.onConfirmDelete(null)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

export default DeleteConfirmModal;
