import React, { Component } from "react";

class ModalConfirm extends Component {
    render() {
        let { name } = this.props;
        let { modalId } = this.props;
        return (
            <div className="modal fade" id={modalId}>
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
                                href={`#${modalId}`}
                                onClick={this.props.onConfirm}
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
