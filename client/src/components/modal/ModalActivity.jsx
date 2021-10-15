import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ModalComment from "./ModalComment";

const ModalActivity = ({ actions }) => {
  const cardId = useParams().id;
  const comments = useSelector(state => state.comments)
  console.log("comments", comments)
  const commentsToRender = comments.filter(comment => comment.cardId == cardId)
  console.log(commentsToRender)

  return <li className="activity-section">
    <h2 className="activity-icon icon">Activity</h2>
    <ul className="horiz-list">
      <li className="not-implemented">Show Details</li>
    </ul>
    <ul className="modal-activity-list">
      {commentsToRender.map(comment => < ModalComment key={comment._id} comment={comment} />)}
    </ul>
  </li>
}

export default ModalActivity;