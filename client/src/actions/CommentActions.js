import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createNewComment (commentObject) {

  return function(dispatch) {
    apiClient.createNewComment(commentObject, response => {
      dispatch(createNewCommentSuccess(response.comment));
    });
  }
}

export function createNewCommentSuccess (comment) {
  console.log(comment)
  return { type: "CREATE_NEW_COMMENT_SUCCESS", comment };
}
