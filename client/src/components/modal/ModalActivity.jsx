import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ModalComment from "./ModalComment";

const ModalActivity = ({ actions }) => {
  const cardId = useParams().id;
  const cards = useSelector(state => state.cards);
  const card = cards.find(card => card._id === cardId);

  console.log(card)

  return <li className="activity-section">
    <h2 className="activity-icon icon">Activity</h2>
    <ul className="horiz-list">
      <li className="not-implemented">Show Details</li>
    </ul>
    <ul className="modal-activity-list">
      {card.comments.map(comment => < ModalComment key={comment._id} comment={comment} />)}
    </ul>
  </li>
}

export default ModalActivity;