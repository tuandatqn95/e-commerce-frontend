import React, { Component } from "react";

class ModalConfirm extends Component {
    render() {
        let { id, name } = this.props.user;
        return (
            <div className="modal fade" id={`modal-confirm-${id}`}>
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
                            <h5>{`Are you sure to delete ${name} ?`}</h5>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-default"
                                data-toggle="modal"
                                href={`#modal-confirm-${id}`}
                                onClick={this.props.onDeleteUser}
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
