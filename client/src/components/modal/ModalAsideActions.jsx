import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom"
import { updateCard } from "../../actions/CardActions"

const ModalAsideActions = () => {
  const dispatch = useDispatch()
  const cardId = useParams().id
  const cards = useSelector(state => state.cards);
  const card = cards.find(card => card._id === cardId)
  

  const handleArchiveCard = () => {
    const updateObject = {
      archived: true
    }

    dispatch(updateCard(cardId, updateObject))
  }
  return <>
    <h2>Actions</h2>
    <ul>
      <li className="move-button">
        <i className="forward-icon sm-icon"></i>Move
      </li>
      <li className="copy-button">
        <i className="card-icon sm-icon"></i>Copy
      </li>
      <li className="subscribe-button">
        <i className="sub-icon sm-icon"></i>Subscribe
        <i className="check-icon sm-icon"></i>
      </li>
      <hr />
      <Link to={`/boards/${card.boardId}`}>
        <li className="archive-button" onClick={handleArchiveCard}>
          <i className="file-icon sm-icon"></i>Archive
        </li>
      </Link>
    </ul>
    <ul className="light-list">
      <li className="not-implemented">Share and more...</li>
    </ul>
  </>
}

export default ModalAsideActions