import React from "react"
import Label from "./Label"
import { Link } from "react-router-dom";


const Card = ({ card }) => {
  return <Link to={`/cards/${card._id}`}>
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {card.labels.map(label => <Label key={label} color={label} />)}
          <p>
            {card.title}
          </p>
        </div>

        <div className="card-icons">
          { card.dueDate === null ? "" : <i className="clock-icon sm-icon overdue-recent completed">
            {card.dueDate}
          </i>}

          {/*Pending: only adding icons when appropriate*/}

          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  </Link>
}

export default Card