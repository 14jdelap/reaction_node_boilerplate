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
          { /* How to deal with null due dates? */}
          {!card.dueDate ? "" : <ModalDueDate dueDate={card.dueDate}/> }
        </ul>
        <ModalCardDescription cardId={card._id} description={card.description}/>
      </li>
      <ModalComments />
      { /* How to deal with no comments? */}
      <ModalActivity actions={card.actions} />
    </ul>
  </section>
}


export default ModalBody