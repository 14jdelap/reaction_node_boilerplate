import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: function(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, {board})
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getBoard: function(boardId, callback) {
    return axios
      .get(routes.BOARD_URL + boardId)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createList: function(newList, callback) {
    return axios
      .post(routes.NEW_LIST_URL, newList)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateList: function(listId, dataToUpdate, callback) {
    return axios
      .put(routes.UPDATE_LIST_URL + listId, dataToUpdate)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createNewCard: function(payload, callback) {
    return axios
      .post(routes.NEW_CARD_URL, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getCard: function(cardId, callback) {
    return axios
      .get(routes.GET_CARD_URL + cardId)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateCard: function(cardId, updateObject, callback) {
    return axios
      .patch(routes.UPDATE_CARD_URL + cardId, updateObject)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createNewComment: function(payload, callback) {
    return axios
      .post(routes.NEW_COMMENT_URL, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  // Delete card
};

export default apiClient;
