import React from "react";

const ModalDueDate = ({ dueDate }) => {
  return <li className="due-date-section">
    <h3>Due Date</h3>
    <div id="dueDateDisplay" className="overdue completed">
      <input
        id="dueDateCheckbox"
        type="checkbox"
        className="checkbox"
        checked=""
        onChange={() => {}}
        />
        { /* Need to change input when applicable */ }
      {dueDate} <span>{/*TODO: Check if the date is due */}(past due)</span>
    </div>
  </li>
}

export default ModalDueDate