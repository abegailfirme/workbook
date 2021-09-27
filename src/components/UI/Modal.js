import React from "react";

const Modal = (props) => {
    return (
        <React.Fragment>
            <div></div>
            <div>
                <header>
                    <h2> {props.modalTitle} </h2>
                </header>
                <div>
                    <p> {props.modalMessage} </p>
                </div>
                <footer>
                    <button>Okay</button>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default Modal;