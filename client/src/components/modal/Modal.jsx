import React from "react";
import ModalHeader from "./ModalHeader"
import ModalBody from "./ModalBody"
import ModalAside from "./ModalAside"


const Modal = () => {
  const mockCard = {
    title: "Example card title",
    listTitle: "This is the list title",
    labels: ["yellow", "orange", "blue"],
    dueDate: "Aug 4 at 10:42 AM",
    description: "This is just an example description for the card"
  }
  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <i className="x-icon icon close-modal"></i>
        <ModalHeader title={mockCard.title} listTitle={mockCard.listTitle} />
        <ModalBody card={mockCard}/>
        <ModalAside />
      </div>
    </div>
  );
};

export default Modal;
