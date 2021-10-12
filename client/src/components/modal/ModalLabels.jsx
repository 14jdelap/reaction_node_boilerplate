import React from "react"
import ModalLabel from "./ModalLabel"

const ModalLabels = ({ labels }) => {
  return <li className="labels-section">
    <h3>Labels</h3>
    {labels.map(label => <ModalLabel key={label} label={label} />)}
    <div className="member-container">
      <i className="plus-icon sm-icon"></i>
    </div>
  </li>
}

export default ModalLabels