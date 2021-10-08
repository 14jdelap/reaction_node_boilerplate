import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createNewList (title, boardId, callback) {
  const newListObj = {
    boardId,
    list: {
      title
    }
  }
  return function(dispatch) {
    apiClient.createList(newListObj, listResponse => {
      listResponse.boardId = boardId
      dispatch(createListSuccess(listResponse))
      if (callback) {
        callback()
      }
    })
  }
}

export function createListSuccess(listResponse) {
  return { type: "ADD_NEW_LIST_SUCCESS", list: listResponse }
}

export function updateListTitle(listId, newTitle) {
  const updateObject = {
    title: newTitle
  }

  return function (dispatch) {
    apiClient.updateList(listId, updateObject, listResponse => {
      dispatch(updateListTitleSuccess(listResponse))
    })
  }
}

export function updateListTitleSuccess(listResponse) {
  return { type: "UPDATE_LIST_TITLE_SUCCESS", list: listResponse}
}