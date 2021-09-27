import React, {useState} from "react";
import { Modal, Button} from 'react-bootstrap';

const CustomModal = (props) => {
    return (
     <React.Fragment>
         <Modal
        show={props.show}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.modalMessage}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onConfirm}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
       </React.Fragment>
    );
};

export default CustomModal;