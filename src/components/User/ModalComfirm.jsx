import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalConfirm extends Component {
    onConfirm = () => {
        this.props.onConfirm(this.props.user);
        this.props.onCloseModalConfirm();
    };
    render() {
        const { user, isModalConfirmOpen, onCloseModalConfirm } = this.props;
        return (
            <Modal isOpen={isModalConfirmOpen}>
                <ModalHeader toggle={onCloseModalConfirm}>Confirm</ModalHeader>
                <ModalBody>
                    <h5>
                        {user ? `Are you sure to delete ${user.name} ?` : ""}
                    </h5>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.onConfirm}>
                        Delete
                    </Button>{" "}
                    <Button color="default" onClick={onCloseModalConfirm}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalConfirm;
