import React from "react";

const ModalAsideAdd = () => {
  
  
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
      <li className="date-button not-implemented">
        <i className="clock-icon sm-icon"></i>Due Date
      </li>
      <li className="attachment-button not-implemented">
        <i className="attachment-icon sm-icon"></i>Attachment
      </li>
    </ul>
  </>
}

export default ModalAsideAdd