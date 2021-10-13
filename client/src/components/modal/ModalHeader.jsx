import React from "react";


const ModalHeader = ({ title, listTitle }) => {
  return <header>
    <i className="card-icon icon .close-modal"></i>
    <textarea className="list-title" style={{ height: "45px" }} value={title} onChange={() => {}}>
    </textarea>
    <p>
      in list <a className="link">{listTitle}</a>
      <i className="sub-icon sm-icon"></i>
    </p>
  </header>
}

export default ModalHeader;
