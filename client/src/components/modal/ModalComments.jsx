import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"

import { createNewComment } from "../../actions/CommentActions";



const ModalComments = () => {
  const dispatch = useDispatch()
  const cardId = useParams().id
  const [commentContent, setCommentContent] = useState("hello")

  const handleSubmitComment = () => {
    const commentObject = {
      cardId,
      comment: {
        text: commentContent
      }
    }

    if (commentContent !== "") {
      dispatch(createNewComment(commentObject))
      setCommentContent("")
    }
  }

  return <li className="comment-section">
    <h2 className="comment-icon icon">Add Comment</h2>
    <div>
      <div className="member-container">
        <div className="card-member">TP</div>
      </div>
      <div className="comment">
        <label>
          <textarea
            required=""
            rows="1"
            placeholder="Write a comment..."
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          ></textarea>
          <div>
            <a className="light-button card-icon sm-icon"></a>
            <a className="light-button smiley-icon sm-icon"></a>
            <a className="light-button email-icon sm-icon"></a>
            <a className="light-button attachment-icon sm-icon"></a>
          </div>
          <div>
            <input
              type="submit"
              className="button"
              value="Save"
              onClick={handleSubmitComment}
            />
          </div>
        </label>
      </div>
    </div>
  </li>
}

export default ModalComments