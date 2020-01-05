import React from "react";
import ReactDOM from 'react-dom';

/*
    Creating a portal. Reference an element in public/index.html: <div id="modal"></div>
 */
const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>, document.querySelector('#modal')
    );
};

export default Modal;