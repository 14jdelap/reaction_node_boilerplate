import React from "react";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateCard } from "../../actions/CardActions"


const ModalHeader = ({ listId, card }) => {
  const dispatch = useDispatch()

  const [cardTitle, setCardTitle] = useState(card.title)

  const lists = useSelector(state => state.lists)
  let listTitle
  try {
    listTitle = lists.find(list => list._id === listId).title
  } catch{
    listTitle = ""
  }

  const handleChangeUpdate = (e) => {
    setCardTitle(e.target.value)
  }

  const handleUpdateListTitle = () => {
    const updateObject = {
      title: cardTitle
    }

    if (cardTitle != card.title) {
      dispatch(updateCard(card._id, updateObject))
    }
  }


  return <header>
    <i className="card-icon icon .close-modal"></i>
    <textarea className="list-title" style={{ height: "45px" }} value={cardTitle} onChange={handleChangeUpdate} onBlur={handleUpdateListTitle}>
    </textarea>
    <p>
      in list <a className="link">{listTitle}</a>
      <i className="sub-icon sm-icon"></i>
    </p>
  </header>
}

export default ModalHeader;
