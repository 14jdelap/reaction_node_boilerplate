import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import ExistingCards from "./ExistingCards"
import { updateListTitle } from "../../actions/ListActions"

const List = ({ list }) => {
  const dispatch = useDispatch()

  const [listTitle, setListTitle] = useState(list.title)

  const handleChangeUpdate = (e) => {
    setListTitle(e.target.value)
  }

  const handleUpdateListTitle = () => {
    if (listTitle != list.title) {
      dispatch(updateListTitle(list._id, listTitle))
    }
  }

  return <div className="list-wrapper">
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

        <div className="add-dropdown add-bottom">
          <div className="card">
            <div className="card-info"></div>
            <textarea name="add-card"></textarea>
            <div className="members"></div>
          </div>
          <a className="button">Add</a>
          <i className="x-icon icon"></i>
          <div className="add-options">
            <span>...</span>
          </div>
        </div>
        <div className="add-card-toggle" data-position="bottom">
          Add a card...
        </div>
      </div>
    </div>
  </div>

}

export default List