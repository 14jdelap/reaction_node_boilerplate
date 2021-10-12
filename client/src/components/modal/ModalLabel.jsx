import React from "react"

const ModalLabel = ({ label }) => {
  return <div className="member-container">
    <div className={label + " label colorblindable"}></div>
  </div>
}

export default ModalLabel