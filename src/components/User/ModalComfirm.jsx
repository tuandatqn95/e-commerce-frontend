import React, { Component } from "react";
import { modalConfirmId } from "../../constants/ModalId";

class ModalConfirm extends Component {
    onConfirm = () => {
        this.props.onConfirm(this.props.user);
    };
    render() {
        const { user } = this.props;
        return (
            <div className="modal fade" id={modalConfirmId}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Confirm</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>
                                {user
                                    ? `Are you sure to delete ${user.name} ?`
                                    : ""}
                            </h5>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-default"
                                data-toggle="modal"
                                href={`#${modalConfirmId}`}
                                onClick={this.onConfirm}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                data-dismiss="modal"
                                className="btn btn-primary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalConfirm;
