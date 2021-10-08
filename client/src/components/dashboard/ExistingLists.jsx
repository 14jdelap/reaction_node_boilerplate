import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import List from "./List"
import { createNewList } from "../../actions/ListActions"

const ExistingLists = ({ boardId }) => {
  const dispatch = useDispatch()

  const lists = useSelector(state => state.lists)

  const [viewForm, setViewForm] = useState(false)
  const [newListTitle, setNewListTitle] = useState("")

  const closeAndResetForm = () => {
    setViewForm(false)
    setNewListTitle("")
  }


  const openForm = () => {
    setViewForm(true)
  }

  const addList = (e) => {
    e.preventDefault()
    dispatch(createNewList(newListTitle, boardId, closeAndResetForm))
  }

  return <div id="list-container" className="list-container">
    <div id="existing-lists" className="existing-lists">
      {lists.map(list => (
        <List key={list._id} list={list} />
      ))}
    </div>
    <div id="new-list" className={"new-list" + (viewForm ? " selected" : "")}>
      <span onClick={openForm}>Add a list...</span>
      <input type="text" placeholder="Add a list..." value={newListTitle} onChange={(e) => setNewListTitle(e.target.value)}/>
      <div>
        <input type="submit" onClick={addList} className="button" value="Save" />
        <i className="x-icon icon" onClick={closeAndResetForm}></i>
      </div>
    </div>
  </div>
}

export default ExistingLists