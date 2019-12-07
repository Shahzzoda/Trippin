import React from 'react';
import ReactDOM from 'react-dom'
import './ModalCard.css';

const ModalCard = ({ handleClose, show, children, props }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <button className="btn btn-lg btn-secondary position-absolute mt-2 ml-2" onClick={handleClose}>x</button>
        {children}
      </section>
    </div>
  );
};
export default ModalCard;