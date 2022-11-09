import React, { ReactNode } from "react";
import ModalPortal from "./ModalPortal";
import classes from "./modal.module.css";

function Modal() {
  return (
    <ModalPortal>
      <div className={classes.modal}>
        <div className={classes.modalBackground}></div>
        <div className={classes.modalContent}>
          <h1>test</h1>
        </div>
      </div>
    </ModalPortal>
  );
}

export default Modal;
