import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import ExistingCards from "./ExistingCards"
import { updateListTitle } from "../../actions/ListActions"

const List = ({ list }) => {
  const dispatch = useDispatch()

  const [listTitle, setListTitle] = useState(list.title)
  const [showForm, setShowForm] = useState(false)
  const [newCardTitle, setNewCardTitle] = useState("")

  const handleChangeUpdate = (e) => {
    setListTitle(e.target.value)
  }

  const handleUpdateListTitle = () => {
    if (listTitle != list.title) {
      dispatch(updateListTitle(list._id, listTitle))
    }
  }

  const closeAndResetForm = () => {
    setShowForm(false)
    setNewCardTitle("")
  }

  const handleCreateNewCard = () => {
    



    closeAndResetForm()
  }

  return <div className={"list-wrapper" + (showForm ? " add-dropdown-active" : "")}>
    <div className="list-background">
      <div className="list">
        <a className="more-icon sm-icon" href=""></a>
        <div>
          <input className="list-title" value={listTitle} onChange={handleChangeUpdate} onBlur={handleUpdateListTitle}></input>
        </div>
        <div className="add-dropdown add-top">
          <div className="card"></div>
          <a className="button">Add</a>
          <i className="x-icon icon"></i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>

        <ExistingCards listId={list._id} />

        <div className={"add-dropdown add-bottom" + (showForm ? " active-card" : "")}>
          <div className="card">
            <div className="card-info">
            </div>
            <textarea name="add-card" value={newCardTitle} onChange={(e) => setNewCardTitle(e.target.value)}>
            </textarea>
            <div className="members">
            </div>
          </div>
          <a className="button" onClick={closeAndResetForm}>
            Add
          </a>
          <i className="x-icon icon" onClick={closeAndResetForm}>
          </i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>
        <div className="add-card-toggle" data-position="bottom" onClick={() => setShowForm(true)}>
          Add a card...
        </div>
      </div>
    </div>
  </div>

}

export default List