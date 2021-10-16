import React, { useState } from "react";
import { createDispatchHook, useSelector } from "react-redux";
import { useParams } from "react-router";
import DueDatePopover from "../ui/DueDatePopover";

const ModalAsideAdd = () => {
  const cards = useSelector(state => state.cards);
  const cardId = useParams().id;
  const card = cards.find(card => card._id === cardId);
  const dueDate = card.dueDate;

  const [showDueDateForm, setShowDueDateForm] = useState(false);

  const toggleDueDate = () => {
    setShowDueDateForm(!showDueDateForm);
  }
  // Si no hay due date pasar esto
  // new Date().toLocaleString()

  return <>
    <h2>Add</h2>
    <ul>
      <li className="member-button">
        <i className="person-icon sm-icon"></i>Members
      </li>
      <li className="label-button">
        <i className="label-icon sm-icon"></i>Labels
      </li>
      <li className="checklist-button">
        <i className="checklist-icon sm-icon"></i>Checklist
      </li>
      <li className="date-button" onClick={toggleDueDate}>
        <i className="clock-icon sm-icon"></i>Due Date
      </li>
      { showDueDateForm ? <DueDatePopover dueDate={dueDate} /> : ""}
      <li className="attachment-button not-implemented">
        <i className="attachment-icon sm-icon"></i>Attachment
      </li>
    </ul>
  </>
}

export default ModalAsideAdd