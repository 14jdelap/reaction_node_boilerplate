import React from "react";

const ModalCardDescription = ({ description }) => {
  return <form className="description">
    <p>Description</p>
    <span id="description-edit" className="link">
      Edit
    </span>
    <p className="textarea-overlay">
      {description}
    </p>
    <p id="description-edit-options" className="hidden">
      You have unsaved edits on this field.{" "}
      <span className="link">View edits</span> -{" "}
      <span className="link">Discard</span>
    </p>
  </form>
}

export default ModalCardDescription

/* TODO
When we are editing the description show this
<form className="description">
                <p>Description</p>
                <textarea className="textarea-toggle" rows="1" autoFocus>
                  Cards have a symbol to indicate if they contain a description.
                </textarea>
                <div>
                  <div className="button" value="Save">
                    Save
                  </div>
                  <i className="x-icon icon"></i>
                </div>
              </form>
*/