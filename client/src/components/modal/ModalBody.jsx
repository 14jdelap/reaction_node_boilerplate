import React from "react";
import ModalLabels from "./ModalLabels"
import ModalDueDate from "./ModalDueDate"
import ModalCardDescription from "./ModalCardDescription"
import ModalComments from "./ModalComments"
import ModalActivity from "./ModalActivity"

const ModalBody = ({ card }) => {
  return <section className="modal-main">
    <ul className="modal-outer-list">
      <li className="details-section">
        <ul className="modal-details-list">
          <ModalLabels labels={card.labels} />
          <ModalDueDate dueDate={card.dueDate} />
        </ul>
        <ModalCardDescription description={card.description}/>
      </li>
      <ModalComments comments={card.comments} />
      <ModalActivity actions={card.actions} />
    </ul>
  </section>
}


export default ModalBody