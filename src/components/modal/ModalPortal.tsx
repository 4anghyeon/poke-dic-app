import React from "react";
import { createPortal } from "react-dom";

function ModalPortal(props: { children: React.ReactNode }) {
  return createPortal(props.children, document.getElementById("detailModal")!);
}

export default ModalPortal;
