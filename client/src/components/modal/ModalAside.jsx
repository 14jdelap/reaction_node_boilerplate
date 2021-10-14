import React from "react";
import ModalAsideActions from "./ModalAsideActions";
import ModalAsideAdd from "./ModalAsideAdd";

const ModalAside = () => {
  return <aside className="modal-buttons">
    <ModalAsideAdd />
    <ModalAsideActions />
  </aside>
}

export default ModalAside