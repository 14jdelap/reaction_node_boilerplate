import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCard } from "../../actions/CardActions"



const ModalCardDescription = ({ description, cardId }) => {
  const dispatch = useDispatch()

  const [showEditForm, setShowEditForm] = useState(false)
  const [descriptionText, setDescriptionText] = useState(description)

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const updateObject = {
      description: descriptionText
    }

    if (descriptionText != description) {
      dispatch(updateCard(cardId, updateObject))
    }
    setShowEditForm(false)
  }

  if (showEditForm) {
    return <form className="description">
      <p>Description</p>
      <textarea className="textarea-toggle" rows="1" autoFocus value={descriptionText} onChange={(e) => setDescriptionText(e.target.value)}>
      </textarea>
      <div>
        <div className="button" value="Save" onClick={handleSubmitForm}>
          Save
        </div>
        <i className="x-icon icon" onClick={() => setShowEditForm(false)}></i>
      </div>
    </form>
  } else {
    return <form className="description">
    <p>Description</p>
    <span id="description-edit" className="link" onClick={() => setShowEditForm(true)}>
      Edit
    </span>
    <p className="textarea-overlay">
      {descriptionText}
    </p>
    <p id="description-edit-options" className="hidden">
      You have unsaved edits on this field.{" "}
      <span className="link">View edits</span> -{" "}
      <span className="link">Discard</span>
    </p>
  </form>
  }
  
}

export default ModalCardDescription

/* TODO
When we are editing the description show this

*/